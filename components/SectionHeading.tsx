"use client";

import { motion, useReducedMotion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  align?: "center" | "left";
}

export function SectionHeading({ title, subtitle, align = "center" }: SectionHeadingProps) {
  const reduce = useReducedMotion();
  const centered = align === "center";
  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5 }}
      className={`mb-12 ${centered ? "text-center mx-auto" : ""} max-w-2xl`}
    >
      <span
        className={`block h-[3px] w-8 rounded-full bg-accent mb-5 ${centered ? "mx-auto" : ""}`}
      />
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl text-foreground">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-3 text-muted-foreground leading-relaxed">{subtitle}</p>
      )}
    </motion.div>
  );
}
