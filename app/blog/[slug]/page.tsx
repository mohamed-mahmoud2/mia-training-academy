import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { posts } from "@/data/site";
import { BlogDetailClient } from "./blog-detail-client";

export function generateStaticParams() {
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) {
    return { title: "Article not found | MIA", robots: { index: false } };
  }
  return {
    title: `${post.title} | MIA Academy`,
    description: post.excerpt,
    openGraph: { title: post.title, description: post.excerpt },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return <BlogDetailClient post={post} />;
}
