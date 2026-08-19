"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Reveal } from "./Reveal";
import { useLanguage } from "@/lib/i18n";

export function CtaBanner({ title, description }: { title?: string; description?: string }) {
  const { t } = useLanguage();
  const resolvedTitle = title ?? t.cta.title;
  const resolvedDescription = description ?? t.cta.description;

  return (
    <section className="relative overflow-hidden bg-primary py-20 text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute -bottom-32 left-1/3 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
      />
      <div className="container-page relative">
        <Reveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-semibold text-balance sm:text-4xl">{resolvedTitle}</h2>
          <p className="mt-4 text-primary-foreground/85">{resolvedDescription}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {/* Apply online — disabled for now
            <Button
              asChild
              variant="hero"
              size="default"
              className="sm:h-11 sm:px-7 sm:rounded-lg xl:h-13 xl:px-9 xl:rounded-xl xl:text-base"
            >
              <Link href="/admissions">{t.cta.applyNow}</Link>
            </Button>
            */}
            <Button
              asChild
              variant="onDark"
              size="default"
              className="sm:h-11 sm:px-7 sm:rounded-lg xl:h-13 xl:px-9 xl:rounded-xl xl:text-base"
            >
              <Link href="/contact">{t.cta.talkToAdvisor}</Link>
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
