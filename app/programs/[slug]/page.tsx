import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { faculties } from "@/data/site";
import { ProgramDetailClient } from "./program-detail-client";

export function generateStaticParams() {
  return faculties.map((f) => ({ slug: f.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faculty = faculties.find((item) => item.slug === slug);

  if (faculty) {
    return {
      title: `${faculty.name.en} | MIA Academy`,
      description: faculty.description.en,
      openGraph: {
        title: `${faculty.name.en} | MIA Academy`,
        description: faculty.description.en,
      },
    };
  }
  return {
    title: "Faculty not found | MIA",
    robots: { index: false },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = faculties.find((item) => item.slug === slug);
  if (!faculty) notFound();

  return <ProgramDetailClient faculty={faculty} />;
}
