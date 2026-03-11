import { NextRequest, NextResponse } from "next/server";

import { getOwnerChatId, sendTelegramMessage } from "@/lib/automation/telegram";
import { createContactSubmission } from "@/lib/db";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

type ContactBody = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
};

function sanitize(input: string): string {
  return input.trim().replace(/\s+/g, " ");
}

function truncate(input: string, max = 1800): string {
  if (input.length <= max) return input;
  return `${input.slice(0, max)}...`;
}

function isValidEmail(value: string): boolean {
  return /^\S+@\S+\.\S+$/.test(value);
}

export async function POST(request: NextRequest) {
  const body = (await request.json().catch(() => ({}))) as ContactBody;

  const name = sanitize(String(body.name ?? ""));
  const email = sanitize(String(body.email ?? "")).toLowerCase();
  const company = sanitize(String(body.company ?? ""));
  const message = String(body.message ?? "").trim();

  if (!name || name.length < 2) {
    return NextResponse.json({ ok: false, error: "Please provide a valid name." }, { status: 400 });
  }

  if (!isValidEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please provide a valid email." }, { status: 400 });
  }

  if (!message || message.length < 10) {
    return NextResponse.json(
      { ok: false, error: "Please provide a detailed project message." },
      { status: 400 },
    );
  }

  if (!process.env.DATABASE_URL) {
    return NextResponse.json(
      { ok: false, error: "Contact form backend is not configured." },
      { status: 500 },
    );
  }

  const saved = await createContactSubmission({
    name,
    email,
    company: company || undefined,
    message,
    source: "website",
  });

  if (!saved) {
    return NextResponse.json(
      { ok: false, error: "Failed to save contact response." },
      { status: 500 },
    );
  }

  const ownerChatId = getOwnerChatId();
  if (ownerChatId !== null) {
    const lines = [
      "New Contact Form Submission",
      `Name: ${saved.name}`,
      `Email: ${saved.email}`,
      `Company: ${saved.company ?? "-"}`,
      `Date: ${new Date(saved.created_at).toISOString()}`,
      "",
      `Message:\n${truncate(saved.message, 1200)}`,
    ];

    try {
      await sendTelegramMessage(ownerChatId, lines.join("\n"));
    } catch {
      // Keep form submission successful even if Telegram notification fails.
    }
  }

  return NextResponse.json({ ok: true, id: saved.id }, { status: 201 });
}
