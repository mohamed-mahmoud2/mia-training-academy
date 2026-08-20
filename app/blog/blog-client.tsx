"use client";

import Link from "next/link";
import { CalendarDays, Clock } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { PostCard } from "@/components/site/PostCard";
import { Reveal } from "@/components/site/Reveal";
import { Section, SectionHeading } from "@/components/site/Section";
import { posts } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizePost } from "@/lib/content-i18n";

const categories = ["All", "Campus News"];

export function BlogClient() {
  const { t, language } = useLanguage();
  const [category, setCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(3);
  const featured = localizePost(posts[0]!, language);
  const filtered = category === "All" ? posts : posts.filter((p) => p.category === category);
  const visible = filtered.slice(0, visibleCount);

  return (
    <>
      <PageHero
        eyebrow={t.blogPage.eyebrow}
        title={t.blogPage.title}
        description={t.blogPage.description}
        breadcrumb={[{ label: t.blogDetail.home, to: "/" }, { label: t.blogDetail.blog }]}
      />

      <Section>
        <Reveal>
          <Link
            href={`/blog/${featured.slug}`}
            className="hover-lift grid overflow-hidden rounded-3xl border border-border bg-card shadow-soft lg:grid-cols-2"
          >
            <img
              src={featured.image}
              alt={featured.title}
              width={1200}
              height={800}
              loading="lazy"
              className="h-full w-full object-cover object-top"
            />
            <div className="p-8 sm:p-10">
              <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {localizeCategory(featured.category, language)}
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-balance text-foreground sm:text-3xl">
                {featured.title}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">{featured.excerpt}</p>
              <div className="mt-8 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                  {featured.author
                    .split(" ")
                    .slice(-2)
                    .map((n) => n[0])
                    .join("")}
                </span>
                <span className="font-medium text-foreground">{featured.author}</span>
                <span className="flex items-center gap-1">
                  <CalendarDays className="h-4 w-4" /> {featured.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-4 w-4" /> {featured.read}
                </span>
              </div>
            </div>
          </Link>
        </Reveal>
      </Section>

      <Section muted className="pt-0 pb-24">
        <div>
          <SectionHeading
            eyebrow={t.blogPage.allActivitiesEyebrow}
            title={t.blogPage.allActivitiesTitle}
          />
        </div>
        <Reveal className="mt-8 flex flex-wrap gap-2">
          {categories.map((item) => (
            <Button
              key={item}
              variant={category === item ? "default" : "outline"}
              size="sm"
              className="rounded-full"
              onClick={() => {
                setCategory(item);
                setVisibleCount(3);
              }}
            >
              {item === "All" ? t.blogPage.allCategory : localizeCategory(item, language)}
            </Button>
          ))}
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {visible.map((post, i) => (
            <Reveal key={post.slug} delay={i * 60}>
              <PostCard post={post} />
            </Reveal>
          ))}
        </div>

        {visibleCount < filtered.length && (
          <div className="mt-12 text-center">
            <Button variant="outline" size="lg" onClick={() => setVisibleCount((c) => c + 3)}>
              {t.blogPage.loadMore}
            </Button>
          </div>
        )}
      </Section>
    </>
  );
}
