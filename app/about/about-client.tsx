"use client";

import { Compass, HeartHandshake, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import { CtaBanner } from "@/components/site/CtaBanner";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { partners } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizePartner } from "@/lib/content-i18n";

const campus = "/images/campus.jpg";

const valueIcons = [ShieldCheck, Lightbulb, Sparkles, HeartHandshake];
const timelineYears = ["2017", "2019", "2021", "2023", "2025", "2026"];

export function AboutClient() {
  const { t, language } = useLanguage();

  return (
    <>
      <PageHero
        eyebrow={t.about.eyebrow}
        title={t.about.title}
        description={t.about.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.nav.about }]}
      />

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <Reveal>
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-foreground uppercase">
              {t.about.missionLabel}
            </span>
            <h2 className="mt-3 text-3xl font-semibold text-balance sm:text-4xl">
              {t.about.missionTitle}
            </h2>
            <p className="mt-5 leading-relaxed text-muted-foreground">{t.about.missionP1}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.about.missionP2}</p>
            <p className="mt-4 leading-relaxed text-muted-foreground">{t.about.missionP3}</p>
            <ul className="mt-8 space-y-3">
              {t.about.missionList.map((item) => (
                <li key={item} className="flex gap-3 text-sm text-foreground">
                  <Compass className="mt-0.5 h-5 w-5 shrink-0 text-accent-foreground" />
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120}>
            <img
              src={campus}
              alt="The MIA Academy campus building in Maadi"
              width={1200}
              height={900}
              loading="lazy"
              className="w-full rounded-3xl object-cover shadow-lift"
            />
          </Reveal>
        </div>
      </Section>

      <Section muted>
        <SectionHeading eyebrow={t.about.valuesEyebrow} title={t.about.valuesTitle} />
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.about.values.map((value, i) => {
            const Icon = valueIcons[i]!;
            return (
              <Reveal key={value.title} delay={i * 80}>
                <article className="hover-lift h-full rounded-2xl border border-border bg-card p-7 shadow-soft">
                  <span className="grid h-12 w-12 place-items-center rounded-xl bg-accent-soft">
                    <Icon className="h-5 w-5 text-accent-foreground" />
                  </span>
                  <h3 className="mt-5 text-lg font-semibold text-foreground">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{value.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow={t.about.historyEyebrow} title={t.about.historyTitle} />
        <ol className="relative mx-auto mt-14 max-w-3xl border-s border-border ps-8">
          {t.about.timeline.map((item, i) => (
            <Reveal
              as="li"
              key={timelineYears[i]}
              delay={i * 70}
              className="relative pb-10 last:pb-0"
            >
              <span className="absolute top-1.5 -start-[41px] grid h-5 w-5 place-items-center rounded-full border-2 border-accent bg-background">
                <span className="h-2 w-2 rounded-full bg-accent" />
              </span>
              <span className="font-display text-sm font-semibold text-accent-foreground">
                {timelineYears[i]}
              </span>
              <h3 className="mt-1 text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </ol>
      </Section>

      <Section muted className="overflow-hidden pt-10 pb-16 sm:pt-12 sm:pb-20">
        <SectionHeading
          eyebrow={t.about.accreditationsEyebrow}
          title={t.about.accreditationsTitle}
        />
        <div
          className="relative mt-8 mb-2 overflow-hidden [mask-image:linear-gradient(90deg,transparent,black_10%,black_90%,transparent)]"
          dir="ltr"
        >
          <ul className="marquee-track flex w-max gap-4 pb-5">
            {[...partners, ...partners].map((partner, i) => (
              <li
                key={`${partner}-${i}`}
                className="rounded-xl border border-border bg-card px-8 py-5 text-sm font-semibold whitespace-nowrap text-muted-foreground shadow-soft"
              >
                {localizePartner(partner, language)}
              </li>
            ))}
          </ul>
        </div>
      </Section>

      <CtaBanner title={t.about.ctaTitle} description={t.about.ctaDescription} />
    </>
  );
}
