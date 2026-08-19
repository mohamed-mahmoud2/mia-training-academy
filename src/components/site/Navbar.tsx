"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

function isLinkActive(pathname: string, to: string) {
  return to === "/" ? pathname === "/" : pathname === to || pathname.startsWith(`${to}/`);
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { t, toggleLanguage } = useLanguage();
  const pathname = usePathname();

  const navLabels: Record<string, string> = {
    "/": t.nav.home,
    "/about": t.nav.about,
    "/programs": t.nav.programs,
    "/admissions": t.nav.admissions,
    "/faqs": t.nav.faqs,
    "/contact": t.nav.contact,
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled ? "glass-panel border-x-0 border-t-0" : "border-b border-transparent",
      )}
    >
      <div className="container-page">
        <div className="flex h-18 items-center justify-between gap-4 xl:grid xl:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          <Link href="/" className="flex min-w-0 items-center gap-3" aria-label="MIA Academy home">
            <img
              src="/images/mia-logo.webp"
              alt="MIA Academy logo"
              width={44}
              height={44}
              className="h-11 w-11 shrink-0 object-contain"
            />
            <span className="min-w-0">
              <span
                className={cn(
                  "block truncate text-sm font-semibold tracking-wide",
                  scrolled ? "text-foreground" : "text-primary-foreground",
                )}
              >
                MIA Academy
              </span>
              <span
                className={cn(
                  "block truncate text-[11px] tracking-[0.16em] uppercase",
                  scrolled ? "text-muted-foreground" : "text-primary-foreground/70",
                )}
              >
                {t.nav.subtitle}
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-1 justify-self-center xl:flex">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.to);
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  className={cn(
                    "rounded-full px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? scrolled
                        ? "bg-primary-soft text-secondary-foreground"
                        : "bg-primary-foreground/15 text-primary-foreground"
                      : scrolled
                        ? "text-muted-foreground hover:bg-muted hover:text-foreground"
                        : "text-primary-foreground/85 hover:bg-primary-foreground/10 hover:text-primary-foreground",
                  )}
                >
                  {navLabels[link.to] ?? link.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1 justify-self-end">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleLanguage}
              aria-label={t.nav.switchLanguage}
              className={cn(
                "hidden gap-1.5 rounded-full sm:inline-flex",
                !scrolled && "text-primary-foreground hover:bg-primary-foreground/10",
              )}
            >
              <Languages className="h-4 w-4" />
              {t.languageSwitcher.label}
            </Button>

            {/* Apply online — disabled for now
            <Button asChild variant="hero" size="lg" className="hidden sm:inline-flex">
              <Link href="/admissions">{t.nav.applyNow}</Link>
            </Button>
            */}

            <Button
              variant="ghost"
              size="icon"
              aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className={cn(
                "min-h-11 min-w-11 rounded-full xl:hidden",
                !scrolled && "text-primary-foreground hover:bg-primary-foreground/10",
              )}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {open && (
          <nav className="glass-panel mb-3 ml-auto grid w-full max-w-xs gap-1 rounded-xl p-3 xl:hidden">
            {navLinks.map((link) => {
              const active = isLinkActive(pathname, link.to);
              return (
                <Link
                  key={link.to}
                  href={link.to}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-start text-sm font-medium transition-colors hover:bg-muted",
                    active ? "bg-primary-soft text-secondary-foreground" : "text-foreground",
                  )}
                >
                  {navLabels[link.to] ?? link.label}
                </Link>
              );
            })}
            <Button
              variant="ghost"
              onClick={toggleLanguage}
              className="mt-1 w-full justify-start gap-1.5 rounded-lg px-4 text-sm font-medium sm:hidden"
            >
              <Languages className="h-4 w-4" />
              {t.languageSwitcher.label}
            </Button>
            {/* Apply online — disabled for now
            <Button asChild variant="hero" className="mt-2 w-full">
              <Link href="/admissions" onClick={() => setOpen(false)}>
                {t.nav.applyNow}
              </Link>
            </Button>
            */}
          </nav>
        )}
      </div>
    </div>
  );
}
