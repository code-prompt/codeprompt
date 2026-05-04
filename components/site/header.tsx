"use client";

import clsx from "clsx";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

import { navLinks } from "@/lib/site-data";

import { Container } from "../ui/container";
import { ScrollProgress } from "../ui/scroll-progress";

function BrandMark() {
  return (
    <div className="relative h-8 w-[128px] sm:h-9 sm:w-[150px]">
      <Image 
        src="/logo.png" 
        alt="CodePrompt" 
        fill 
        priority 
        sizes="(max-width: 640px) 128px, 150px" 
        className="object-contain object-left" 
      />
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [hash, setHash] = useState("");

  useEffect(() => {
    const handleHashChange = () => setHash(window.location.hash);
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const showHomeLink = pathname !== "/" || hash === "#pricing";

  const filteredLinks = navLinks.filter(
    (link) => link.label !== "FAQ" && link.label !== "Contact"
  );

  return (
    <header className="relative sticky top-0 z-40 border-b border-brand/10 bg-[#f6f7f8]/85 backdrop-blur-md">
      <ScrollProgress />
      <Container className="py-3 sm:py-4">
        <div className="flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-3" onClick={() => {setMenuOpen(false); setHash("");}}>
            <BrandMark />
          </Link>

          <nav className="hidden items-center gap-8 md:flex">
            {showHomeLink && (
              <Link
                href="/"
                onClick={() => setHash("")}
                className="text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
              >
                Home
              </Link>
            )}

            {filteredLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm font-medium transition-colors",
                    isActive ? "text-slate-900" : "text-slate-600 hover:text-slate-900",
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/#pricing"
              onClick={() => setHash("#pricing")}
              className={clsx(
                "text-sm font-medium transition-colors",
                hash === "#pricing" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
              )}
            >
              Pricing
            </Link>
            <Link
              href="/contact"
              className={clsx(
                "text-sm font-medium transition-colors",
                pathname === "/contact" ? "text-slate-900" : "text-slate-600 hover:text-slate-900"
              )}
            >
              Contact
            </Link>
          </nav>

          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/contact"
              className="btn-base btn-secondary px-4 py-2 text-sm font-semibold"
            >
              Talk to Team
            </Link>
            <Link
              href="/contact"
              className="btn-base btn-primary px-5 py-2 text-sm font-semibold"
            >
              Get Started
            </Link>
          </div>

          <button
            type="button"
            className="inline-flex rounded-lg border border-slate-200 bg-white p-2.5 text-slate-700 md:hidden"
            onClick={() => setMenuOpen((current) => !current)}
            aria-expanded={menuOpen}
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen ? (
          <div className="mt-3 rounded-2xl border border-slate-200 bg-white p-4 md:hidden">
            <nav className="flex flex-col gap-1">
              {showHomeLink && (
                <Link
                  href="/"
                  onClick={() => {setMenuOpen(false); setHash("");}}
                  className="rounded-lg px-3 py-2 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                >
                  Home
                </Link>
              )}

              {filteredLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={clsx(
                    "rounded-lg px-3 py-2 text-sm font-medium",
                    pathname === link.href
                      ? "bg-slate-900 text-white"
                      : "text-slate-700 hover:bg-slate-100 hover:text-slate-900",
                  )}
                >
                  {link.label}
                </Link>
              ))}

              <Link
                href="/#pricing"
                onClick={() => {setMenuOpen(false); setHash("#pricing");}}
                className={clsx(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  hash === "#pricing" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                Pricing
              </Link>

              <Link
                href="/contact"
                onClick={() => setMenuOpen(false)}
                className={clsx(
                  "rounded-lg px-3 py-2 text-sm font-medium",
                  pathname === "/contact" ? "bg-slate-900 text-white" : "text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                )}
              >
                Contact
              </Link>
            </nav>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="btn-base btn-primary mt-4 w-full px-4 py-2 text-sm font-semibold"
            >
              Book Discovery Call
            </Link>
          </div>
        ) : null}
      </Container>
    </header>
  );
}