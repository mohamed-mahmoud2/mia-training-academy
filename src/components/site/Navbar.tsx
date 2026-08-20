"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Languages, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navLinks } from "@/data/site";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
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
                  "block truncate text-[9px] tracking-[0.14em] uppercase",
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

            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={open ? t.nav.closeMenu : t.nav.openMenu}
                  aria-expanded={open}
                  className={cn(
                    "min-h-11 min-w-11 rounded-full xl:hidden",
                    !scrolled && "text-primary-foreground hover:bg-primary-foreground/10",
                  )}
                >
                  {open ? <X /> : <Menu />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                showClose={false}
                className="flex w-4/5 flex-col gap-0 p-0 sm:max-w-sm"
              >
                <div className="shrink-0 border-b border-border p-6">
                  <Link
                    href="/"
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-3"
                  >
                    <img
                      src="/images/mia-logo.webp"
                      alt="MIA Academy logo"
                      width={40}
                      height={40}
                      className="h-10 w-10 shrink-0 object-contain"
                    />
                    <span className="min-w-0">
                      <SheetTitle className="truncate text-start text-base font-semibold text-foreground">
                        MIA Academy
                      </SheetTitle>
                      <span className="block truncate text-start text-[10px] tracking-[0.14em] text-muted-foreground uppercase">
                        {t.nav.subtitle}
                      </span>
                    </span>
                  </Link>
                </div>

                <nav className="flex-1 space-y-1 overflow-y-auto p-4">
                  {navLinks.map((link) => {
                    const active = isLinkActive(pathname, link.to);
                    return (
                      <Link
                        key={link.to}
                        href={link.to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "block rounded-xl px-4 py-3.5 text-start text-base font-medium transition-colors",
                          active
                            ? "bg-primary-soft text-secondary-foreground"
                            : "text-foreground hover:bg-muted",
                        )}
                      >
                        {navLabels[link.to] ?? link.label}
                      </Link>
                    );
                  })}
                  {/* Apply online — disabled for now
                  <Button asChild variant="hero" className="mt-2 w-full">
                    <Link href="/admissions" onClick={() => setOpen(false)}>
                      {t.nav.applyNow}
                    </Link>
                  </Button>
                  */}
                </nav>

                <div className="shrink-0 border-t border-border p-4 sm:hidden">
                  <Button
                    variant="outline"
                    onClick={toggleLanguage}
                    className="w-full justify-center gap-1.5 rounded-full"
                  >
                    <Languages className="h-4 w-4" />
                    {t.languageSwitcher.label}
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </div>
  );
}
