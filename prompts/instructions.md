
# Code Prompt — Full Website Build Instructions

Build a production ready Next.js 14 website for the software startup **Code Prompt**.

Tech Stack
- Next.js 14 (App Router)
- TypeScript
- TailwindCSS
- Framer Motion
- Lucide Icons
- MDX blog system
- PostgreSQL (for automation metadata)

Pages
Home
Services
Projects
Blog
Blog Post
FAQ
Contact

Folder Structure

/app
/services
/projects
/blog
/blog/[slug]
/faq
/contact

/components
/lib
/content/blog
/public/images
/styles

Blog System

Blog posts stored in:

/content/blog

Format: MDX

Example:

---
title: "How to Build a SaaS MVP"
date: "2026-01-10"
description: "Step-by-step SaaS MVP guide"
tags: ["saas","mvp"]
image: "/images/blog/mvp.png"
---

SEO

Target keywords:
software development services
mvp development company
saas development agency
hire startup developers
build startup MVP

Performance Goals

Lighthouse:
Performance 90+
SEO 95+
Accessibility 90+

Environment Variables

GEMINI_API_KEY=
TRENDING_RSS_URL=
GEMINI_MODEL=gemini-flash-lite-latest
DATABASE_URL=
CRON_SECRET=

TELEGRAM_BOT_TOKEN=
TELEGRAM_CHAT_ID=
TELEGRAM_WEBHOOK_SECRET=

NEXT_PUBLIC_SITE_URL=
