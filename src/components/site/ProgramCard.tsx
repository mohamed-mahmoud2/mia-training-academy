"use client";

import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import type { Faculty } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeFaculty } from "@/lib/content-i18n";

export function ProgramCard({ program: faculty }: { program: Faculty }) {
  const { t, language } = useLanguage();
  const localized = localizeFaculty(faculty, language);

  return (
    <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative overflow-hidden">
        <img
          src={faculty.image}
          alt={localized.name}
          width={400}
          height={300}
          loading="lazy"
          className="h-66 w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-t from-black/35 via-black/0 to-black/0"
        />
        <span className="absolute top-4 start-4 w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-soft">
          {t.faculties.badge}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <h3 className="text-xl leading-snug font-semibold text-foreground">{localized.name}</h3>
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
            {localized.description}
          </p>

          {faculty.featuredPrograms.length > 0 && (
            <ul className="mt-5 flex flex-wrap gap-2">
              {faculty.featuredPrograms.slice(0, 3).map((item) => (
                <li
                  key={item.slug}
                  className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground"
                >
                  {item.title}
                </li>
              ))}
            </ul>
          )}

          <dl className="mt-6 grid grid-cols-1 gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
            <div className="flex min-w-0 items-center gap-2">
              <Building2 className="h-4 w-4 shrink-0 text-accent-foreground" />
              <span className="truncate">{t.faculties.onCampusLabel}</span>
            </div>
          </dl>
        </div>

        <Link
          href={`/programs/${faculty.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
        >
          {t.faculties.exploreFaculty}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      </div>
    </article>
  );
}
