"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Mail, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";

const contactLinks = [
  {
    icon: Mail,
    label: "Email",
    href: `mailto:${siteConfig.email}`,
    value: siteConfig.email,
  },
  {
    icon: LinkedInIcon,
    label: "LinkedIn",
    href: siteConfig.linkedin,
    value: "linkedin.com/in/ramyavelaga",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: siteConfig.github,
    value: "github.com/ramyavelaga9",
  },
];

export function Contact() {
  const reduce = useReducedMotion();
  return (
    <section id="contact" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Get in touch"
          subtitle={`Based in ${siteConfig.location}. Open to conversations about ranking, targeting, and applied ML roles.`}
        />

        <motion.div
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto grid sm:grid-cols-3 gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.label !== "Email" ? "_blank" : undefined}
              rel={link.label !== "Email" ? "noopener noreferrer" : undefined}
              className="group flex flex-col gap-3 p-5 rounded-2xl border border-border bg-card hover:border-border-strong transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="p-2.5 rounded-lg bg-accent/10 text-accent">
                  <link.icon className="h-4 w-4" />
                </div>
                <ArrowUpRight className="h-4 w-4 text-subtle-foreground group-hover:text-accent transition-colors" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground">{link.label}</p>
                <p className="text-sm text-foreground font-medium break-all">{link.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
