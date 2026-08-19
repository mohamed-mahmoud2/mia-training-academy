"use client";

import { BookOpen, CalendarClock, Clock, Mail, MapPin, Phone } from "lucide-react";
import { toast } from "sonner";
import { AppSelect } from "@/components/ui/app-select";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { faculties } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeFaculty } from "@/lib/content-i18n";

const details = [
  {
    icon: MapPin,
    kind: "campus" as const,
    lines: ["Road 9, Maadi, Cairo, Egypt"],
    href: () => "https://maps.app.goo.gl/1SDTQZ8j8VA1bNjL6",
  },
  {
    icon: Phone,
    kind: "phone" as const,
    lines: ["+20 2 2358 0100", "+20 100 555 0142"],
    href: (line: string) => `tel:${line.replace(/[^+\d]/g, "")}`,
  },
  {
    icon: Mail,
    kind: "email" as const,
    lines: ["admissions@mia-academy.edu", "info@mia-academy.edu"],
    href: (line: string) => `mailto:${line}`,
  },
  {
    icon: Clock,
    kind: "hours" as const,
    lines: ["Sun – Thu: 9:00 – 18:00", "Sat: 10:00 – 14:00"],
    href: null,
  },
];

export function ContactClient() {
  const { t, language } = useLanguage();
  const detailTitles: Record<(typeof details)[number]["kind"], string> = {
    campus: t.contactPage.campusLabel,
    phone: t.contactPage.phoneLabel,
    email: t.contactPage.emailLabel,
    hours: t.contactPage.officeHoursLabel,
  };
  return (
    <>
      <PageHero
        eyebrow={t.contactPage.eyebrow}
        title={t.contactPage.title}
        description={t.contactPage.description}
        breadcrumb={[{ label: t.nav.home, to: "/" }, { label: t.contactPage.eyebrow }]}
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <form
              className="rounded-3xl border border-border bg-card p-8 shadow-lift"
              onSubmit={(e) => {
                e.preventDefault();
                toast.success(t.contactPage.toastMessageSentTitle, {
                  description: t.contactPage.toastMessageSentDescription,
                });
                (e.target as HTMLFormElement).reset();
              }}
            >
              <h2 className="text-2xl font-semibold text-foreground">
                {t.contactPage.formHeading}
              </h2>
              <div className="mt-6 grid gap-5 sm:grid-cols-2">
                <Field id="contact-name" label={t.contactPage.fullName} required />
                <Field id="contact-email" label={t.contactPage.email} type="email" required />
                <Field id="contact-phone" label={t.contactPage.phone} type="tel" />
                <AppSelect
                  id="contact-program"
                  label={t.contactPage.facultyLabel}
                  placeholder={t.contactPage.selectFaculty}
                  helperText={t.contactPage.facultyHelper}
                  options={faculties.map((f) => ({
                    value: f.name,
                    label: localizeFaculty(f, language).name,
                    icon: BookOpen,
                  }))}
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="contact-message"
                  className="block text-sm font-medium text-foreground"
                >
                  {t.contactPage.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  placeholder={t.contactPage.messagePlaceholder}
                  className="mt-2 w-full rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
                />
              </div>
              <Button type="submit" variant="hero" size="xl" className="mt-7 w-full sm:w-auto">
                {t.contactPage.sendMessage}
              </Button>
            </form>
          </Reveal>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-1">
            {details.map((item, i) => (
              <Reveal key={item.kind} delay={i * 70}>
                <article className="hover-lift h-full rounded-2xl border border-border bg-card p-6 shadow-soft">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft">
                    <item.icon className="h-5 w-5 text-primary" />
                  </span>
                  <h2 className="mt-4 font-semibold text-foreground">{detailTitles[item.kind]}</h2>
                  {item.lines.map((line) =>
                    item.href ? (
                      <a
                        key={line}
                        href={item.href(line)}
                        target={item.kind === "campus" ? "_blank" : undefined}
                        rel={item.kind === "campus" ? "noopener noreferrer" : undefined}
                        className="mt-1 block text-sm text-muted-foreground transition-colors hover:text-accent"
                      >
                        {line}
                      </a>
                    ) : (
                      <p key={line} className="mt-1 text-sm text-muted-foreground">
                        {line}
                      </p>
                    ),
                  )}
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      <section aria-labelledby="map-heading" className="bg-surface py-20">
        <div className="container-page">
          <h2 id="map-heading" className="sr-only">
            {t.contactPage.mapHeading}
          </h2>
          <Reveal className="overflow-hidden rounded-3xl border border-border shadow-soft">
            <iframe
              title="MIA Academy location in Maadi, Cairo"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3455.9866181999646!2d31.28122237477233!3d29.97981457495617!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458399a26b1c809%3A0xcc2a69565260f926!2sMaadi%20International%20Academy%20-%20MIA!5e0!3m2!1sen!2seg!4v1787101639156!5m2!1sen!2seg"
              className="h-[420px] w-full"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
            />
          </Reveal>
        </div>
      </section>

      {/* Book a call — disabled for now
      <Section className="pt-0">
        <Reveal className="glass-panel grid gap-6 rounded-3xl p-10 md:grid-cols-[minmax(0,1fr)_auto] md:items-center">
          <div className="min-w-0">
            <h2 className="text-2xl font-semibold text-foreground sm:text-3xl">
              {t.contactPage.discoveryCallTitle}
            </h2>
            <p className="mt-3 text-muted-foreground">{t.contactPage.discoveryCallDescription}</p>
          </div>
          <Button
            variant="hero"
            size="xl"
            onClick={() =>
              toast.success(t.contactPage.toastBookingTitle, {
                description: t.contactPage.toastBookingDescription,
              })
            }
          >
            <CalendarClock /> {t.contactPage.bookCall}
          </Button>
        </Reveal>
      </Section>
      */}
    </>
  );
}

function Field({
  id,
  label,
  type = "text",
  required,
}: {
  id: string;
  label: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-foreground">
        {label}
      </label>
      <input
        id={id}
        type={type}
        required={required}
        className="mt-2 h-11 w-full rounded-lg border border-input bg-background px-4 text-sm text-foreground outline-none placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-ring"
      />
    </div>
  );
}
