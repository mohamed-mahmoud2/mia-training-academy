import type { Metadata } from "next";
import { FaqsClient } from "./faqs-client";

export const metadata: Metadata = {
  title: "FAQs | Admissions, Tuition & Academics at MIA",
  description:
    "Answers on MIA Academy admissions, tuition and payment plans, academics, campus life and online learning.",
  openGraph: {
    title: "Frequently Asked Questions | MIA Academy",
    description: "Search answers about admissions, fees, academics, campus life and online study.",
  },
};

export default function Page() {
  return <FaqsClient />;
}
