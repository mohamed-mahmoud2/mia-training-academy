import type { Metadata } from "next";
import { AdmissionsClient } from "./admissions-client";

export const metadata: Metadata = {
  title: "Admissions | Apply to MIA Academy",
  description:
    "Four steps to enrol at MIA Academy: choose a programme, submit documents, interview and confirm your place. Scholarships available.",
  openGraph: {
    title: "Admissions | Apply to MIA Academy",
    description: "Entry requirements, tuition, scholarships and the MIA application form.",
  },
};

export default function Page() {
  return <AdmissionsClient />;
}
