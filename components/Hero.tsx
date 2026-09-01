"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, FileDown, Zap, TrendingDown, Users2 } from "lucide-react";
import { siteConfig } from "@/data/site";
import { ButtonLink } from "./ui/button";
import { AnimatedCounter } from "./AnimatedCounter";

const panelStats = [
  {
    icon: TrendingDown,
    value: 16,
    prefix: "$",
    suffix: "M",
    label: "Ad spend recovered annualized",
  },
  {
    icon: Zap,
    value: 91,
    prefix: "",
    suffix: "%",
    label: "Less QPS debugging time",
  },
  {
    icon: Users2,
    value: 1000,
    prefix: "",
    suffix: "+",
    label: "Demand partners kept in pacing",
  },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/3 -left-40 w-[28rem] h-[28rem] bg-accent/[0.07] rounded-full blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-6 py-16 grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm font-medium text-accent mb-5">
            {siteConfig.role} &middot; {siteConfig.currentCompany}
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-[3.4rem] font-semibold tracking-tight leading-[1.1] text-foreground mb-6 text-balance">
            I build the ranking systems that decide which ad wins,{" "}
            <span className="text-accent">in milliseconds.</span>
          </h1>

          <p className="text-lg text-muted-foreground leading-relaxed mb-10 max-w-lg">
            Five years owning ML systems end to end, from modeling to
            production, partnering closely with engineering, product, and
            customers.
          </p>

          <div className="flex flex-wrap gap-3">
            <ButtonLink variant="default" size="lg" href={siteConfig.resumeUrl} download>
              <FileDown className="h-4 w-4" />
              Download Resume
            </ButtonLink>
            <ButtonLink variant="outline" size="lg" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" />
              Email Me
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="relative"
        >
          <div className="surface relative overflow-hidden bg-card/60 backdrop-blur-sm p-6 sm:p-7">
            <div
              className="absolute -top-24 -right-24 w-64 h-64 rounded-full pointer-events-none"
              style={{
                background:
                  "radial-gradient(circle, color-mix(in srgb, var(--accent) 18%, transparent), transparent 70%)",
              }}
            />
            <p className="relative text-sm text-muted-foreground mb-6">Selected impact</p>
            <div className="relative space-y-5">
              {panelStats.map((stat, i) => (
                <div
                  key={stat.label}
                  className={`flex items-center gap-4 ${
                    i > 0 ? "pt-5 border-t border-border" : ""
                  }`}
                >
                  <div className="shrink-0 h-10 w-10 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                    <stat.icon className="h-[18px] w-[18px]" />
                  </div>
                  <div>
                    <p className="text-2xl font-semibold tabular text-foreground">
                      <AnimatedCounter
                        value={stat.value}
                        prefix={stat.prefix}
                        suffix={stat.suffix}
                      />
                    </p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <p className="mt-3 text-xs text-subtle-foreground text-right pr-1">
            Figures from production work at PubMatic, in full detail below.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
