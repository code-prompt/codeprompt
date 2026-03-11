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
  if (!Array.isArray(value)) return [];
  return value
    .map((item) => String(item).trim().toLowerCase())
    .filter(Boolean)
    .slice(0, 6);
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

Return ONLY valid JSON with this schema:
{
  "title": "string",
  "description": "string up to 170 chars",
  "tags": ["string", "string", "string"],
  "contentMarkdown": "full markdown article"
}

Rules for contentMarkdown:
- 1400 to 2200 words.
- SEO-focused and helpful.
- Use H2 and H3 headings.
- Include practical examples.
- Include one FAQ section.
- Include a conclusion.
- Do not include markdown code fences around the JSON.
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

  const parsed = JSON.parse(extractJsonBlock(rawText)) as Partial<AiDraft>;
  return validateDraft(parsed, params.topic);
}
