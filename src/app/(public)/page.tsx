import { Metadata } from "next";
import { HomeView } from "@/components/public/views/home-view";

export const metadata: Metadata = {
  title: "Mechatronics, Robotics & Software Engineer",
  description:
    "Engineering intelligent machines, robotic systems, embedded solutions, and high-performance software. Combining mechanical, electrical, control systems, and software engineering to build practical real-world solutions.",
  keywords: [
    "Mechatronics Engineer",
    "Robotics Engineer",
    "Software Engineer",
    "Robotics Software Developer",
    "Embedded Systems",
    "Automation and Control Systems",
    "Robot Operating System (ROS)",
    "Internet of Things (IoT)",
    "Full-Stack Development",
    "Artificial Intelligence",
    "Control Systems Engineering",
  ],
  openGraph: {
    title: "Mechatronics, Robotics & Software Engineer",
    description:
      "Building intelligent machines, robotic systems, embedded solutions, and software that connects the digital and physical worlds.",
    type: "website",
  },
};

export default function HomePage() {
  return <HomeView />;
}
