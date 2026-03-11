import { Pool } from "pg";
import { randomUUID } from "node:crypto";

const connectionString = process.env.DATABASE_URL;

let pool: Pool | null = null;

export function getDbPool(): Pool | null {
  if (!connectionString) return null;
  if (!pool) {
    pool = new Pool({ connectionString });
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

export async function getLatestAutomationRuns(limit = 5): Promise<AutomationRun[]> {
  const db = getDbPool();
  if (!db) return [];

  const query = `
    SELECT id::text, topic, status, created_at::text
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
