import React from "react";
import { Metadata } from "next";
import { ServicesView } from "@/components/public/views/services-view";

export const metadata: Metadata = {
  title: "Engineering Services | Software, Robotics & Automation",
  description:
    "Discover software development, intelligent system design, robotics engineering, embedded systems, and automation capabilities for practical engineering challenges.",
};

export default function ServicesPage() {
  return <ServicesView />;
}
