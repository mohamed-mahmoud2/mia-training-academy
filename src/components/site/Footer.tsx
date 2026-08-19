"use client";

import Link from "next/link";
import { Clock, Facebook, Instagram, Linkedin, Mail, MapPin, Phone, Youtube } from "lucide-react";
import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  const quickLinks = t.footer.quickLinks;
  const resources = t.footer.resources;

  return (
    <footer className="bg-footer text-footer-foreground">
      <div className="container-page grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <span className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-primary-foreground/95 p-1.5">
              <img
                src="/images/mia-logo.webp"
                alt="MIA Academy logo"
                width={48}
                height={48}
                loading="lazy"
                className="h-full w-full object-contain"
              />
            </span>
            <span className="min-w-0 text-sm font-semibold">
              MIA Academy
              <span className="block text-xs font-normal text-primary-foreground/70">
                {t.footer.academyFullName}
              </span>
            </span>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-primary-foreground/75">
            {t.footer.tagline}
          </p>
          <div className="mt-6 flex gap-2">
            {[
              { Icon: Linkedin, label: "LinkedIn" },
              { Icon: Facebook, label: "Facebook" },
              { Icon: Instagram, label: "Instagram" },
              { Icon: Youtube, label: "YouTube" },
            ].map(({ Icon, label }) => (
              <a
                key={label}
                href="#"
                aria-label={`MIA on ${label}`}
                className="grid h-11 w-11 place-items-center rounded-full border border-primary-foreground/25 transition-colors hover:border-accent hover:bg-accent/15"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">
            {t.footer.quickLinksHeading}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">
            {t.footer.resourcesHeading}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            {resources.map((link) => (
              <li key={link.label}>
                <Link href={link.to} className="transition-colors hover:text-accent">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold tracking-[0.16em] uppercase">
            {t.footer.contactHeading}
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                href="https://maps.google.com/?q=Road+9,+Maadi,+Cairo,+Egypt"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-accent"
              >
                Road 9, Maadi, Cairo, Egypt
              </a>
            </li>
            <li className="flex gap-2">
              <Phone className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a href="tel:+20223580100" className="transition-colors hover:text-accent">
                +20 2 2358 0100
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <a
                href="mailto:admissions@mia-academy.edu"
                className="transition-colors hover:text-accent"
              >
                admissions@mia-academy.edu
              </a>
            </li>
            <li className="flex gap-2">
              <Clock className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
              <span>
                {t.officeHours.weekdays}
                <span className="block">{t.officeHours.saturday}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/15">
        <div className="container-page flex flex-col gap-3 py-6 text-xs text-primary-foreground/65 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} MIA Academy. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
