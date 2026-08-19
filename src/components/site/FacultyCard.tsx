"use client";

import Link from "next/link";
import { ArrowRight, BriefcaseBusiness } from "lucide-react";
import type { Faculty } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeFaculty } from "@/lib/content-i18n";

export function FacultyCard({ faculty }: { faculty: Faculty }) {
  const { t, language } = useLanguage();
  const localized = localizeFaculty(faculty, language);

  return (
    <article className="hover-lift group flex h-full flex-col rounded-2xl border border-border bg-card p-6 shadow-soft">
      <h3 className="mt-4 text-xl leading-snug font-semibold text-foreground">{localized.name}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{localized.description}</p>

      <div className="mt-5 flex items-center gap-2 text-sm font-medium text-accent-foreground">
        <BriefcaseBusiness className="h-4 w-4" />
        {faculty.featuredPrograms.length > 0
          ? t.faculties.programmeFocus(faculty.featuredPrograms.length)
          : t.faculties.directToFaculty}
      </div>

      {faculty.featuredPrograms.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-2">
          {faculty.featuredPrograms.slice(0, 3).map((program) => (
            <li
              key={program.slug}
              className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground"
            >
              {program.title}
            </li>
          ))}
        </ul>
      )}

      <Link
        href={`/programs/${faculty.slug}`}
        className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
      >
        {t.faculties.exploreFaculty}
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
      </Link>
    </article>
  );
}
