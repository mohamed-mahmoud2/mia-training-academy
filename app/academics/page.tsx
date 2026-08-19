import type { Metadata } from "next";
import { AcademicsClient } from "./academics-client";

export const metadata: Metadata = {
  title: "Academics at MIA | Faculties, Methodology & Facilities",
  description:
    "Explore MIA Academy's teaching methodology, six faculties, modern labs and the 2026/27 academic calendar.",
  openGraph: {
    title: "Academics at MIA Academy",
    description: "Our methodology, faculties, facilities and academic calendar.",
  },
};

export default function Page() {
  return <AcademicsClient />;
}
