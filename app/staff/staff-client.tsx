"use client";

import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { StaffCard } from "@/components/site/StaffCard";
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

        <div className="mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((person, i) => (
            <Reveal key={person.name} delay={i * 50}>
              <StaffCard person={person} />
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
