import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { Header } from "@/components/site/header";
import { seoKeywords } from "@/lib/site-data";

import "./globals.css";

const headingFont = Space_Grotesk({
  variable: "--font-heading",
  subsets: ["latin"],
});

const bodyFont = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "https://codeprompt.in"),
  title: {
    default: "Code Prompt | Software Development Services for Startups",
    template: "%s | Code Prompt",
  },
  description:
    "Code Prompt is a startup-focused software development studio helping founders launch MVPs, scale SaaS products, and hire senior engineers.",
  keywords: seoKeywords,
  openGraph: {
    title: "Code Prompt",
    description:
      "Build your software faster with expert developers. MVP launch, SaaS engineering, and startup tech teams.",
    type: "website",
    siteName: "Code Prompt",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://codeprompt.in",
  },
  twitter: {
    card: "summary_large_image",
    title: "Code Prompt",
    description:
      "MVP development company and SaaS development agency for ambitious startups.",
  },
  icons: {
    icon: [
      { url: "/favicon/favicon.ico" },
      { url: "/favicon/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/favicon/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon/favicon.ico"],
  },
  manifest: "/favicon/site.webmanifest",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
