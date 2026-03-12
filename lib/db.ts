import { randomUUID } from "node:crypto";

import { Pool, type PoolConfig } from "pg";

let pool: Pool | null = null;
let poolConnectionString: string | null = null;
let automationRunsTableEnsured = false;
let blogPostsTableEnsured = false;
let contactSubmissionsTableEnsured = false;

function parseBooleanEnv(value: string | undefined): boolean | null {
  if (!value) return null;
  const normalized = value.trim().toLowerCase();
  if (["1", "true", "yes", "on"].includes(normalized)) return true;
  if (["0", "false", "no", "off"].includes(normalized)) return false;
  return null;
}

function shouldUseSsl(connectionString: string): boolean {
  const sslFromEnv = parseBooleanEnv(process.env.DATABASE_SSL);
  if (sslFromEnv !== null) return sslFromEnv;

  try {
    const sslMode = new URL(connectionString).searchParams.get("sslmode")?.toLowerCase();
    if (!sslMode) return false;
    return !["disable", "allow", "prefer"].includes(sslMode);
  } catch {
    return false;
  }
}

function createPoolConfig(connectionString: string): PoolConfig {
  const config: PoolConfig = { connectionString };

  if (shouldUseSsl(connectionString)) {
    config.ssl = {
      rejectUnauthorized: false,
    };
  }

  return config;
}

function getErrorMessage(error: unknown): string {
  if (error instanceof Error) return error.message;
  return "Unknown database error";
}

function logDbError(scope: string, error: unknown): void {
  console.error(`[db:${scope}] ${getErrorMessage(error)}`);
}

export function getDbPool(): Pool | null {
  const connectionString = process.env.DATABASE_URL?.trim();
  if (!connectionString) return null;

  if (!pool || poolConnectionString !== connectionString) {
    pool = new Pool(createPoolConfig(connectionString));
    poolConnectionString = connectionString;
  }

  return pool;
}

export type AutomationRun = {
  id: string;
  topic: string;
  source?: string;
  status: string;
  error_message?: string | null;
  created_at: string;
};

type StoredBlogPostRow = {
  slug: string;
  title: string;
  description: string;
  tags: unknown;
  content_markdown: string;
  image: string | null;
  published_at: string;
  created_at: string;
};

export type StoredBlogPost = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  content_markdown: string;
  image: string | null;
  published_at: string;
  created_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  company: string | null;
  message: string;
  source: string | null;
  created_at: string;
};

function normalizeTags(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.map((tag) => String(tag)).filter(Boolean);
}

function mapStoredBlogPost(row: StoredBlogPostRow): StoredBlogPost {
  return {
    ...row,
    tags: normalizeTags(row.tags),
  };
}

