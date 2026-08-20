"use client";

import Link from "next/link";
import {
  ArrowLeft,
  ArrowRight,
  BriefcaseBusiness,
  CalendarDays,
  FlaskConical,
  GraduationCap,
  PlayCircle,
  Quote,
  Star,
  Users,
} from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Counter } from "@/components/site/Counter";
import { CtaBanner } from "@/components/site/CtaBanner";
import { ProgramCard } from "@/components/site/ProgramCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { StaffCoverflow } from "@/components/site/StaffCoverflow";
import { faculties, posts, staff } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import {
  localizeCategory,
  localizePost,
  localizeStaff,
  localizeTestimonial,
} from "@/lib/content-i18n";

const heroImage = "/images/hero-campus.jpg";

const metricValues = [
  { value: 6000, suffix: "+" },
  { value: 94, suffix: "%" },
  { value: 9, suffix: "" },
  { value: 90, suffix: "+" },
];

const advantageIcons = [Users, BriefcaseBusiness, FlaskConical];

const testimonials = [
  {
    quote:
      "The capstone put me in front of a real client brief. Two weeks after graduation that same company offered me a role.",
    name: "Salma Ibrahim",
    program: "Applied Data Analytics & AI",
    initials: "SI",
    rating: 5,
  },
  {
    quote:
      "I studied in the evenings while working full time. The structure was demanding but never impossible, and the mentorship carried me.",
    name: "Mahmoud Hassan",
    program: "Business Administration Diploma",
    initials: "MH",
    rating: 5,
  },
  {
    quote:
      "What surprised me was the feedback culture. Every submission came back annotated with practical, usable notes.",
    name: "Farida Kamel",
    program: "Integrated Digital Marketing",
    initials: "FK",
    rating: 5,
  },
  {
    quote:
      "The instructors still work in the field, so every case study was pulled from a live project. Nothing felt theoretical.",
    name: "Omar El-Sayed",
    program: "Software Development Bootcamp",
    initials: "OE",
    rating: 5,
  },
  {
    quote:
      "I came in for a certificate and left with a network. The cohort itself became my professional circle.",
    name: "Yasmin Adel",
    program: "Project Management Professional",
    initials: "YA",
    rating: 5,
  },
  {
    quote:
      "Career services rewrote my CV three times until it landed. I had two interviews within a month of finishing.",
    name: "Karim Mostafa",
    program: "Cybersecurity & Cloud Ops",
    initials: "KM",
    rating: 5,
  },
];

const SLIDE_SIZE = 3;
const slideCount = Math.ceil(testimonials.length / SLIDE_SIZE);

