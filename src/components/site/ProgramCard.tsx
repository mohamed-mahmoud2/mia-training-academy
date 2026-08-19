"use client";

import Link from "next/link";
import { ArrowRight, Clock, MonitorPlay } from "lucide-react";
import type { Program } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizeProgram } from "@/lib/content-i18n";

export function ProgramCard({ program: rawProgram }: { program: Program }) {
  const { t, language } = useLanguage();
  const program = localizeProgram(rawProgram, language);
  return (
    <article className="hover-lift group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
      <div className="relative overflow-hidden">
        <img
          src={program.image}
          alt={program.title}
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
          {localizeCategory(program.category, language)}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="flex-1">
          <h3 className="text-xl leading-snug font-semibold text-foreground">{program.title}</h3>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{program.excerpt}</p>

          <ul className="mt-5 flex flex-wrap gap-2">
            {program.tags.map((tag) => (
              <li
                key={tag}
                className="rounded-full border border-accent/40 bg-accent-soft px-3 py-1 text-xs font-medium text-accent-foreground"
              >
                {tag}
              </li>
            ))}
          </ul>

          <dl className="mt-6 grid grid-cols-2 gap-3 border-t border-border pt-5 text-sm text-muted-foreground">
            <div className="flex min-w-0 items-center gap-2">
              <Clock className="h-4 w-4 shrink-0 text-accent-foreground" />
              <span className="truncate">{program.duration}</span>
            </div>
            <div className="flex min-w-0 items-center gap-2">
              <MonitorPlay className="h-4 w-4 shrink-0 text-accent-foreground" />
              <span className="truncate">{program.format}</span>
            </div>
          </dl>
        </div>

        <Link
          href={`/programs/${program.slug}`}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-accent-foreground"
        >
          {t.programCard.learnMore}
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1 rtl:rotate-180" />
        </Link>
      </div>
    </article>
  );
}
