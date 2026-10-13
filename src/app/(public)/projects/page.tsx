import { Metadata } from "next";
import { ProjectsCatalogView } from "@/components/public/views/projects-catalog-view";

export const metadata: Metadata = {
  title: "Projects & Case Studies | Robotics, Mechatronics & Software",
  description:
    "Explore engineering projects, software applications, robotics concepts, embedded systems, automation solutions, and practical implementations across digital and physical systems.",
};

export default function ProjectsPage() {
  return <ProjectsCatalogView />;
}
