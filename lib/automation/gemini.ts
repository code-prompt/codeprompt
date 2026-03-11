export type AiDraft = {
  title: string;
  description: string;
  tags: string[];
  contentMarkdown: string;
};

type GeminiResponse = {
  candidates?: Array<{
    content?: {
      parts?: Array<{ text?: string }>;
    };
  }>;
};

type ParsedStructuredDraft = {
  title?: string;
  description?: string;
  tags?: string[];
  contentMarkdown?: string;
};

function extractJsonBlock(text: string): string {
  const fenced = text.match(/```json\s*([\s\S]*?)```/i);
  if (fenced?.[1]) return fenced[1].trim();

  const firstBrace = text.indexOf("{");
  const lastBrace = text.lastIndexOf("}");
  if (firstBrace >= 0 && lastBrace > firstBrace) {
    return text.slice(firstBrace, lastBrace + 1);
  }

  return text;
}

function normalizeTags(value: unknown): string[] {
  if (Array.isArray(value)) {
    return value
      .map((item) => String(item).trim().toLowerCase())
      .filter(Boolean)
      .slice(0, 6);
  }

  if (typeof value === "string") {
    return value
      .split(",")
      .map((item) => item.trim().toLowerCase())
      .filter(Boolean)
      .slice(0, 6);
  }

  return [];
}

function parseStructuredDraft(text: string): ParsedStructuredDraft {
  const title = text.match(/(?:^|\n)TITLE:\s*(.+)/i)?.[1]?.trim();
  const description = text.match(/(?:^|\n)DESCRIPTION:\s*(.+)/i)?.[1]?.trim();
  const tagsLine = text.match(/(?:^|\n)TAGS:\s*(.+)/i)?.[1]?.trim();

  const contentMatch =
    text.match(/---CONTENT_START---\s*([\s\S]*?)\s*---CONTENT_END---/i) ??
    text.match(/(?:^|\n)CONTENT_MARKDOWN:\s*([\s\S]*)$/i);

  const contentMarkdown = contentMatch?.[1]?.trim();

  return {
    title,
    description,
    tags: tagsLine
      ? tagsLine
          .split(",")
          .map((item) => item.trim())
          .filter(Boolean)
      : undefined,
    contentMarkdown,
  };
}

function parseAiResponse(rawText: string): ParsedStructuredDraft {
  try {
    return JSON.parse(extractJsonBlock(rawText)) as Partial<AiDraft>;
  } catch {
    return parseStructuredDraft(rawText);
  }
}

function validateDraft(draft: Partial<AiDraft>, topic: string): AiDraft {
  const contentMarkdown = String(draft.contentMarkdown ?? "").trim();
  if (!contentMarkdown) {
    throw new Error("AI response did not include blog markdown content.");
  }

  return {
    title: String(draft.title ?? topic).trim() || topic,
    description:
      String(draft.description ?? `Practical guide on ${topic} for startup teams.`).trim() ||
      `Practical guide on ${topic} for startup teams.`,
    tags: normalizeTags(draft.tags),
    contentMarkdown,
  };
}

export async function generateBlogDraft(params: {
  topic: string;
  trendingTopics: string[];
}): Promise<AiDraft> {
  const apiKey = process.env.GEMINI_API_KEY;
  const model = process.env.GEMINI_MODEL ?? "gemini-flash-lite-latest";

  if (!apiKey) {
    throw new Error("Missing GEMINI_API_KEY.");
  }

  const trendingLine = params.trendingTopics.length
    ? `Trending topics for context: ${params.trendingTopics.join(" | ")}`
    : "No trending topics available, focus on the requested topic.";

  const prompt = `
You are writing a production-ready blog post for Code Prompt, a startup-focused software development company.

Primary topic: "${params.topic}"
${trendingLine}

Return the response in EXACTLY this plain-text format:
TITLE: <string>
DESCRIPTION: <string up to 170 chars>
TAGS: <comma separated tags>
---CONTENT_START---
<full markdown article>
---CONTENT_END---

Rules for article markdown:
- 1400 to 2200 words.
- SEO-focused and helpful.
- Use H2 and H3 headings.
- Include practical examples.
- Include one FAQ section.
- Include a conclusion.
- Do not include any extra notes before TITLE or after CONTENT_END.
`.trim();

  const endpoint = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`;

  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      contents: [{ role: "user", parts: [{ text: prompt }] }],
      generationConfig: {
        temperature: 0.7,
      },
    }),
  });

  if (!response.ok) {
    const body = await response.text();
    throw new Error(`Gemini request failed (${response.status}): ${body.slice(0, 300)}`);
  }

  const payload = (await response.json()) as GeminiResponse;
  const rawText =
    payload.candidates?.[0]?.content?.parts
      ?.map((part) => part.text ?? "")
      .join("\n")
      .trim() ?? "";

  if (!rawText) {
    throw new Error("Gemini returned an empty response.");
  }

  const parsed = parseAiResponse(rawText) as Partial<AiDraft>;
  if (!parsed.contentMarkdown) {
    throw new Error(
      `AI response format invalid. Please retry. Raw preview: ${rawText.slice(0, 320)}`,
    );
  }

  return validateDraft(parsed, params.topic);
}
