import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { useLanguage } from "@/lib/i18n";
import { localizeCategory, localizePost } from "@/lib/content-i18n";
import type { Post } from "@/data/site";

export function PostCard({ post: rawPost }: { post: Post }) {
  const { language } = useLanguage();
  const post = localizePost(rawPost, language);

  return (
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
        <span className="absolute top-4 start-4 w-fit rounded-full bg-primary-soft px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-soft">
          {localizeCategory(post.category, language)}
        </span>
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="text-lg leading-snug font-semibold text-foreground">{post.title}</h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
          {post.excerpt}
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-border pt-5 text-xs text-muted-foreground">
          <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-primary text-[10px] font-semibold text-primary-foreground">
            {post.author
              .split(" ")
              .slice(-2)
              .map((n) => n[0])
              .join("")}
          </span>
          <span className="font-medium text-foreground">{post.author}</span>
          <span className="flex items-center gap-1">
            <CalendarDays className="h-3.5 w-3.5 shrink-0" />
            {post.date}
          </span>
          <span>· {post.read}</span>
        </div>
      </div>
    </Link>
  );
}
