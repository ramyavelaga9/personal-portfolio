"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, BarChart3, Clock, Rocket } from "lucide-react";
import { impactStats } from "@/data/site";
import { AnimatedCounter } from "./AnimatedCounter";
import { SectionHeading } from "./SectionHeading";

const icons = [DollarSign, BarChart3, TrendingUp, Clock, Rocket];

export function Impact() {
  return (
    <section id="impact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 via-transparent to-emerald-600/5" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Impact"
          subtitle="Measurable business outcomes from production ML"
        />

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {impactStats.map((stat, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center p-6 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/30 transition-colors"
              >
                <Icon className="h-6 w-6 text-blue-400 mx-auto mb-3" />
                <p className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                  <AnimatedCounter
                    value={stat.value}
                    prefix={stat.prefix}
                    suffix={stat.suffix}
                    decimals={stat.decimals}
                  />
                </p>
                <p className="text-xs sm:text-sm text-zinc-400">{stat.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
