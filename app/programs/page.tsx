import type { Metadata } from "next";
import { ProgramsClient } from "./programs-client";

export const metadata: Metadata = {
  title: "Programs | MIA Academy",
  description:
    "Browse MIA Academy faculties across business, technology, marketing and languages, with the study areas and programmes connected to each specialism.",
  openGraph: {
    title: "Programs at MIA Academy",
    description:
      "Explore the academy by faculty and discover the learning tracks connected to each area.",
  },
};

export default function Page() {
  return <ProgramsClient />;
}
