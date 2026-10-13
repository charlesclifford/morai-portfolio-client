import { Metadata } from "next";
import { AboutView } from "@/components/public/views/about-view";

export const metadata: Metadata = {
  title: "About Me | Mechatronics, Robotics & Software Engineer",
  description:
    "Explore my engineering background, career journey, technical interests, and approach to building intelligent systems through mechatronics, robotics, and software engineering.",
};

export default function AboutPage() {
  return <AboutView />;
}
