
# Code Prompt — AI Blog Automation System

Automation Flow

Telegram Bot
→ Receive blog title
→ Fetch trending topics via RSS
→ Generate blog using Gemini
→ Save MDX
→ Publish on Next.js blog

Project Structure

/automation
/blog-generator
index.ts
telegram-bot.ts
ai-writer.ts
rss-research.ts
mdx-generator.ts
publish-blog.ts

Environment Variables

GEMINI_API_KEY=
GEMINI_MODEL=gemini-flash-lite-latest

TRENDING_RSS_URL=

DATABASE_URL=

CRON_SECRET=

TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_WEBHOOK_SECRET=

BLOG_OUTPUT_PATH=../content/blog

Telegram Command

/blog How to build AI SaaS

AI Prompt

Write a 2000+ word SEO optimized blog.
Include headings, lists, examples, FAQ and conclusion.
Return Markdown format.

MDX Output Example

---
title: "How to Build AI SaaS"
date: "2026-01-10"
description: "Guide to building AI SaaS"
tags: ["ai","saas"]
---

# How to Build AI SaaS
