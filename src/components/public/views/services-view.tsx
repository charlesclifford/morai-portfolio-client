
"use client";

import React from "react";
import {
  Activity,
  Bot,
  CircuitBoard,
  Code2,
  Cog,
  Cpu,
  Layers,
  ShieldCheck,
  Terminal,
  Workflow,
  Zap,
} from "lucide-react";

import { ChromeSparkleIcon } from "@/components/ui/icons";
import { TechIcon } from "@/components/ui/tech-icon";

interface IDiscipline {
  id: string;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  description: string;
  focusAreas: string[];
  techStack: string[];
}

const DISCIPLINES: IDiscipline[] = [
  {
    id: "software-engineering",
    icon: Code2,
    title: "Software Engineering",
    subtitle: "Building reliable software for real-world problems",
    description:
      "Developing modern web applications, backend services, and digital products with an emphasis on maintainability, usability, performance, and reliable system behavior.",
    focusAreas: [
      "Responsive interfaces and component-based architecture",
      "REST APIs, authentication, and backend application design",
      "Database modeling, data integrity, and query optimization",
      "Testing, debugging, and maintainable code",
    ],
    techStack: [
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "PostgreSQL",
      "MongoDB",
    ],
  },
  {
    id: "robotics",
    icon: Bot,
    title: "Robotics & Intelligent Systems",
    subtitle: "Connecting software, sensors, and physical machines",
    description:
      "Exploring how software and hardware work together to enable robots to perceive their surroundings, process information, and perform useful physical tasks.",
    focusAreas: [
      "Robot software architecture and system integration",
      "Sensor data acquisition and interpretation",
      "Robot kinematics and motion-control fundamentals",
      "Autonomous-system concepts and real-time behavior",
    ],
    techStack: ["C++", "ROS 2", "Linux", "Git"],
  },
  {
    id: "mechatronics",
    icon: Cog,
    title: "Mechatronics & Control Systems",
    subtitle: "Integrating mechanical, electrical, and digital systems",
    description:
      "Applying multidisciplinary engineering principles to the design and understanding of systems that combine mechanical components, electronics, sensing, actuation, and control.",
    focusAreas: [
      "Sensors, actuators, and electromechanical components",
      "Feedback control and system response",
      "Mechanical and electrical system integration",
      "System modeling, testing, and troubleshooting",
    ],
    techStack: ["C++", "Arduino", "MATLAB", "Simulink"],
  },
  {
    id: "embedded-systems",
    icon: CircuitBoard,
    title: "Embedded Systems & IoT",
    subtitle: "Software that interacts directly with hardware",
    description:
      "Working with the principles behind embedded computing, microcontrollers, hardware interfaces, and connected devices that collect data and respond to their environment.",
    focusAreas: [
      "Microcontroller programming fundamentals",
      "Digital inputs, outputs, and peripheral interfaces",
      "Serial communication and hardware integration",
      "Device monitoring and connected-system concepts",
    ],
    techStack: ["C", "C++", "Arduino", "ESP32"],
  },
  {
    id: "automation-integration",
    icon: Workflow,
    title: "Automation & System Integration",
    subtitle: "Making interconnected systems work together",
    description:
      "Bringing hardware, software, and operational processes together to reduce repetitive work, improve consistency, and create systems that are easier to monitor and maintain.",
    focusAreas: [
      "Workflow automation and event-driven processes",
      "Communication between software and devices",
      "System testing and fault diagnosis",
      "Deployment, monitoring, and operational reliability",
    ],
    techStack: [
      "Node.js",
      "TypeScript",
      "REST APIs",
      "GitHub Actions",
    ],
  },
];

const PRINCIPLES = [
  {
    icon: Terminal,
    title: "Clear Engineering",
    description:
      "Readable implementations, clear interfaces, and well-defined system boundaries make projects easier to test, understand, and extend.",
  },
  {
    icon: Activity,
    title: "Test and Validate",
    description:
      "Use measurable requirements, repeatable tests, and real-world validation to understand how a system behaves and where it needs improvement.",
  },
  {
    icon: Workflow,
    title: "Systems Thinking",
    description:
      "Consider how software, hardware, data, and users interact instead of optimizing one component without considering the complete system.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and Reliability",
    description:
      "Account for failure conditions, data integrity, defensive error handling, and appropriate safety measures throughout the engineering process.",
  },
];

