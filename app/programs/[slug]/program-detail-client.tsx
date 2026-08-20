"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CheckCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { PageHero } from "@/components/site/PageHero";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { faculties, type Faculty } from "@/data/site";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/i18n";
import { localizeFaculty, localizeProgram } from "@/lib/content-i18n";

export function ProgramDetailClient({ faculty: rawFaculty }: { faculty: Faculty }) {
  return <FacultyDetail rawFaculty={rawFaculty} />;
}

function FacultyDetail({ rawFaculty }: { rawFaculty: Faculty }) {
  const { t, language } = useLanguage();
  const faculty = localizeFaculty(rawFaculty, language);
  const related = faculties.filter((f) => f.slug !== rawFaculty.slug).slice(0, 3);
  const [carouselSlide, setCarouselSlide] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();
  const imagesPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(rawFaculty.gallery.length / imagesPerSlide);

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
  const visibleImages = rawFaculty.gallery.slice(startIndex, startIndex + imagesPerSlide);

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
                    className="h-85 w-full object-cover pointer-events-none"
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

