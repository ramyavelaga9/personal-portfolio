"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, ExternalLink, Award } from "lucide-react";
import { publications } from "@/data/publications";
import { awardGroups } from "@/data/awards";
import { SectionHeading } from "./SectionHeading";

export function Recognition() {
  const reduce = useReducedMotion();
  return (
    <section id="recognition" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Recognition"
          subtitle="Publications, hackathon wins, and honors earned along the way."
        />

        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-8">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <BookOpen className="h-4 w-4 text-accent" />
              Publications
            </h3>
            <div className="rounded-2xl border border-border bg-card divide-y divide-border">
              {publications.map((pub) => (
                <div key={pub.id} className="p-5">
                  <p className="text-sm font-medium text-foreground leading-snug">{pub.title}</p>
                  <div className="flex items-center gap-2 mt-2">
                    <p className="text-xs text-muted-foreground">
                      {pub.venue} &middot; {pub.year}
                    </p>
                    {pub.link && (
                      <a
                        href={pub.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-accent hover:brightness-110"
                      >
                        View <ExternalLink className="h-3 w-3" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
              <Award className="h-4 w-4 text-accent" />
              Awards &amp; honors
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {awardGroups.map((group) => (
                <div key={group.id} className="rounded-2xl border border-border bg-card p-5">
                  <p className="text-xs text-muted-foreground mb-3">{group.label}</p>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <li key={item.id}>
                        <p className="text-sm font-medium text-foreground leading-snug">
                          {item.title}
                        </p>
                        <p className="text-xs text-subtle-foreground mt-0.5">{item.meta}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
