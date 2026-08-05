"use client";

import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import { timeline } from "@/data/timeline";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";

export function Timeline() {
  return (
    <section id="experience" className="py-24 relative bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Career Timeline"
          subtitle="From research to production ML at scale"
        />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/50 via-emerald-500/30 to-transparent" />

          <div className="space-y-12">
            {timeline.map((entry, i) => (
              <motion.div
                key={entry.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="relative pl-20"
              >
                <div
                  className={`absolute left-5 top-1 w-7 h-7 rounded-full border-2 flex items-center justify-center ${
                    entry.current
                      ? "border-emerald-500 bg-emerald-500/20"
                      : "border-blue-500/50 bg-zinc-900"
                  }`}
                >
                  <Briefcase
                    className={`h-3.5 w-3.5 ${
                      entry.current ? "text-emerald-400" : "text-blue-400"
                    }`}
                  />
                </div>

                <div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:border-zinc-700 transition-colors">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-zinc-100">
                        {entry.title}
                      </h3>
                      <p className="text-blue-400 font-medium">{entry.company}</p>
                    </div>
                    <Badge variant={entry.current ? "emerald" : "outline"}>
                      {entry.period}
                    </Badge>
                  </div>

                  <ul className="space-y-2">
                    {entry.highlights.map((highlight, j) => (
                      <li
                        key={j}
                        className="text-sm text-zinc-400 flex items-start gap-2"
                      >
                        <span className="text-emerald-500 mt-1.5 shrink-0">•</span>
                        <span
                          dangerouslySetInnerHTML={{
                            __html: highlight.replace(
                              /\*\*(.*?)\*\*/g,
                              '<strong class="text-zinc-200">$1</strong>'
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