export function ServicesView() {
  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-28 sm:pt-36 space-y-20 sm:space-y-28">
      {/* Expertise hero */}
      <section className="space-y-6">
        <div className="flex items-center gap-2 text-primary">
          <ChromeSparkleIcon className="w-4 h-4" />
          <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
            Engineering Disciplines
          </span>
        </div>

        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight">
              Engineering Across
              <br />
              <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-violet-500">
                Software & Intelligent Systems.
              </span>
            </h1>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              Exploring the intersection of software engineering,
              mechatronics, and robotics to build practical solutions
              that connect digital systems with the physical world.
            </p>
          </div>
        </div>
      </section>

      {/* Core engineering disciplines */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4">
          <div className="flex items-center gap-2 text-primary pb-1">
            <Layers className="w-3.5 h-3.5" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
              Core Disciplines
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            Where Engineering Meets Practice
          </h2>

          <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
            From application development to hardware integration,
            each discipline contributes a different perspective to
            solving engineering problems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DISCIPLINES.map((item, idx) => {
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                className="p-6 sm:p-8 rounded-3xl bg-card border border-border space-y-5 hover:border-primary/40 transition-all shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary">
                    <Icon className="w-5 h-5" />
                  </div>

                  <span className="text-xs font-mono text-muted-foreground font-semibold">
                    {String(idx + 1).padStart(2, "0")}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-lg font-bold text-foreground">
                    {item.title}
                  </h3>

                  <p className="text-xs text-primary font-mono font-medium">
                    {item.subtitle}
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  {item.description}
                </p>

                <div className="pt-3 border-t border-border/60 space-y-2">
                  <span className="text-[11px] font-mono uppercase text-foreground font-semibold block">
                    Focus Areas
                  </span>

                  <ul className="space-y-2 text-xs text-muted-foreground">
                    {item.focusAreas.map((area) => (
                      <li
                        key={area}
                        className="flex items-start gap-2"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-1.5 shrink-0" />
                        <span>{area}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-3 border-t border-border/60 flex flex-wrap items-center gap-1.5">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg bg-muted text-[11px] font-mono text-muted-foreground font-medium border border-border/50 hover:text-foreground transition-colors"
                    >
                      <TechIcon name={tech} size={14} />
                      <span>{tech}</span>
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* Engineering principles */}
      <section className="space-y-8">
        <div className="border-b border-border/80 pb-4">
          <div className="flex items-center gap-2 text-primary pb-1">
            <Zap className="w-3.5 h-3.5" />
            <span className="text-xs font-mono uppercase tracking-widest text-muted-foreground font-semibold">
              Engineering Principles
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-foreground tracking-tight">
            How I Approach Engineering
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PRINCIPLES.map((principle) => {
            const Icon = principle.icon;

            return (
              <article
                key={principle.title}
                className="p-6 rounded-3xl bg-card border border-border space-y-3"
              >
                <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                  <Icon className="w-4 h-4" />
                </div>

                <h3 className="text-sm font-bold text-foreground">
                  {principle.title}
                </h3>

                <p className="text-xs text-muted-foreground leading-relaxed">
                  {principle.description}
                </p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Closing statement */}
      <section className="pb-4">
        <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 space-y-3">
          <div className="flex items-center gap-2 text-primary">
            <Cpu className="w-4 h-4" />
            <span className="text-xs font-mono uppercase tracking-widest font-semibold">
              One Engineering Mindset
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight">
            Turning ideas into working systems.
          </h2>

          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl">
            Good engineering is more than writing code or assembling
            components. It means understanding the problem, choosing
            appropriate tools, testing assumptions, and building
            solutions that work reliably in their intended environment.
          </p>
        </div>
      </section>
    </div>
  );
}
