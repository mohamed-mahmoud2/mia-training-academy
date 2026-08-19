import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { faculties, programs } from "@/data/site";
import { ProgramDetailClient } from "./program-detail-client";

export function generateStaticParams() {
  return [...faculties.map((f) => ({ slug: f.slug })), ...programs.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const faculty = faculties.find((item) => item.slug === slug);
  const program = programs.find((p) => p.slug === slug);

  if (faculty) {
    return {
      title: `${faculty.name} | MIA Academy`,
      description: faculty.description,
      openGraph: {
        title: `${faculty.name} | MIA Academy`,
        description: faculty.description,
      },
    };
  }
  if (program) {
    return {
      title: `${program.title} | MIA Academy`,
      description: program.excerpt,
      openGraph: { title: `${program.title} | MIA Academy`, description: program.excerpt },
    };
  }
  return {
    title: "Faculty / programme not found | MIA",
    robots: { index: false },
  };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const faculty = faculties.find((item) => item.slug === slug);
  const program = programs.find((p) => p.slug === slug);
  if (!faculty && !program) notFound();

  return <ProgramDetailClient faculty={faculty} program={program} />;
}
