"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { timeline } from "@/data/timeline";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";

export function Timeline() {
  const reduce = useReducedMotion();
  return (
    <section id="experience" className="py-24 relative bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Experience"
          subtitle="Four years of production ML across ad tech and consumer platforms."
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-5 top-2 bottom-2 w-px bg-border-strong" />

          <div className="space-y-10">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="relative pl-16"
              >
                <div
                  className={`absolute left-0 top-0 w-10 h-10 rounded-full border-2 flex items-center justify-center bg-background ${
                    entry.current ? "border-accent" : "border-border-strong"
                  }`}
                >
                  <Briefcase
                    className={`h-4 w-4 ${entry.current ? "text-accent" : "text-muted-foreground"}`}
                  />
                </div>

                <div className="surface surface-hover p-6">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{entry.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {entry.company} &middot; {entry.location}
                      </p>
                    </div>
                    <Badge variant={entry.current ? "accent" : "outline"}>{entry.period}</Badge>
                  </div>

                  <ul className="space-y-2.5 mt-4">
                    {entry.highlights.map((highlight, j) => (
                      <li key={j} className="text-sm text-foreground/75 flex items-start gap-2.5 leading-relaxed">
                        <span className="text-accent mt-1.5 shrink-0 text-[10px]">&#9679;</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlight.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-foreground font-semibold">$1</strong>'
                            ),
                          }}
                        />
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
