"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CalendarDays,
  CheckCircle2,
  Clock,
  MonitorPlay,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { faculties, programs, type Faculty, type Program } from "@/data/site";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizeFaculty, localizeProgram } from "@/lib/content-i18n";

export function ProgramDetailClient({
  faculty: rawFaculty,
  program,
}: {
  faculty?: Faculty | undefined;
  program?: Program | undefined;
}) {
  if (rawFaculty) {
    return <FacultyDetail rawFaculty={rawFaculty} />;
  }

  return <ProgramDetail program={program!} />;
}

function FacultyDetail({ rawFaculty }: { rawFaculty: Faculty }) {
  const { t, language } = useLanguage();
  const faculty = localizeFaculty(rawFaculty, language);
  const related =
    rawFaculty.featuredPrograms.length > 0 ? rawFaculty.featuredPrograms : programs.slice(0, 3);
  const [carouselSlide, setCarouselSlide] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const imagesPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(faculty.gallery.length / imagesPerSlide);

  const goToPrevious = () => setCarouselSlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goToNext = () => setCarouselSlide((prev) => (prev + 1) % totalSlides);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0]!.clientX : (e as React.MouseEvent).clientX;
    setDragStart(clientX);
  };

  useEffect(() => {
    if (dragStart === null) return;

    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "changedTouches" in e ? e.changedTouches[0]!.clientX : (e as MouseEvent).clientX;
      const dragDistance = dragStart - clientX;
      const threshold = 50;

      if (dragDistance > threshold) {
        goToNext();
      } else if (dragDistance < -threshold) {
        goToPrevious();
      }
      setDragStart(null);
    };

    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);

    return () => {
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [dragStart, totalSlides]);

  const startIndex = carouselSlide * imagesPerSlide;
  const visibleImages = faculty.gallery.slice(startIndex, startIndex + imagesPerSlide);

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
                src={faculty.image}
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
                  {faculty.featuredPrograms.length > 0
                    ? faculty.featuredPrograms
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
            {t.facultyDetail.studyBody}
          </p>
          <ul className="mt-6 space-y-4">
            {faculty.featuredPrograms.length > 0 ? (
              faculty.featuredPrograms.map((rawItem) => {
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
              })
            ) : (
              <li className="text-sm text-muted-foreground">{t.facultyDetail.noProgrammes}</li>
            )}
          </ul>
        </div>
      </Section>

      <Section>
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-foreground">{t.facultyDetail.gallery}</h2>
        </div>
        <div className="relative">
          <div
            ref={galleryRef}
            className="grid gap-4 grid-cols-1 md:grid-cols-3 cursor-grab active:cursor-grabbing select-none"
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {visibleImages.map((image, index) => (
              <Reveal key={`${carouselSlide}-${index}`} delay={index * 50}>
                <div className="overflow-hidden rounded-xl border border-border">
                  <img
                    src={image}
                    alt={`Gallery image ${startIndex + index + 1}`}
                    width={400}
                    height={300}
                    draggable={false}
                    onDragStart={(e) => e.preventDefault()}
                    className="h-[200px] w-full object-cover pointer-events-none"
                  />
                </div>
              </Reveal>
            ))}
          </div>
          {totalSlides > 1 && (
            <div className="mt-6 flex items-center justify-between">
              <button
                type="button"
                aria-label={t.facultyDetail.previousSlide}
                onClick={goToPrevious}
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
              <div className="flex gap-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={t.facultyDetail.goToSlide(index + 1)}
                    onClick={() => setCarouselSlide(index)}
                    className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
                      index === carouselSlide ? "bg-primary" : "bg-muted-foreground/40"
                    }`}
                  />
                ))}
              </div>
              <button
                type="button"
                aria-label={t.facultyDetail.nextSlide}
                onClick={goToNext}
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
              >
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          )}
        </div>
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

function ProgramDetail({ program: rawProgram }: { program: Program }) {
  const { t, language } = useLanguage();
  const program = localizeProgram(rawProgram, language);
  const related = programs.filter((p) => p.slug !== rawProgram.slug).slice(0, 3);

  const quickInfo = [
    { icon: Clock, label: t.programDetail.duration, value: program.duration },
    { icon: MonitorPlay, label: t.programDetail.format, value: program.format },
    { icon: Award, label: t.programDetail.certification, value: program.certification },
    { icon: CalendarDays, label: t.programDetail.nextIntake, value: program.nextIntake },
  ];

  return (
    <>
      <PageHero
        eyebrow={localizeCategory(program.category, language)}
        title={program.title}
        description={program.excerpt}
        breadcrumb={[
          { label: t.nav.home, to: "/" },
          { label: t.nav.programs, to: "/programs" },
          { label: program.title },
        ]}
      >
        {/* Apply online — disabled for now
        <Button asChild variant="hero" size="xl">
          <Link href="/admissions">{t.programDetail.enrollNow}</Link>
        </Button>
        */}
      </PageHero>

      <section className="relative z-10 -mt-14">
        <div className="container-page">
          <Reveal className="glass-panel grid gap-6 rounded-2xl p-7 sm:grid-cols-2 lg:grid-cols-4">
            {quickInfo.map((info) => (
              <div key={info.label} className="flex min-w-0 items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-primary-soft">
                  <info.icon className="h-5 w-5 text-primary" />
                </span>
                <span className="min-w-0">
                  <span className="block text-xs tracking-wide text-muted-foreground uppercase">
                    {info.label}
                  </span>
                  <span className="block truncate font-semibold text-foreground">{info.value}</span>
                </span>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <Section>
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Reveal>
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                {t.programDetail.overviewHeading}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {t.programDetail.overviewBody}
              </p>
              <ul className="mt-8 space-y-4">
                {program.objectives.map((objective) => (
                  <li key={objective} className="flex gap-3 text-foreground">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                    <span className="text-sm leading-relaxed">{objective}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            <Reveal className="mt-14">
              <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
                {t.programDetail.curriculumHeading}
              </h2>
              <Accordion type="single" collapsible className="mt-6" defaultValue="item-0">
                {program.curriculum.map((module, i) => (
                  <AccordionItem key={module.term} value={`item-${i}`}>
                    <AccordionTrigger className="text-left text-base font-semibold">
                      {module.term}
                    </AccordionTrigger>
                    <AccordionContent>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        {module.items.map((item) => (
                          <li key={item} className="flex gap-2">
                            <span aria-hidden className="text-accent-foreground">
                              •
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>

          <div className="space-y-8">
            <Reveal>
              <aside className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h2 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {t.programDetail.programmeLeadHeading}
                </h2>
                <div className="mt-5 flex items-center gap-4">
                  <span className="grid h-14 w-14 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                    {program.instructor.name
                      .split(" ")
                      .slice(-2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="min-w-0">
                    <span className="block font-semibold text-foreground">
                      {program.instructor.name}
                    </span>
                    <span className="block text-sm text-muted-foreground">
                      {program.instructor.title}
                    </span>
                  </span>
                </div>
                <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                  {program.instructor.bio}
                </p>
                <p className="mt-4 rounded-lg bg-accent-soft px-4 py-3 text-xs font-medium text-accent-foreground">
                  {program.instructor.credentials}
                </p>
              </aside>
            </Reveal>

            <Reveal delay={100}>
              <aside className="rounded-2xl border border-border bg-card p-7 shadow-soft">
                <h2 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                  {t.programDetail.tuitionHeading}
                </h2>
                <table className="mt-5 w-full text-sm">
                  <caption className="sr-only">Tuition options for {program.title}</caption>
                  <tbody className="divide-y divide-border">
                    {program.tuition.map((row) => (
                      <tr key={row.label}>
                        <th scope="row" className="py-3 pr-4 text-left font-medium text-foreground">
                          {row.label}
                          <span className="block text-xs font-normal text-muted-foreground">
                            {row.note}
                          </span>
                        </th>
                        <td className="py-3 text-right font-semibold whitespace-nowrap text-primary">
                          {row.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {/* Apply online — disabled for now
                <Button asChild variant="hero" className="mt-6 w-full">
                  <Link href="/admissions">{t.programDetail.startApplication}</Link>
                </Button>
                */}
              </aside>
            </Reveal>
          </div>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow={t.programDetail.relatedEyebrow}
          title={t.programDetail.relatedTitle}
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {related.map((item, i) => (
            <Reveal key={item.slug} delay={i * 70}>
              <ProgramCard program={item} />
            </Reveal>
          ))}
        </div>
      </Section>

      <CtaBanner title={t.programDetail.ctaTitle(program.nextIntake)} />
    </>
  );
}
