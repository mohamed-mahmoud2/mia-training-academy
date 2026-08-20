"use client";

import Link from "next/link";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ImageGallery } from "@/components/site/ImageGallery";
import { PageHero } from "@/components/site/PageHero";
import { PostCard } from "@/components/site/PostCard";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { posts, type Post } from "@/data/site";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizePost } from "@/lib/content-i18n";

export function BlogDetailClient({ post: rawPost }: { post: Post }) {
  const { t, language } = useLanguage();
  const post = localizePost(rawPost, language);
  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const gallery = post.gallery ?? [post.image];

  return (
    <>
      <PageHero
        eyebrow={localizeCategory(post.category, language)}
        title={post.title}
        description={post.excerpt}
        breadcrumb={[
          { label: t.blogDetail.home, to: "/" },
          { label: t.blogDetail.blog, to: "/blog" },
          { label: post.title },
        ]}
      />

      <Section>
        <Reveal>
          <Button asChild variant="outline">
            <Link href="/blog">
              <ArrowLeft className="rtl:rotate-180" /> {t.blogDetail.backToAllBlogs}
            </Link>
          </Button>
        </Reveal>

        <div className="mt-8 grid gap-12 lg:grid-cols-[1.2fr_1fr]">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
              <img
                src={post.image}
                alt={post.title}
                width={1200}
                height={800}
                className="h-[400px] w-full object-cover object-top"
              />
            </div>

            <article className="prose prose-neutral mt-8 max-w-none space-y-4 text-muted-foreground">
              {(post.content ?? [post.excerpt]).map((paragraph, i) => (
                <p key={i} className="text-lg leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </article>
          </Reveal>

          <Reveal delay={100}>
            <aside className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <h2 className="text-sm font-semibold tracking-[0.18em] text-muted-foreground uppercase">
                {t.blogDetail.articleDetails}
              </h2>
              <div className="mt-5 space-y-4 text-sm text-muted-foreground">
                <p className="flex items-center gap-2">
                  <span className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary text-xs font-semibold text-primary-foreground">
                    {post.author
                      .split(" ")
                      .slice(-2)
                      .map((n) => n[0])
                      .join("")}
                  </span>
                  <span className="font-medium text-foreground">{post.author}</span>
                </p>
                <p className="flex items-center gap-2">
                  <CalendarDays className="h-4 w-4 shrink-0" /> {post.date}
                </p>
                <p className="flex items-center gap-2">
                  <Clock className="h-4 w-4 shrink-0" /> {post.read}
                </p>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>

      {gallery.length > 1 && (
        <Section muted>
          <ImageGallery
            images={gallery}
            altBase={post.title}
            sectionLabel={t.blogDetail.gallery}
            labels={{
              previousSlide: t.blogDetail.previousSlide,
              nextSlide: t.blogDetail.nextSlide,
              goToSlide: t.blogDetail.goToSlide,
            }}
          />
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <h2 className="text-xl font-semibold text-foreground">
            {t.blogDetail.moreIn(localizeCategory(post.category, language))}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((item) => (
              <PostCard key={item.slug} post={item} />
            ))}
          </div>
        </Section>
      )}

      <CtaBanner />
    </>
  );
}
