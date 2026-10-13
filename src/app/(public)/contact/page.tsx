import { Metadata } from "next";
import { ContactView } from "@/components/public/views/contact-view";

export const metadata: Metadata = {
  title: "Contact | Engineering & Software Projects",
  description:
    "Get in touch to discuss software development, robotics projects, mechatronics solutions, engineering collaboration, and technical consulting opportunities.",
};

export default function ContactPage() {
  return <ContactView />;
}
