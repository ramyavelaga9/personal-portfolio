"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { SectionHeading } from "./SectionHeading";

const paragraphs = [
  "I am a Machine Learning Engineer with experience building production AI systems across AdTech and Wellness domains. I enjoy translating research into scalable products that create measurable business impact.",
  "At PubMatic, I work on optimization algorithms and machine learning systems that improve marketplace efficiency and generate millions of dollars in additional annual revenue.",
  "I graduated from IIT Tirupati with a Gold Medal in Computer Science.",
];

export function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="About Me"
          subtitle="Building AI that delivers measurable business value"
        />

        <div className="max-w-3xl mx-auto space-y-6">
          {paragraphs.map((text, i) => (
            <motion.blockquote
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.5 }}
              className="relative pl-6 border-l-2 border-blue-500/30"
            >
              {i === 0 && (
                <Quote className="absolute -left-3 -top-1 h-5 w-5 text-blue-500/50 bg-background" />
              )}
              <p className="text-zinc-300 leading-relaxed text-lg">{text}</p>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
