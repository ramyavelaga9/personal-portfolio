"use client";

import { motion } from "framer-motion";
import { techStackIcons } from "@/data/skills";
import { SectionHeading } from "./SectionHeading";

export function TechStack() {
  return (
    <section id="tech-stack" className="py-24 relative bg-zinc-950/50 overflow-hidden">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Tech Stack"
          subtitle="Tools and technologies powering production systems"
        />

        <div className="flex flex-wrap justify-center gap-6">
          {techStackIcons.map((tech, i) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.4 }}
              whileHover={{ scale: 1.1, y: -4 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-zinc-600 transition-colors cursor-default min-w-[100px]"
            >
              <div
                className="w-12 h-12 rounded-lg flex items-center justify-center text-lg font-bold"
                style={{
                  backgroundColor: `${tech.color}20`,
                  color: tech.color,
                }}
              >
                {tech.name.slice(0, 2).toUpperCase()}
              </div>
              <span className="text-xs text-zinc-400 font-medium">{tech.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
