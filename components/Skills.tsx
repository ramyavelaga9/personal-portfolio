"use client";

import { motion, useReducedMotion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";

export function Skills() {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="py-24 relative bg-muted/40">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills"
          subtitle="The stack behind production ranking, targeting, and pacing systems."
        />

        <div className="grid sm:grid-cols-2 gap-6">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={reduce ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06, duration: 0.5 }}
              className="surface surface-hover p-6"
            >
              <h3 className="text-sm font-semibold text-foreground mb-4">{category.name}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <Badge key={skill} variant="outline">
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
