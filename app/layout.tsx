import type { Metadata, Viewport } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";

import { Footer } from "@/components/site/footer";
import { getSiteUrl } from "@/lib/seo";
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

const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Software Development Company for Startups | CodePrompt",
    template: "%s | CodePrompt",
  },
  description:
    "CodePrompt is a software development company delivering custom software development services, AI solutions, SaaS products, and automation systems.",
  keywords: seoKeywords,
  alternates: { canonical: "/" },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    title: "Software Development Company | CodePrompt",
    description:
      "Custom software development services, AI development, SaaS platforms, and automation systems for startups and growing businesses.",
    type: "website",
    siteName: "CodePrompt",
    url: siteUrl,
    images: [
      {
        url: "/logo.png",
        width: 512,
        height: 512,
        alt: "CodePrompt software development company logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Development Company | CodePrompt",
    description:
      "Software development company offering custom software development services, AI solutions, and SaaS development.",
    images: ["/logo.png"],
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
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "CodePrompt",
    url: siteUrl,
    logo: `${siteUrl}/logo.png`,
    email: "contact@codeprompt.in",
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "CodePrompt",
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/blog?query={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <html lang="en">
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema).replace(/</g, "\\u003c"),
          }}
        />
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
