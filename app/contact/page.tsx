import type { Metadata } from "next";
import { ContactClient } from "./contact-client";

export const metadata: Metadata = {
  title: "Contact MIA Academy | Maadi, Cairo",
  description:
    "Reach the MIA Academy team in Maadi, Cairo. Send a message, call an advisor or book a 15-minute discovery call.",
  openGraph: {
    title: "Contact MIA Academy",
    description: "Address, phone, email, office hours and advisor bookings.",
  },
};

export default function Page() {
  return <ContactClient />;
}
