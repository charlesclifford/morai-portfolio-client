import { Metadata } from "next";
import { BlogCatalogView } from "@/components/public/views/blog-catalog-view";

export const metadata: Metadata = {
  title: "Engineering Blog | Robotics, Mechatronics & Software",
  description:
    "Practical articles, technical tutorials, and engineering insights covering robotics, embedded systems, automation, software development, and intelligent technologies.",
};

export default function BlogPage() {
  return <BlogCatalogView />;
}
