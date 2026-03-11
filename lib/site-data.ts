import type { LucideIcon } from "lucide-react";
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
  category: string;
  title: string;
  summary: string;
  outcome: string;
  href: string;
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

export const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const socialProofStats: SiteStat[] = [
  { value: "50+", label: "Projects Completed" },
  { value: "20+", label: "Startups Helped" },
  { value: "100%", label: "Launch Success" },
  { value: "24h", label: "Response Time" },
];

export const services: ServiceItem[] = [
  {
    title: "MVP Launch",
    description:
      "Validate your product idea in weeks, not months. We build feature-complete MVPs designed for growth.",
    bullets: ["Rapid Prototyping", "Core Feature Focus"],
    href: "/services#mvp-launch",
    icon: Rocket,
  },
  {
    title: "Startup Tech Team",
    description:
      "Scale with dedicated experts. Our senior developers integrate directly into your workflow.",
    bullets: ["Embedded Engineering", "Scalable Architecture"],
    href: "/services#startup-team",
    icon: Users,
  },
  {
    title: "Agency White-Label",
    description:
      "Reliable development partnership for design and marketing agencies. Your client, our code.",
    bullets: ["Invisible Partnership", "High-Quality Delivery"],
    href: "/services#white-label",
    icon: Handshake,
  },
  {
    title: "SaaS Development",
    description:
      "From multi-tenant architecture to billing and analytics, we build secure SaaS platforms ready to scale.",
    bullets: ["B2B Product Engineering", "Platform Security"],
    href: "/services#saas-development",
    icon: ShieldCheck,
  },
  {
    title: "AI Product Engineering",
    description:
      "Integrate practical AI into your workflows with LLM features, automation, and measurable business impact.",
    bullets: ["LLM Integrations", "Workflow Automation"],
    href: "/services#ai-product-engineering",
    icon: Bot,
  },
  {
    title: "Web3 Development",
    description:
      "Launch secure on-chain products with wallet integrations, smart contracts, and clear user experiences.",
    bullets: ["Smart Contract Builds", "Wallet + dApp UX"],
    href: "/services#web3-development",
    icon: Globe,
  },
];

export const processSteps: ProcessStep[] = [
  {
    step: "01",
    title: "Discovery",
    description:
      "We map goals, validate assumptions, and align product scope with your startup roadmap.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Planning",
    description:
      "We define architecture, milestones, delivery cadence, and ownership from day one.",
    icon: Workflow,
  },
  {
    step: "03",
    title: "Development",
    description:
      "Our senior engineers build and iterate quickly with quality gates for stability and velocity.",
    icon: Cable,
  },
  {
    step: "04",
    title: "Launch",
    description:
      "We ship to production, monitor outcomes, and support your next round of growth.",
    icon: Gauge,
  },
];

export const projects: ProjectItem[] = [
  {
    category: "Fintech MVP",
    title: "Nexu Finance Dashboard",
    summary:
      "Scalable wealth management platform built with React and Node.js for enterprise-grade data workflows.",
    outcome: "Launched in 9 weeks, 35% faster advisor onboarding",
    href: "/projects#nexu-finance-dashboard",
  },
  {
    category: "Social Tech",
    title: "VibeSphere Networking",
    summary:
      "High-performance social networking app scaling to 10k+ concurrent users across global regions.",
    outcome: "Reached 120k monthly active users in first 6 months",
    href: "/projects#vibesphere-networking",
  },
  {
    category: "B2B SaaS",
    title: "FlowOps Automation",
    summary:
      "Ops automation suite that unified fragmented internal tooling and reduced manual work by 52%.",
    outcome: "Cut incident triage time from 2h to 35m",
    href: "/projects#flowops-automation",
  },
  {
    category: "Healthtech",
    title: "PulseCare Portal",
    summary:
      "HIPAA-ready patient engagement product with secure messaging, scheduling, and analytics.",
    outcome: "Improved appointment completion by 27%",
    href: "/projects#pulsecare-portal",
  },
];

export const advantages: AdvantageItem[] = [
  {
    title: "Senior-Only Talent",
    description: "No junior developers learning on your project.",
    icon: Sparkles,
  },
  {
    title: "Startups First",
    description:
      "Every sprint balances speed, runway, and product-market fit.",
    icon: Briefcase,
  },
  {
    title: "Direct Communication",
    description: "Talk directly to the engineers building your vision.",
    icon: Users,
  },
  {
    title: "Delivery Focus",
    description: "Weekly demos, clear milestones, and measurable outcomes.",
    icon: Rocket,
  },
];

export const faqItems: FaqItem[] = [
  {
    question: "How long does an MVP take?",
    answer:
      "Typically, we launch an initial MVP in 6 to 10 weeks depending on complexity. We focus on getting your core value proposition to market as fast as possible.",
  },
  {
    question: "Do you work with in-house teams?",
    answer:
      "Yes. We often embed with founders, product teams, and existing engineering teams to accelerate delivery without creating overhead.",
  },
  {
    question: "What tech stack do you specialize in?",
    answer:
      "We ship modern web and SaaS products using React, Next.js, TypeScript, Node.js, Python, PostgreSQL, and cloud-native tooling.",
  },
  {
    question: "Can you help after launch?",
    answer:
      "Absolutely. We support post-launch optimization, performance tuning, feature delivery, and long-term roadmap execution.",
  },
  {
    question: "Do you provide fixed-scope pricing?",
    answer:
      "For clearly scoped projects, yes. We also offer monthly team extension plans for evolving products and fast iteration.",
  },
];

export const seoKeywords = [
  "software development services",
  "mvp development company",
  "saas development agency",
  "hire startup developers",
  "build startup MVP",
];
