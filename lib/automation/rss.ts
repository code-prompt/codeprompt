const TITLE_REGEX = /<item[\s\S]*?<title>([\s\S]*?)<\/title>/gi;
const ENTRY_TITLE_REGEX = /<entry[\s\S]*?<title[^>]*>([\s\S]*?)<\/title>/gi;

function decodeHtml(value: string): string {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/<[^>]+>/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

function extractTitles(xml: string, regex: RegExp): string[] {
  const titles: string[] = [];

  let match = regex.exec(xml);
  while (match) {
    const title = decodeHtml(match[1] ?? "");
    if (title) titles.push(title);
    match = regex.exec(xml);
  }

  return titles;
}

export async function fetchTrendingTopics(limit = 5): Promise<string[]> {
  const url = process.env.TRENDING_RSS_URL;
  if (!url) return [];

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        Accept: "application/rss+xml, application/xml, text/xml;q=0.9, */*;q=0.8",
      },
      signal: controller.signal,
      cache: "no-store",
    });

    if (!response.ok) return [];

    const xml = await response.text();
    const rssTitles = extractTitles(xml, TITLE_REGEX);
    const atomTitles = extractTitles(xml, ENTRY_TITLE_REGEX);

    const unique = Array.from(new Set([...rssTitles, ...atomTitles]));
    return unique.slice(0, limit);
  } catch {
    return [];
  } finally {
    clearTimeout(timeout);
  }
}
