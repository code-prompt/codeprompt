import Image from "next/image";
import Link from "next/link";

import { footerServiceLinks, navLinks } from "@/lib/site-data";

import { Container } from "../ui/container";

export function Footer() {
  return (
    <footer className="mt-16 bg-slate-950 py-12 text-slate-300 md:mt-24 md:py-16">
      <Container>
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-10 w-[160px]">
                <Image src="/logo.png" alt="CodePrompt" fill className="object-contain object-left" />
              </div>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-7 text-slate-400">
              Premier software development studio for modern startups. Building the next
              generation of digital products.
            </p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Services</p>
            <ul className="mt-4 space-y-3 text-sm">
              {footerServiceLinks.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="transition hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Company</p>
            <ul className="mt-4 space-y-3 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="transition hover:text-white">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-white">Contact</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-400">
              <li>contact@codeprompt.in</li>
              <li>info@codeprompt.in</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 md:mt-12 md:flex-row md:items-center md:justify-between">
          <p>© 2026 CodePrompt Studio. All rights reserved.</p>
          <div className="flex flex-wrap items-center gap-5">
            <Link href="/" className="transition hover:text-slate-300">
              Privacy Policy
            </Link>
            <Link href="/" className="transition hover:text-slate-300">
              Terms of Service
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}