export function HomeClient() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);
  const staffPreview = staff.map((person) => localizeStaff(person, language));

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0]!.clientX : (e as React.MouseEvent).clientX;
    setDragStart(clientX);
  };

  useEffect(() => {
    if (dragStart === null) return;

    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
      const clientX = "changedTouches" in e ? e.changedTouches[0]!.clientX : e.clientX;
      const dragDistance = dragStart - clientX;
      const threshold = 50;
      if (dragDistance > threshold) {
        setActive((a) => (a + 1) % slideCount);
      } else if (dragDistance < -threshold) {
        setActive((a) => (a - 1 + slideCount) % slideCount);
      }
      setDragStart(null);
    };

    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);

    return () => {
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [dragStart]);

  return (
    <>
      <section className="relative isolate flex min-h-[92vh] items-center overflow-hidden">
        <img
          src={heroImage}
          alt="Students collaborating in the MIA Academy atrium"
          width={1920}
          height={1080}
          className="absolute inset-0 -z-20 h-full w-full object-cover"
        />
        <div
          aria-hidden
          className="absolute inset-0 -z-10"
          style={{ background: "var(--gradient-hero)" }}
        />
        <div
          aria-hidden
          className="absolute top-1/4 -start-24 -z-10 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
        />

        <div className="container-page relative py-32 text-primary-foreground">
          <Reveal className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase backdrop-blur">
              <GraduationCap className="h-4 w-4 text-accent" />
              {t.hero.badge}
            </span>
            <h1 className="mt-6 text-4xl leading-[1.05] font-semibold text-balance sm:text-6xl">
              {t.hero.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-primary-foreground/85">
              {t.hero.description}
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button asChild variant="hero" size="xl">
                <Link href="/programs">
                  {t.hero.exploreFaculties}
                  <ArrowRight className="rtl:rotate-180" />
                </Link>
              </Button>
              <Button asChild variant="onDark" size="xl">
                <Link href="/about">
                  <PlayCircle />
                  {t.hero.virtualTour}
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="relative z-10 -mt-16">
        <div className="container-page">
          <Reveal className="glass-panel grid grid-cols-2 gap-6 rounded-2xl p-8 lg:grid-cols-4">
            {metricValues.map((value, i) => {
              const metric = t.metrics[i]!;
              return (
                <div key={metric.label} className="text-center">
                  <p className="font-display text-3xl font-semibold text-primary sm:text-4xl">
                    <Counter value={value.value} suffix={value.suffix} />
                  </p>
                  <p className="mt-2 text-sm text-muted-foreground">{metric.label}</p>
                </div>
              );
            })}
          </Reveal>
        </div>
      </section>

      <Section>
        <SectionHeading
          eyebrow={t.faculties.eyebrow}
          title={t.faculties.title}
          description={t.faculties.description}
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {faculties.slice(0, 6).map((faculty, i) => (
            <Reveal key={faculty.slug} delay={i * 70}>
              <ProgramCard program={faculty} />
            </Reveal>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/programs">
              {t.faculties.viewAll}
              <ArrowRight className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section muted>
        <SectionHeading
          eyebrow={t.advantages.eyebrow}
          title={t.advantages.title}
          description={t.advantages.description}
        />
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {t.advantages.items.map((item, i) => {
            const Icon = advantageIcons[i]!;
            return (
              <Reveal key={item.title} delay={i * 90}>
                <article className="hover-lift h-full rounded-2xl border border-border bg-card p-8 shadow-soft">
                  <span className="grid h-14 w-14 place-items-center rounded-2xl bg-primary-soft">
                    <Icon className="h-6 w-6 text-primary" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.testimonials.eyebrow}
          title={t.testimonials.title}
          align="center"
        />
        <Reveal className="mt-14">
          <div
            key={active}
            className="grid animate-fade-in cursor-grab gap-6 active:cursor-grabbing select-none md:grid-cols-3"
            role="region"
            aria-roledescription="carousel"
            aria-label={t.testimonials.ariaLabel}
            onMouseDown={handleDragStart}
            onTouchStart={handleDragStart}
          >
            {testimonials
              .slice(active * SLIDE_SIZE, active * SLIDE_SIZE + SLIDE_SIZE)
              .map((rawTestimonial) => {
                const testimonial = localizeTestimonial(rawTestimonial, language);
                return (
                  <figure
                    key={testimonial.name}
                    className="relative flex h-full flex-col rounded-3xl border border-border bg-card p-8 shadow-soft"
                  >
                    <Quote className="absolute -top-5 start-8 h-10 w-10 rounded-full bg-accent p-2 text-accent-foreground" />
                    <div className="flex gap-1" aria-label={`${testimonial.rating} out of 5 stars`}>
                      {Array.from({ length: testimonial.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                      ))}
                    </div>
                    <blockquote className="mt-6 flex-1 font-display text-lg leading-relaxed text-foreground">
                      &ldquo;{testimonial.quote}&rdquo;
                    </blockquote>
                    <figcaption className="mt-8 flex flex-wrap items-center gap-4">
                      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-sm font-semibold text-primary-foreground">
                        {testimonial.initials}
                      </span>
                      <span className="min-w-0">
                        <span className="block font-semibold text-foreground">
                          {testimonial.name}
                        </span>
                        <span className="block text-sm text-muted-foreground">
                          {testimonial.program}
                        </span>
                      </span>
                    </figcaption>
                  </figure>
                );
              })}
          </div>

          <div className="mt-8 grid grid-cols-3 items-center">
            <div />
            <div className="flex justify-center gap-2">
              {Array.from({ length: slideCount }).map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Show testimonials slide ${i + 1}`}
                  aria-current={i === active}
                  onClick={() => setActive(i)}
                  className={`h-2.5 cursor-pointer rounded-full transition-all ${
                    i === active ? "w-8 bg-accent" : "w-2.5 bg-border hover:bg-muted-foreground"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center justify-end gap-2">
              <button
                type="button"
                aria-label={t.testimonials.previous}
                onClick={() => setActive((a) => (a - 1 + slideCount) % slideCount)}
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
              >
                <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
              </button>
              <button
                type="button"
                aria-label={t.testimonials.next}
                onClick={() => setActive((a) => (a + 1) % slideCount)}
                className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
              >
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </button>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section muted>
        <SectionHeading eyebrow={t.news.eyebrow} title={t.news.title} align="center" />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {posts.slice(0, 3).map((rawPost, i) => {
            const post = localizePost(rawPost, language);
            return (
              <Reveal key={post.slug} delay={i * 80}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <div className="relative">
                    <img
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={225}
                      loading="lazy"
                      className="h-64 w-full object-cover object-top"
                    />
                    <span className="absolute top-4 start-4 w-fit rounded-full bg-accent-soft px-3 py-1 text-xs font-semibold text-accent-foreground shadow-soft">
                      {localizeCategory(post.category, language)}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h3 className="text-lg leading-snug font-semibold text-foreground">
                      {post.title}
                    </h3>
                    <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                      {post.excerpt}
                    </p>
                    <p className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      {post.date} · {post.read}
                    </p>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
        <div className="mt-12 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/blog">
              {t.news.allArticles}
              <ArrowRight className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow={t.homeStaff.eyebrow}
          title={t.homeStaff.title}
          description={t.homeStaff.description}
        />
        <Reveal className="mt-14">
          <StaffCoverflow
            people={staffPreview}
            labels={{
              previousSlide: t.homeStaff.previousSlide,
              nextSlide: t.homeStaff.nextSlide,
            }}
          />
        </Reveal>
        <div className="mt-10 text-center">
          <Button asChild variant="outline" size="lg">
            <Link href="/staff">
              {t.homeStaff.viewAll}
              <ArrowRight className="rtl:rotate-180" />
            </Link>
          </Button>
        </div>
      </Section>

      <CtaBanner />
    </>
  );
}
