"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Activity,
  Radar,
  Mic,
  Database,
  Shuffle,
  MessageSquare,
  type LucideIcon,
} from "lucide-react";
import { projects, type Project } from "@/data/projects";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";

const iconMap: Record<Project["icon"], LucideIcon> = {
  activity: Activity,
  radar: Radar,
  mic: Mic,
  database: Database,
  shuffle: Shuffle,
  "message-square": MessageSquare,
};

export function Projects() {
  const reduce = useReducedMotion();
  const featured = projects.filter((p) => p.featured);
  const [flagship, ...others] = featured;
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Projects"
          subtitle="Production systems and hackathon builds, in ranking, targeting, and applied AI."
        />

        <div className="grid lg:grid-cols-3 gap-6 mb-6">
          <ProjectCard project={flagship} className="lg:col-span-3" large reduce={!!reduce} delay={0} />
          {others.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              className="lg:col-span-1"
              reduce={!!reduce}
              delay={(i + 1) * 0.06}
            />
          ))}
        </div>

        {rest.length > 0 && (
          <div className="surface divide-y divide-border">
            {rest.map((project) => {
              const Icon = iconMap[project.icon];
              return (
                <div
                  key={project.id}
                  className="flex items-start gap-4 p-5 transition-colors hover:bg-muted/40"
                >
                  <div className="shrink-0 h-9 w-9 rounded-lg bg-muted text-muted-foreground flex items-center justify-center">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1">
                      <h3 className="text-sm font-semibold text-foreground">{project.title}</h3>
                      <span className="text-xs text-subtle-foreground">{project.period}</span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {project.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[11px]">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

function ProjectCard({
  project,
  className,
  large,
  reduce,
  delay,
}: {
  project: Project;
  className?: string;
  large?: boolean;
  reduce: boolean;
  delay: number;
}) {
  const Icon = iconMap[project.icon];
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.5 }}
      className={`surface surface-hover relative overflow-hidden p-6 ${large ? "sm:p-8" : ""} ${className ?? ""}`}
    >
      {large && (
        <div
          className="absolute -top-20 -right-20 w-64 h-64 rounded-full pointer-events-none"
          style={{
            background:
              "radial-gradient(circle, color-mix(in srgb, var(--accent) 14%, transparent), transparent 70%)",
          }}
        />
      )}
      <div className={`relative flex ${large ? "flex-col sm:flex-row sm:items-start" : "flex-col"} gap-5`}>
        <div className="shrink-0 h-11 w-11 rounded-xl bg-accent/10 text-accent flex items-center justify-center">
          <Icon className="h-5 w-5" />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex flex-wrap items-center gap-x-2 gap-y-1 mb-2">
            <h3 className={`font-semibold text-foreground ${large ? "text-xl" : "text-base"}`}>
              {project.title}
            </h3>
            <Badge variant="outline" className="text-[11px]">
              {project.kind}
            </Badge>
          </div>
          <p className="text-xs text-subtle-foreground mb-3">{project.period}</p>
          <p className={`text-muted-foreground leading-relaxed ${large ? "text-base max-w-2xl" : "text-sm"}`}>
            {project.description}
          </p>
          {project.metric && (
            <p className="text-sm font-medium text-accent mt-3">{project.metric}</p>
          )}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {project.techStack.map((tech) => (
              <Badge key={tech} variant="outline" className="text-[11px]">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
