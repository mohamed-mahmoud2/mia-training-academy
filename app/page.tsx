import type { Metadata } from "next";
import { HomeClient } from "./home-client";

export const metadata: Metadata = {
  title: "MIA Academy | Professional Diplomas in Maadi, Cairo",
  description:
    "Industry-built diplomas and certificates in business, data, marketing and languages. Join MIA Academy's next cohort in Maadi, Cairo.",
  openGraph: {
    title: "MIA Academy | Professional Diplomas in Cairo",
    description:
      "Industry-built diplomas and certificates in business, data, marketing and languages at MIA Academy.",
  },
};

export default function Page() {
  return <HomeClient />;
}
