"use client";

import { motion } from "framer-motion";
import { skillCategories } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";
import { Badge } from "./ui/badge";

export function Skills() {
  return (
    <section id="skills" className="py-24 relative bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Skills"
          subtitle="Technologies I use to build production ML systems"
        />

        <div className="grid sm:grid-cols-2 gap-8">
          {skillCategories.map((category, i) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              className="rounded-xl border border-zinc-800 bg-zinc-900/30 p-6"
            >
              <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4">
                {category.name}
              </h3>
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
