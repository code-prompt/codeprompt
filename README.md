# Code Prompt Website

Production-ready Next.js company website for **Code Prompt** with:

- Multi-page marketing site (`/`, `/services`, `/projects`, `/faq`, `/contact`)
- MDX-powered blog (`/blog`, `/blog/[slug]`)
- AI blog automation (API + Telegram webhook)
- Framer Motion reveal animations
- Lucide icon system
- PostgreSQL helper for automation metadata

## Stack

- Next.js 16 (App Router)
- TypeScript
- Tailwind CSS v4
- Framer Motion
- Lucide React
- gray-matter + next-mdx-remote
- pg

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build checks

```bash
npm run lint
npm run build
```

## Environment variables

Copy `.env.example` to `.env` and set values:

- `GEMINI_API_KEY`
- `TRENDING_RSS_URL`
- `GEMINI_MODEL`
- `BLOG_OUTPUT_PATH`
- `DATABASE_URL`
- `DATABASE_SSL`
- `CRON_SECRET`
- `TELEGRAM_BOT_TOKEN`
- `TELEGRAM_CHAT_ID`
- `TELEGRAM_WEBHOOK_SECRET`
- `NEXT_PUBLIC_SITE_URL`

## Blog behavior

- If no MDX file exists in `content/blog`, `/blog` shows: `There is no published blogs.`
- In local development without `DATABASE_URL`, new posts are written to `content/blog/*.mdx`.
- In serverless production (for example Vercel), blogs are stored in PostgreSQL via `DATABASE_URL`.
- For managed PostgreSQL providers that enforce TLS, set `DATABASE_SSL=true`.

## Automation endpoints

- `POST /api/automation/generate-post`
- `GET /api/automation/generate-post?topic=Your+Topic`
- `POST /api/telegram/webhook`
- `POST /api/contact/submit`

`/api/automation/generate-post` requires `Authorization: Bearer <CRON_SECRET>` when `CRON_SECRET` is set.

## Try automation manually

```bash
curl -X POST "http://localhost:3000/api/automation/generate-post" \
  -H "Authorization: Bearer <CRON_SECRET>" \
  -H "Content-Type: application/json" \
  -d '{"topic":"How to build AI SaaS in 2026"}'
```

## Telegram setup

Set webhook with secret token:

```bash
curl -X POST "https://api.telegram.org/bot<TELEGRAM_BOT_TOKEN>/setWebhook" \
  -d "url=https://<your-domain>/api/telegram/webhook" \
  -d "secret_token=<TELEGRAM_WEBHOOK_SECRET>"
```

Then send to your bot:

```text
/blog How to build a startup MVP for fintech
/forms
/forms 2
```

The bot will generate, publish, and reply with the blog URL.
`/forms` returns paginated contact submissions (5 entries per page).
Only `TELEGRAM_CHAT_ID` chat is allowed to run `/blog` and `/forms`.
