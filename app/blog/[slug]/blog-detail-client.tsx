"use client";

import Link from "next/link";
import { ArrowLeft, ArrowRight, CalendarDays, Clock } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { PageHero } from "@/components/site/PageHero";
import { Reveal } from "@/components/site/Reveal";
import { Section } from "@/components/site/Section";
import { CtaBanner } from "@/components/site/CtaBanner";
import { posts, type Post } from "@/data/site";
import { useIsMobile } from "@/hooks/use-mobile";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizePost } from "@/lib/content-i18n";

export function BlogDetailClient({ post: rawPost }: { post: Post }) {
  const { t, language } = useLanguage();
  const post = localizePost(rawPost, language);
  const related = posts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const gallery = post.gallery ?? [post.image];
  const isMobile = useIsMobile();
  const imagesPerSlide = isMobile ? 1 : 3;
  const totalSlides = Math.ceil(gallery.length / imagesPerSlide);

  const [gallerySlide, setGallerySlide] = useState(0);
  const [dragStart, setDragStart] = useState<number | null>(null);

  const goToPrevious = () => setGallerySlide((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
  const goToNext = () => setGallerySlide((prev) => (prev + 1) % totalSlides);

  const handleDragStart = (e: React.MouseEvent | React.TouchEvent) => {
    const clientX = "touches" in e ? e.touches[0]!.clientX : (e as React.MouseEvent).clientX;
    setDragStart(clientX);
  };

  useEffect(() => {
    if (dragStart === null) return;

    const handleDragEnd = (e: MouseEvent | TouchEvent) => {
      const clientX =
        "changedTouches" in e ? e.changedTouches[0]!.clientX : (e as MouseEvent).clientX;
      const dragDistance = dragStart - clientX;
      const threshold = 50;

      if (dragDistance > threshold) {
        goToNext();
      } else if (dragDistance < -threshold) {
        goToPrevious();
      }
      setDragStart(null);
    };

    document.addEventListener("mouseup", handleDragEnd);
    document.addEventListener("touchend", handleDragEnd);

    return () => {
      document.removeEventListener("mouseup", handleDragEnd);
      document.removeEventListener("touchend", handleDragEnd);
    };
  }, [dragStart, totalSlides]);

  const galleryStart = gallerySlide * imagesPerSlide;
  const visibleGalleryImages = gallery.slice(galleryStart, galleryStart + imagesPerSlide);

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
              <Button asChild variant="hero" size="lg" className="mt-7 w-full">
                <Link href="/blog">{t.blogDetail.backToAllBlogs}</Link>
              </Button>
            </aside>
          </Reveal>
        </div>
      </Section>

      {gallery.length > 1 && (
        <Section muted>
          <div className="mb-8">
            <h2 className="text-2xl font-semibold text-foreground">{t.blogDetail.gallery}</h2>
          </div>
          <div className="relative">
            <div
              className="grid cursor-grab grid-cols-1 gap-4 select-none active:cursor-grabbing md:grid-cols-3"
              onMouseDown={handleDragStart}
              onTouchStart={handleDragStart}
            >
              {visibleGalleryImages.map((image, index) => (
                <Reveal key={`${gallerySlide}-${index}`} delay={index * 50}>
                  <div className="overflow-hidden rounded-xl border border-border">
                    <img
                      src={image}
                      alt={`${post.title} gallery image ${galleryStart + index + 1}`}
                      width={500}
                      height={600}
                      draggable={false}
                      onDragStart={(e) => e.preventDefault()}
                      className="h-[350px] w-full object-cover object-top pointer-events-none"
                    />
                  </div>
                </Reveal>
              ))}
            </div>
            {totalSlides > 1 && (
              <div className="mt-6 flex items-center justify-between">
                <button
                  type="button"
                  aria-label={t.blogDetail.previousSlide}
                  onClick={goToPrevious}
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
                >
                  <ArrowLeft className="h-4 w-4 rtl:rotate-180" />
                </button>
                <div className="flex gap-2">
                  {Array.from({ length: totalSlides }).map((_, index) => (
                    <button
                      key={index}
                      type="button"
                      aria-label={t.blogDetail.goToSlide(index + 1)}
                      onClick={() => setGallerySlide(index)}
                      className={`h-2.5 w-2.5 cursor-pointer rounded-full transition ${
                        index === gallerySlide ? "bg-primary" : "bg-muted-foreground/40"
                      }`}
                    />
                  ))}
                </div>
                <button
                  type="button"
                  aria-label={t.blogDetail.nextSlide}
                  onClick={goToNext}
                  className="grid h-10 w-10 cursor-pointer place-items-center rounded-full border border-border bg-card text-foreground transition hover:bg-muted"
                >
                  <ArrowRight className="h-4 w-4 rtl:rotate-180" />
                </button>
              </div>
            )}
          </div>
        </Section>
      )}

      {related.length > 0 && (
        <Section>
          <h2 className="text-xl font-semibold text-foreground">
            {t.blogDetail.moreIn(localizeCategory(post.category, language))}
          </h2>
          <div className="mt-6 grid gap-6 md:grid-cols-3">
            {related.map((rawItem) => {
              const item = localizePost(rawItem, language);
              return (
                <Link
                  key={item.slug}
                  href={`/blog/${item.slug}`}
                  className="hover-lift flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-soft"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    width={400}
                    height={225}
                    loading="lazy"
                    className="h-40 w-full object-cover object-top"
                  />
                  <div className="flex flex-1 flex-col p-5">
                    <h3 className="text-base leading-snug font-semibold text-foreground">
                      {item.title}
                    </h3>
                    <p className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">
                      <CalendarDays className="h-4 w-4 shrink-0" />
                      {item.date} · {item.read}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </Section>
      )}

      <CtaBanner />
    </>
  );
}
