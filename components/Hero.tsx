"use client";

import { motion } from "framer-motion";
import {
  Mail,
  FileDown,
  ArrowDown,
} from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import { siteConfig } from "@/data/site";
import { heroTechIcons } from "@/data/skills";
import { ButtonLink } from "./ui/button";
import { Badge } from "./ui/badge";

const floatingVariants = {
  animate: (i: number) => ({
    y: [0, -15, 0],
    transition: {
      duration: 3 + i * 0.5,
      repeat: Infinity,
      ease: "easeInOut" as const,
    },
  }),
};

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      <div className="absolute inset-0 grid-pattern" />
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl animate-pulse-glow" />

      <div className="relative mx-auto max-w-6xl px-6 py-20 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-emerald-400 font-medium mb-4"
          >
            Hi, I&apos;m {siteConfig.name}
          </motion.p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
            <span className="gradient-text">{siteConfig.role}</span>
          </h1>

          <p className="text-lg text-zinc-400 leading-relaxed mb-8 max-w-lg">
            {siteConfig.tagline}
          </p>

          <div className="space-y-3 mb-8 text-sm text-zinc-400">
            <p>
              <span className="text-zinc-500">Currently:</span>{" "}
              <span className="text-zinc-200">
                Senior Machine Learning Engineer @ {siteConfig.currentCompany}
              </span>
            </p>
            <p>
              <span className="text-zinc-500">Previously:</span>{" "}
              <span className="text-zinc-200">{siteConfig.previousCompany}</span>
            </p>
            <p>
              <Badge variant="emerald" className="mt-1">
                {siteConfig.education}
              </Badge>
            </p>
          </div>

          <div className="mb-8">
            <p className="text-xs uppercase tracking-wider text-zinc-500 mb-3">
              Specializing in
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "Machine Learning",
                "Recommendation Systems",
                "Applied AI",
                "Revenue Optimization",
                "Scalable Data Pipelines",
              ].map((skill) => (
                <Badge key={skill} variant="outline">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-3">
            <ButtonLink variant="default" size="lg" href={siteConfig.resumeUrl} download>
              <FileDown className="h-4 w-4" />
              View Resume
            </ButtonLink>
            <ButtonLink
              variant="outline"
              size="lg"
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub
            </ButtonLink>
            <ButtonLink
              variant="outline"
              size="lg"
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn
            </ButtonLink>
            <ButtonLink variant="ghost" size="lg" href="#contact">
              <Mail className="h-4 w-4" />
              Contact
            </ButtonLink>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:flex items-center justify-center"
        >
          <div className="relative w-80 h-80">
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-600/20 to-emerald-600/20 blur-2xl" />
            <div className="relative w-full h-full rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-sm flex items-center justify-center glow-blue">
              <div className="text-center">
                <div className="w-24 h-24 mx-auto mb-4 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-3xl font-bold text-white">
                  RV
                </div>
                <p className="text-sm text-zinc-400">ML Engineer</p>
                <p className="text-xs text-zinc-500 mt-1">Production AI Systems</p>
              </div>
            </div>

            {heroTechIcons.map((tech, i) => {
              const angle = (i / heroTechIcons.length) * 2 * Math.PI - Math.PI / 2;
              const radius = 160;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={tech}
                  custom={i}
                  variants={floatingVariants}
                  animate="animate"
                  className="absolute"
                  style={{
                    left: `calc(50% + ${x}px - 40px)`,
                    top: `calc(50% + ${y}px - 16px)`,
                  }}
                >
                  <Badge variant="blue" className="shadow-lg whitespace-nowrap">
                    {tech}
                  </Badge>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-zinc-500 hover:text-zinc-300 transition-colors"
      >
        <ArrowDown className="h-5 w-5 animate-bounce" />
      </motion.a>
    </section>
  );
}
