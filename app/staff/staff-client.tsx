"use client";

import Link from "next/link";
import { Linkedin, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { staff } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizeStaff } from "@/lib/content-i18n";

const categories = ["All", "Leadership", "Professors", "Industry Mentors", "Guest Lecturers"];

export function StaffClient() {
  const { t, language } = useLanguage();
  const [filter, setFilter] = useState("All");
  const visible = (filter === "All" ? staff : staff.filter((s) => s.category === filter)).map(
    (person) => localizeStaff(person, language),
  );

  return (
    <>
      <PageHero
        eyebrow={t.staffPage.eyebrow}
        title={t.staffPage.title}
        description={t.staffPage.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.staff }]}
      />

      <Section>
        <Reveal className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={filter === category ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => setFilter(category)}
            >
              {category === "All" ? t.staffPage.allCategory : localizeCategory(category, language)}
            </Button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((person, i) => (
            <Reveal key={person.name} delay={i * 50}>
              <article className="hover-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                <div className="flex min-w-0 items-center gap-4">
                  <span
                    aria-hidden
                    className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl bg-primary text-lg font-semibold text-primary-foreground"
                  >
                    {person.initials.slice(0, 2)}
                  </span>
                  <span className="min-w-0">
                    <span className="block truncate font-semibold text-foreground">
                      {person.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">{person.role}</span>
                  </span>
                </div>
                <p className="mt-5 text-xs font-semibold tracking-wide text-accent-foreground uppercase">
                  {person.qualification}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{person.bio}</p>
                <div className="mt-6 flex gap-2">
                  <a
                    href="#"
                    aria-label={`${person.name} on LinkedIn`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent-foreground"
                  >
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a
                    href="mailto:faculty@mia-academy.edu"
                    aria-label={`Email ${person.name}`}
                    className="grid h-11 w-11 place-items-center rounded-full border border-border text-muted-foreground transition-colors hover:border-accent hover:text-accent-foreground"
                  >
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <Reveal className="glass-panel grid gap-6 rounded-3xl p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {t.staffPage.ctaTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.staffPage.ctaDescription}</p>
          </div>
          <Button asChild variant="hero" size="xl">
            <Link href="/contact">{t.staffPage.viewOpenPositions}</Link>
          </Button>
        </Reveal>
      </Section>
    </>
  );
}
