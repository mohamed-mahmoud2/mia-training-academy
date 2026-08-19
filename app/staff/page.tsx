import type { Metadata } from "next";
import { StaffClient } from "./staff-client";

export const metadata: Metadata = {
  title: "Faculty & Staff | MIA Academy",
  description:
    "Meet the leadership, professors, industry mentors and guest lecturers who teach at MIA Academy in Maadi, Cairo.",
  openGraph: {
    title: "Faculty & Staff | MIA Academy",
    description: "Leadership, professors, industry mentors and guest lecturers at MIA.",
  },
};

export default function Page() {
  return <StaffClient />;
}
