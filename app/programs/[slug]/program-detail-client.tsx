"use client";

import Link from "next/link";
import { CheckCircle2 } from "lucide-react";
import { ImageGallery } from "@/components/site/ImageGallery";
import { PageHero } from "@/components/site/PageHero";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { faculties, type Faculty } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeFaculty, localizeProgram } from "@/lib/content-i18n";

export function ProgramDetailClient({ faculty: rawFaculty }: { faculty: Faculty }) {
  return <FacultyDetail rawFaculty={rawFaculty} />;
}

function FacultyDetail({ rawFaculty }: { rawFaculty: Faculty }) {
  const { t, language } = useLanguage();
  const faculty = localizeFaculty(rawFaculty, language);
  const related = faculties.filter((f) => f.slug !== rawFaculty.slug).slice(0, 3);

  return (
    <>
      <PageHero
        eyebrow={t.faculties.badge}
        title={faculty.name}
        description={faculty.description}
        breadcrumb={[
          { label: t.nav.home, to: "/" },
          { label: t.nav.programs, to: "/programs" },
          { label: faculty.name },
        ]}
      >
        {/* Apply online — disabled for now
        <Button asChild variant="hero" size="xl">
          <Link href="/admissions">{t.nav.applyNow}</Link>
        </Button>
        */}
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={rawFaculty.image}
                alt={faculty.name}
                width={1200}
                height={800}
                className="h-[400px] w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <aside className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {t.facultyDetail.focusHeading}
              </h2>
              <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                <p>
                  <span className="block font-semibold text-foreground">
                    {t.facultyDetail.learningStyleLabel}
                  </span>
                  {t.facultyDetail.learningStyleValue}
                </p>
                <p>
                  <span className="block font-semibold text-foreground">
                    {t.facultyDetail.bestForLabel}
                  </span>
                  {t.facultyDetail.bestForValue}
                </p>
                <p>
                  <span className="block font-semibold text-foreground">
                    {t.facultyDetail.tracksLabel}
                  </span>
                  {rawFaculty.featuredPrograms.length > 0
                    ? rawFaculty.featuredPrograms
                        .map((item) => localizeProgram(item, language).title)
                        .join(" · ")
                    : t.facultyDetail.tracksFallback}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="mt-12 rounded-2xl border border-border bg-card p-8 shadow-soft">
          <h2 className="text-2xl font-semibold text-foreground">{t.facultyDetail.studyHeading}</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {faculty.description}
          </p>
          {rawFaculty.featuredPrograms.length > 0 && (
            <ul className="mt-6 space-y-4">
              {rawFaculty.featuredPrograms.map((rawItem) => {
                const item = localizeProgram(rawItem, language);
                return (
                  <li key={item.slug} className="flex items-start gap-3 text-sm text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                    <span>
                      <span className="block font-semibold">{item.title}</span>
                      <span className="mt-1 block text-muted-foreground">{item.excerpt}</span>
                    </span>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </Section>

      <Section>
        <h2 className="mb-8 text-2xl font-semibold text-foreground">{t.facultyDetail.gallery}</h2>
        <ImageGallery
          images={rawFaculty.gallery}
          altBase={faculty.name}
          labels={{
            previousSlide: t.facultyDetail.previousSlide,
            nextSlide: t.facultyDetail.nextSlide,
            goToSlide: t.facultyDetail.goToSlide,
          }}
        />
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow={t.facultyDetail.relatedEyebrow}
          title={t.facultyDetail.relatedTitle}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70}>
              <ProgramCard program={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner title={t.facultyDetail.ctaTitle} description={t.facultyDetail.ctaDescription} />
    </>
  );
}

