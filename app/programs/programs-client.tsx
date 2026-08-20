"use client";

import { CtaBanner } from "@/components/site/CtaBanner";
import { ProgramCard } from "@/components/site/ProgramCard";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { faculties } from "@/data/site";
import { useLanguage } from "@/lib/i18n";

export function ProgramsClient() {
  const { t } = useLanguage();
  return (
    <>
      <PageHero
        eyebrow={t.nav.programs}
        title={t.programsPage.title}
        description={t.programsPage.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.programs }]}
      />

      <Section>
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((faculty, i) => (
            <Reveal key={faculty.slug} delay={i * 60}>
              <ProgramCard program={faculty} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner title={t.programsPage.ctaTitle} description={t.programsPage.ctaDescription} />
    </>
  );
}
