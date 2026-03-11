
# Code Prompt — Next.js Project Scaffold

Initialize Project

npx create-next-app@latest codeprompt-site --typescript --app

Install Dependencies

npm install tailwindcss postcss autoprefixer
npm install framer-motion lucide-react
npm install gray-matter
npm install next-mdx-remote
npm install react-hook-form
npm install clsx
npm install pg

Folder Structure

/app
/components
/lib
/content/blog
/public/images
/styles
/automation

Core Components

Navbar
Hero
ServiceCard
ProjectCard
BlogCard
FAQAccordion
CTA
Footer

Blog Loader

/lib/blog.ts

Use

fs
gray-matter

Functions

getAllPosts()
getPostBySlug()

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