async function ensureAutomationRunsTable(): Promise<void> {
  if (automationRunsTableEnsured) return;

  const db = getDbPool();
  if (!db) return;

  await db.query(`
    CREATE TABLE IF NOT EXISTS automation_runs (
      id TEXT PRIMARY KEY,
      topic TEXT NOT NULL,
      source TEXT,
      status TEXT NOT NULL,
      error_message TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  automationRunsTableEnsured = true;
}

async function ensureBlogPostsTable(): Promise<void> {
  if (blogPostsTableEnsured) return;

  const db = getDbPool();
  if (!db) return;

  await db.query(`
    CREATE TABLE IF NOT EXISTS ai_blog_posts (
      id TEXT PRIMARY KEY,
      slug TEXT UNIQUE NOT NULL,
      title TEXT NOT NULL,
      description TEXT NOT NULL,
      tags JSONB NOT NULL DEFAULT '[]'::jsonb,
      content_markdown TEXT NOT NULL,
      image TEXT,
      topic TEXT,
      source TEXT,
      published_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  blogPostsTableEnsured = true;
}

async function ensureContactSubmissionsTable(): Promise<void> {
  if (contactSubmissionsTableEnsured) return;

  const db = getDbPool();
  if (!db) return;

  await db.query(`
    CREATE TABLE IF NOT EXISTS contact_submissions (
      id TEXT PRIMARY KEY,
      name TEXT NOT NULL,
      email TEXT NOT NULL,
      company TEXT,
      message TEXT NOT NULL,
      source TEXT,
      created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
    )
  `);

  contactSubmissionsTableEnsured = true;
}

export async function getLatestAutomationRuns(limit = 5): Promise<AutomationRun[]> {
  const db = getDbPool();
  if (!db) return [];

  await ensureAutomationRunsTable();

  const query = `
    SELECT id::text, topic, source, status, error_message, created_at::text
    FROM automation_runs
    ORDER BY created_at DESC
    LIMIT $1
  `;

  const { rows } = await db.query<AutomationRun>(query, [limit]);
  return rows;
}

export async function createAutomationRun(topic: string, source: string): Promise<string | null> {
  const db = getDbPool();
  if (!db) return null;

  const id = randomUUID();

  try {
    await ensureAutomationRunsTable();

    await db.query(
      `
      INSERT INTO automation_runs (id, topic, source, status, created_at)
      VALUES ($1, $2, $3, $4, NOW())
      `,
      [id, topic, source, "started"],
    );
    return id;
  } catch {
    return null;
  }
}

export async function updateAutomationRunStatus(
  id: string,
  status: "success" | "failed",
  errorMessage?: string,
): Promise<void> {
  const db = getDbPool();
  if (!db) return;

  try {
    await ensureAutomationRunsTable();

    await db.query(
      `
      UPDATE automation_runs
      SET status = $2, error_message = $3
      WHERE id = $1
      `,
      [id, status, errorMessage ?? null],
    );
  } catch {
    // Ignore persistence errors so publishing can still succeed.
  }
}

export async function getAllStoredBlogPosts(): Promise<StoredBlogPost[]> {
  const db = getDbPool();
  if (!db) return [];

  try {
    await ensureBlogPostsTable();

    const { rows } = await db.query<StoredBlogPostRow>(`
      SELECT
        slug,
        title,
        description,
        tags,
        content_markdown,
        image,
        published_at::text,
        created_at::text
      FROM ai_blog_posts
      ORDER BY published_at DESC
    `);

    return rows.map(mapStoredBlogPost);
  } catch (error) {
    logDbError("getAllStoredBlogPosts", error);
    throw error;
  }
}

export async function getStoredBlogPostBySlug(slug: string): Promise<StoredBlogPost | null> {
  const db = getDbPool();
  if (!db) return null;

  try {
    await ensureBlogPostsTable();

    const { rows } = await db.query<StoredBlogPostRow>(
      `
      SELECT
        slug,
        title,
        description,
        tags,
        content_markdown,
        image,
        published_at::text,
        created_at::text
      FROM ai_blog_posts
      WHERE slug = $1
      LIMIT 1
      `,
      [slug],
    );

    const row = rows[0];
    return row ? mapStoredBlogPost(row) : null;
  } catch (error) {
    logDbError("getStoredBlogPostBySlug", error);
    throw error;
  }
}

export async function createStoredBlogPost(input: {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  contentMarkdown: string;
  image?: string;
  topic?: string;
  source?: string;
  publishedAt?: Date;
}): Promise<"created" | "conflict" | "error"> {
  const db = getDbPool();
  if (!db) return "error";

  try {
    await ensureBlogPostsTable();

    await db.query(
      `
      INSERT INTO ai_blog_posts (
        id,
        slug,
        title,
        description,
        tags,
        content_markdown,
        image,
        topic,
        source,
        published_at,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5::jsonb, $6, $7, $8, $9, $10, NOW())
      `,
      [
        randomUUID(),
        input.slug,
        input.title,
        input.description,
        JSON.stringify(input.tags),
        input.contentMarkdown,
        input.image ?? null,
        input.topic ?? null,
        input.source ?? null,
        input.publishedAt ?? new Date(),
      ],
    );

    return "created";
  } catch (error) {
    const err = error as { code?: string };
    if (err.code === "23505") return "conflict";
    logDbError("createStoredBlogPost", error);
    return "error";
  }
}

export async function createContactSubmission(input: {
  name: string;
  email: string;
  company?: string;
  message: string;
  source?: string;
}): Promise<ContactSubmission | null> {
  const db = getDbPool();
  if (!db) return null;

  try {
    await ensureContactSubmissionsTable();

    const { rows } = await db.query<ContactSubmission>(
      `
      INSERT INTO contact_submissions (
        id,
        name,
        email,
        company,
        message,
        source,
        created_at
      )
      VALUES ($1, $2, $3, $4, $5, $6, NOW())
      RETURNING id, name, email, company, message, source, created_at::text
      `,
      [
        randomUUID(),
        input.name,
        input.email,
        input.company?.trim() ? input.company.trim() : null,
        input.message,
        input.source ?? null,
      ],
    );

    return rows[0] ?? null;
  } catch {
    return null;
  }
}

export async function getContactSubmissionsPaginated(params: {
  page: number;
  pageSize: number;
}): Promise<{
  items: ContactSubmission[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}> {
  const db = getDbPool();
  if (!db) {
    return { items: [], total: 0, page: params.page, pageSize: params.pageSize, totalPages: 0 };
  }

  const safePageSize = Math.max(1, Math.min(params.pageSize, 20));
  const safePage = Math.max(1, params.page);

  try {
    await ensureContactSubmissionsTable();

    const countResult = await db.query<{ count: string }>(
      `SELECT COUNT(*)::text AS count FROM contact_submissions`,
    );
    const total = Number(countResult.rows[0]?.count ?? "0");
    const totalPages = total > 0 ? Math.ceil(total / safePageSize) : 1;
    const clampedPage = Math.min(safePage, totalPages);
    const offset = (clampedPage - 1) * safePageSize;

    const { rows } = await db.query<ContactSubmission>(
      `
      SELECT id, name, email, company, message, source, created_at::text
      FROM contact_submissions
      ORDER BY created_at DESC
      LIMIT $1 OFFSET $2
      `,
      [safePageSize, offset],
    );

    return {
      items: rows,
      total,
      page: clampedPage,
      pageSize: safePageSize,
      totalPages,
    };
  } catch {
    return { items: [], total: 0, page: safePage, pageSize: safePageSize, totalPages: 0 };
  }
}
