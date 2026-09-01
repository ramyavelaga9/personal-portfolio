"use client";

import { motion, useReducedMotion } from "framer-motion";
import { TrendingUp, DollarSign, Gauge, Timer, Users2, Briefcase } from "lucide-react";
import { impactStats } from "@/data/site";
import { AnimatedCounter } from "./AnimatedCounter";
import { SectionHeading } from "./SectionHeading";

const icons = [DollarSign, TrendingUp, Gauge, Timer, Users2, Briefcase];

export function Impact() {
  const reduce = useReducedMotion();
  const [hero, ...rest] = impactStats;
  const HeroIcon = icons[0];

  return (
    <section id="impact" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Impact, in numbers"
          subtitle="Every figure here traces back to a shipped model and a measured outcome."
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-2xl border border-border bg-card p-8 mb-6 flex flex-col sm:flex-row sm:items-center gap-6"
        >
          <div className="h-14 w-14 rounded-xl bg-accent/10 text-accent flex items-center justify-center shrink-0">
            <HeroIcon className="h-6 w-6" />
          </div>
          <div>
            <p className="text-5xl sm:text-6xl font-semibold tabular text-foreground">
              <AnimatedCounter
                value={hero.value}
                prefix={hero.prefix}
                suffix={hero.suffix}
                decimals={hero.decimals}
              />
            </p>
            <p className="mt-2 text-lg text-foreground/80">{hero.label}</p>
            <p className="text-sm text-muted-foreground">{hero.detail}</p>
          </div>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-3">
          {rest.map((stat, i) => {
            const Icon = icons[i + 1];
            return (
              <motion.div
                key={stat.label}
                initial={reduce ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                className="rounded-2xl border border-border bg-card p-6"
              >
                <Icon className="h-5 w-5 text-accent mb-4" />
                <p className="text-3xl font-semibold tabular text-foreground">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="mt-1 text-sm text-foreground/80">{stat.label}</p>
                <p className="mt-1 text-xs text-subtle-foreground leading-relaxed">{stat.detail}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
