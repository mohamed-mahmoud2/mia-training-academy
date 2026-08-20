import Link from "next/link";
import type { ReactNode } from "react";

export function PageHero({
  eyebrow,
  title,
  description,
  breadcrumb,
  children,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  breadcrumb?: { label: string; to?: string }[];
  children?: ReactNode;
}) {
  return (
    <header className="relative overflow-hidden bg-primary pt-32 pb-20 text-primary-foreground">
      <div
        aria-hidden
        className="absolute inset-0 opacity-70"
        style={{ background: "var(--gradient-hero)" }}
      />
      <div
        aria-hidden
        className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-accent/25 blur-3xl"
      />
      <div className="container-page relative">
        {breadcrumb && (
          <nav aria-label="Breadcrumb" className="mb-5 text-sm text-primary-foreground/75">
            <ol className="flex flex-wrap items-center gap-2">
              {breadcrumb.map((crumb, i) => (
                <li key={crumb.label} className="flex items-center gap-2">
                  {crumb.to ? (
                    <Link href={crumb.to} className="transition-colors hover:text-accent">
                      {crumb.label}
                    </Link>
                  ) : (
                    <span aria-current="page">{crumb.label}</span>
                  )}
                  {i < breadcrumb.length - 1 && <span aria-hidden>/</span>}
                </li>
              ))}
            </ol>
          </nav>
        )}
        {eyebrow && (
          <span className="inline-flex items-center rounded-full border border-primary-foreground/25 bg-primary-foreground/10 px-4 py-1.5 text-xs font-semibold tracking-[0.18em] uppercase">
            {eyebrow}
          </span>
        )}
        <h1 className="mt-5 max-w-3xl text-4xl leading-tight font-semibold text-balance sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-5 line-clamp-2 max-w-2xl text-lg text-primary-foreground/85">
            {description}
          </p>
        )}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </header>
  );
}
