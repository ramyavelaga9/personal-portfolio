"use client";

import { motion, useReducedMotion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, Mail } from "lucide-react";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const facts = [
  { icon: Briefcase, label: "Currently", value: `Senior ML Engineer, ${siteConfig.currentCompany}` },
  { icon: Briefcase, label: "Previously", value: siteConfig.previousCompany },
  { icon: GraduationCap, label: "Education", value: siteConfig.education },
  { icon: MapPin, label: "Based in", value: siteConfig.location },
];

export function About() {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          align="left"
          title="About"
          subtitle="Production ML in real-time systems, from research to revenue."
        />

        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-8 items-start">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-5 text-lg text-foreground/80 leading-relaxed max-w-[65ch]"
          >
            <p>
              I design, build, and scale the ranking, targeting, and
              optimization models that run PubMatic&apos;s real-time ad
              auctions. That means the production LightGBM model that scores
              and paces bids under live auction constraints, and the Polars
              and PySpark pipelines that keep it fast enough to matter.
            </p>
            <p>
              I have prototyped PyTorch embedding models to explore deep
              learning upgrades to that system, and built AutoTune, a fully
              autonomous agentic system that classifies QPS health across 40+
              metrics and cut manual debugging time 91%. Across every role, I
              own the model end to end: design, validation, rollout, and the
              cross-functional reviews that get it shipped.
            </p>
            <p>
              I graduated top of my class from IIT Tirupati with the
              Institute Gold Medal in Computer Science, and I still measure
              my work the same way I did there: by the outcome, not the
              elegance of the approach.
            </p>
          </motion.div>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="rounded-2xl border border-border bg-card p-6 space-y-5"
          >
            {facts.map((fact, i) => (
              <div
                key={fact.label}
                className={`flex items-start gap-3 ${i > 0 ? "pt-5 border-t border-border" : ""}`}
              >
                <fact.icon className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs text-muted-foreground">{fact.label}</p>
                  <p className="text-sm text-foreground font-medium">{fact.value}</p>
                </div>
              </div>
            ))}
            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-2 pt-5 border-t border-border text-sm font-medium text-accent hover:brightness-110 transition"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.email}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
