import type { Metadata } from "next";
import { AboutClient } from "./about-client";

export const metadata: Metadata = {
  title: "About MIA Academy | Our Mission & History",
  description:
    "Learn how MIA Academy grew from its founding in 2017 into an academy licensed by Egyptian government bodies, with 6,000+ graduates.",
  openGraph: {
    title: "About MIA Academy",
    description: "Our mission, values, milestones and government accreditation.",
  },
};

export default function Page() {
  return <AboutClient />;
}
