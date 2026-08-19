import type { Metadata } from "next";
import { BlogClient } from "./blog-client";

export const metadata: Metadata = {
  title: "Insights & News | MIA Academy Blog",
  description:
    "Career advice, campus news, industry insights and student life stories from MIA Academy in Maadi, Cairo.",
  openGraph: {
    title: "Insights & News | MIA Academy",
    description: "Career advice, campus news and industry insights from MIA.",
  },
};

export default function Page() {
  return <BlogClient />;
}
