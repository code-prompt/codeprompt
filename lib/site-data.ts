import type { LucideIcon } from "lucide-react";
import type { StaticImageData } from "next/image";
import {
  Bot,
  Briefcase,
  Cable,
  Compass,
  Gauge,
  Globe,
  Handshake,
  Rocket,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";

import bheemBharatImage from "@/assets/bheemBharat.png";
import idiogImage from "@/assets/idiog.png";
import inventoryManagementImage from "@/assets/inventory-managment.png";
import natureVacationImage from "@/assets/naturevacation.png";
import priceMitraImage from "@/assets/pricemitra.png";
import spgPrintsImage from "@/assets/spgprints.png";
import threadSeerImage from "@/assets/threadseer.png";

export type SiteStat = {
  value: string;
  label: string;
};

export type ServiceItem = {
  title: string;
  description: string;
  bullets: string[];
  href: string;
  icon: LucideIcon;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ProjectItem = {
  slug: string;
  title: string;
  description: string;
  location: string;
  users: string;
  tags: string[];
  liveUrl: string;
  image: StaticImageData;
};

export type AdvantageItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type KeywordCluster = {
  primary_keyword: string;
  secondary_keywords: string[];
  long_tail_keywords: string[];
  lsi_keywords: string[];
};

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const footerServiceLinks = [
  { href: "/software-development", label: "Custom Software Development" },
  { href: "/ai-development", label: "AI Development & AI Agents" },
  { href: "/saas-development", label: "SaaS Development" },
  { href: "/services#automation-systems", label: "Automation Systems" },
  { href: "/services#startup-mvp-development", label: "Startup MVP Development" },
];

export const socialProofStats: SiteStat[] = [
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Startups Helped" },
  { value: "100%", label: "Launch Success" },
  { value: "24h", label: "Response Time" },
];

export const services: ServiceItem[] = [
  {
    title: "Custom Software Development",
    description:
      "End-to-end custom software development services for startups, SMBs, and enterprise teams that need measurable business outcomes.",
    bullets: ["Business Workflow Systems", "Scalable Product Architecture"],
    href: "/services#custom-software-development",
    icon: Cable,
  },
  {
    title: "AI Development & AI Agents",
    description:
      "AI development company support for LLM features, AI agents, retrieval workflows, and practical automation.",
    bullets: ["AI Agents & Copilots", "LLM Integration Pipelines"],
    href: "/services#ai-development",
    icon: Bot,
  },
  {
    title: "SaaS Development",
    description:
      "Secure SaaS development from product strategy to multi-tenant implementation, billing systems, and scaling.",
    bullets: ["Multi-Tenant Platforms", "Subscription & Usage Billing"],
    href: "/services#saas-development",
    icon: ShieldCheck,
  },
  {
    title: "Automation Systems",
    description:
      "Business automation systems that reduce repetitive manual work and improve speed, quality, and team visibility.",
    bullets: ["Workflow Orchestration", "Ops & CRM Automation"],
    href: "/services#automation-systems",
    icon: Workflow,
  },
  {
    title: "Web & Mobile App Development",
    description:
      "Web application development services and mobile app builds with modern UX, API-first architecture, and high performance.",
    bullets: ["Web Platforms & Dashboards", "iOS and Android Experiences"],
    href: "/services#web-mobile-development",
    icon: Globe,
  },
  {
    title: "Startup MVP Development",
    description:
      "Startup MVP development focused on validating product direction quickly without sacrificing long-term maintainability.",
    bullets: ["Rapid MVP Launch", "Roadmap-Driven Iteration"],
    href: "/services#startup-mvp-development",
    icon: Rocket,
  },
  {
    title: "API Development & Integrations",
    description:
      "Robust API development services for third-party integrations, internal systems, and cross-platform data sync.",
    bullets: ["REST & Event APIs", "System Integration Layers"],
    href: "/services#api-development",
    icon: Handshake,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We define goals, user intent, and business constraints before writing production code.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We map architecture, milestones, success metrics, and sprint rhythm aligned to your timeline.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Our senior engineers ship in short iterations with strong QA and performance checkpoints.",
    icon: Cable,
  },
  {
    step: "04",
    title: "Launch & Scale",
    description:
      "We deploy, monitor, and optimize so your software keeps improving as the business grows.",
    icon: Gauge,
  },
];

export const projects: ProjectItem[] = [
  {
    slug: "bheem-bharat",
    title: "Bheem Bharat",
    description:
      "Community-driven social platform with matrimony, media, and organizational tools built for scale.",
    location: "Assam, India",
    users: "10,000+ users",
    tags: ["Web App", "Community", "Scalable"],
    liveUrl: "https://bheembharat.com/",
    image: bheemBharatImage,
  },
  {
    slug: "spg-prints",
    title: "SPG Prints",
    description:
      "Industrial printing & branding platform currently working with SBI, Adani, Tata, and other enterprise clients.",
    location: "Odisha, India",
    users: "40,000+ users",
    tags: ["Industrial", "Enterprise", "Branding"],
    liveUrl: "https://www.spgprints.in/",
    image: spgPrintsImage,
  },
  {
    slug: "idiog-research",
    title: "IDIOG Research",
    description:
      "Global sustainability and research platform for reports, publications, and policy insights.",
    location: "Global",
    users: "20,000+ users",
    tags: ["Research", "Global", "Platform"],
    liveUrl: "https://idiog.com",
    image: idiogImage,
  },
  {
    slug: "price-mitra",
    title: "PriceMitra",
    description:
      "SaaS price tracker with automated alerts for Amazon, Flipkart, and major brands.",
    location: "India",
    users: "5,000+ users",
    tags: ["SaaS", "Automation", "E-commerce"],
    liveUrl: "https://pricemitra.subhodeep.tech/",
    image: priceMitraImage,
  },
  {
    slug: "threadseer",
    title: "ThreadSeer",
    description:
      "Fashion e-commerce platform with high-conversion UI and a smooth checkout flow.",
    location: "India",
    users: "3,000+ users",
    tags: ["E-commerce", "UI/UX", "Brand"],
    liveUrl: "https://www.threadseer.shop",
    image: threadSeerImage,
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description:
      "Custom inventory and billing system saving 3-4 hours daily for warehouse teams.",
    location: "India",
    users: "1,000+ users",
    tags: ["Internal Tool", "Billing", "Automation"],
    liveUrl: "https://inventory-managment-5kw95f05b.vercel.app/",
    image: inventoryManagementImage,
  },
  {
    slug: "nature-vacation",
    title: "Nature Vacation",
    description:
      "SEO-optimized tourism platform designed for scalable booking and content growth.",
    location: "India",
    users: "Launching Soon",
    tags: ["Tourism", "SEO", "Platform"],
    liveUrl: "https://www.naturevacation.in",
    image: natureVacationImage,
  },
];

export const advantages: AdvantageItem[] = [
  {
    title: "Senior-Only Talent",
    description: "Senior software engineers and AI builders from day one.",
    icon: Sparkles,
  },
  {
    title: "Business-First Execution",
    description: "Roadmaps tied to outcomes, not just output or velocity metrics.",
    icon: Briefcase,
  },
  {
    title: "Direct Communication",
    description: "Founders and operators work directly with delivery teams every sprint.",
    icon: Users,
  },
  {
    title: "Reliable Delivery",
    description: "Clear milestones, weekly demos, and transparent progress at every stage.",
    icon: Rocket,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How long does startup MVP development take?",
    answer:
      "Most MVP builds take 6 to 12 weeks depending on scope, integrations, and design complexity. We prioritize the smallest valuable release and iterate quickly.",
  },
  {
    question: "Do you provide custom software development services for existing businesses?",
    answer:
      "Yes. We build custom software for startups, growing teams, and established businesses that need internal systems, customer platforms, or modernization.",
  },
  {
    question: "Can CodePrompt work as an AI development company partner for our product team?",
    answer:
      "Yes. We build AI agents, intelligent product features, and automation workflows that are validated with real business use cases before scaling.",
  },
  {
    question: "Do you support SaaS products after launch?",
    answer:
      "Absolutely. We provide post-launch support, feature iteration, performance optimization, and scaling support for SaaS platforms.",
  },
  {
    question: "Do you offer API development and third-party integrations?",
    answer:
      "Yes. We design API layers and integration workflows for CRMs, payment systems, analytics stacks, and internal tools.",
  },
];

export const homepageKeywordCluster: KeywordCluster = {
  primary_keyword: "software development company",
  secondary_keywords: [
    "custom software development services",
    "software development services",
    "web application development services",
    "mobile app development services",
    "AI development company",
    "SaaS development company",
    "startup MVP development",
    "API development services",
    "business automation solutions",
  ],
  long_tail_keywords: [
    "best software development company for startups",
    "custom software development company for businesses",
    "AI development company for startups",
    "SaaS development company for founders",
    "startup MVP development company in India",
    "software development company for enterprise automation",
  ],
  lsi_keywords: [
    "product engineering services",
    "digital product development",
    "full-stack development company",
    "enterprise software solutions",
    "agile software development",
  ],
};

export const servicesKeywordCluster: KeywordCluster = {
  primary_keyword: "custom software development services",
  secondary_keywords: [
    "software development company",
    "custom software development company",
    "AI development services",
    "SaaS development services",
    "automation systems development",
    "API development company",
    "startup MVP development services",
  ],
  long_tail_keywords: [
    "custom software development services for startups",
    "custom software development company for business automation",
    "AI and SaaS development company for startups",
    "API development and integration services for enterprises",
    "startup MVP development services in India",
  ],
  lsi_keywords: [
    "software engineering services",
    "application development company",
    "enterprise app development",
    "product development partner",
    "technology consulting and development",
  ],
};

export const seoKeywords = [
  homepageKeywordCluster.primary_keyword,
  ...homepageKeywordCluster.secondary_keywords,
  ...servicesKeywordCluster.secondary_keywords,
];
