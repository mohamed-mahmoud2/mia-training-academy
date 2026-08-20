"use client";

import { BookOpen, CalendarDays, Download, GraduationCap, Target, Wrench } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { faculties } from "@/data/site";
import { ProgramCard } from "@/components/site/ProgramCard";
import { useLanguage } from "@/lib/i18n";

const classroom = "/images/classroom.jpg";
const lab = "/images/lab.jpg";
const library = "/images/library.jpg";

const methodologyIcons = [BookOpen, Wrench, Target, GraduationCap];
const methodologySteps = ["01", "02", "03", "04"];
const facilityImages = [lab, library, classroom];
const calendarDates = ["5 – 26 September 2026", "11 January 2027", "12 April 2027", "20 June 2027"];

type FacilityView = { image: string; title: string; caption: string };

export function AcademicsClient() {
  const { t } = useLanguage();
  const facilities: FacilityView[] = t.academicsPage.facilities.map((facility, i) => ({
    ...facility,
    image: facilityImages[i]!,
  }));
  const [lightbox, setLightbox] = useState<FacilityView | null>(null);

  return (
    <>
      <PageHero
        eyebrow={t.academicsPage.eyebrow}
        title={t.academicsPage.title}
        description={t.academicsPage.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.academicsPage.eyebrow }]}
      />

      <Section>
        <SectionHeading
          eyebrow={t.academicsPage.methodologyEyebrow}
          title={t.academicsPage.methodologyTitle}
          description={t.academicsPage.methodologyDescription}
        />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.academicsPage.methodology.map((step, i) => {
            const Icon = methodologyIcons[i]!;
            return (
              <Reveal key={methodologySteps[i]} delay={i * 80}>
                <article className="hover-lift relative h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="font-display absolute top-5 right-6 text-4xl font-semibold text-primary-soft">
                    {methodologySteps[i]}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-primary-soft">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{step.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{step.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow={t.nav.programs} title={t.academicsPage.facultiesTitle} />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculties.map((faculty, i) => (
            <Reveal key={faculty.slug} delay={i * 70}>
              <ProgramCard program={faculty} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.academicsPage.facilitiesEyebrow}
          title={t.academicsPage.facilitiesTitle}
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {facilities.map((facility, i) => (
            <Reveal key={facility.title} delay={i * 80}>
              <button
                type="button"
                onClick={() => setLightbox(facility)}
                className="hover-lift group block w-full overflow-hidden rounded-2xl border border-border bg-card text-left shadow-soft"
              >
                <span className="block aspect-[3/2] overflow-hidden">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </span>
                <span className="block p-6">
                  <span className="block font-semibold text-foreground">{facility.title}</span>
                  <span className="mt-2 block text-sm text-muted-foreground">
                    {facility.caption}
                  </span>
                </span>
              </button>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section muted>
        <div className="grid gap-8 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="rounded-2xl border border-border bg-card p-8 shadow-soft">
              <h2 className="text-2xl font-semibold text-foreground">
                {t.academicsPage.calendarTitle}
              </h2>
              <ul className="mt-6 divide-y divide-border">
                {t.academicsPage.calendar.map((item, i) => (
                  <li
                    key={item.term}
                    className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-4 py-4"
                  >
                    <span className="min-w-0">
                      <span className="block font-medium text-foreground">{item.term}</span>
                      <span className="block text-sm text-muted-foreground">{item.note}</span>
                    </span>
                    <span className="flex shrink-0 items-center gap-2 text-sm font-semibold text-accent-foreground">
                      <CalendarDays className="h-4 w-4" />
                      {calendarDates[i]}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={100}>
            <div className="glass-panel flex h-full flex-col justify-between rounded-2xl p-8">
              <div>
                <h2 className="text-xl font-semibold text-foreground">
                  {t.academicsPage.downloadCalendarTitle}
                </h2>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t.academicsPage.downloadCalendarDescription}
                </p>
              </div>
              <Button
                variant="hero"
                size="lg"
                className="mt-8 w-full"
                onClick={() =>
                  toast.success(t.academicsPage.toastCalendarTitle, {
                    description: t.academicsPage.toastCalendarDescription,
                  })
                }
              >
                <Download /> {t.academicsPage.getThePdf}
              </Button>
            </div>
          </Reveal>
        </div>
      </Section>

      <Dialog open={!!lightbox} onOpenChange={(open) => !open && setLightbox(null)}>
        <DialogContent className="max-w-4xl overflow-hidden p-0">
          <DialogTitle className="sr-only">
            {lightbox?.title ?? t.academicsPage.facilityFallback}
          </DialogTitle>
          {lightbox && (
            <figure>
              <img
                src={lightbox.image}
                alt={lightbox.title}
                width={1200}
                height={800}
                className="w-full object-cover"
              />
              <figcaption className="p-6">
                <span className="block font-semibold text-foreground">{lightbox.title}</span>
                <span className="mt-1 block text-sm text-muted-foreground">{lightbox.caption}</span>
              </figcaption>
            </figure>
          )}
        </DialogContent>
      </Dialog>

      <CtaBanner title={t.academicsPage.ctaTitle} />
    </>
  );
}
