"use client";

import { motion } from "framer-motion";
import { Mail, FileDown, ArrowUpRight } from "lucide-react";
import { GitHubIcon, LinkedInIcon } from "./icons/SocialIcons";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "./SectionHeading";
import { ButtonLink } from "./ui/button";

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
    value: "Connect on LinkedIn",
  },
  {
    icon: GitHubIcon,
    label: "GitHub",
    href: siteConfig.github,
    value: "View Projects",
  },
  {
    icon: FileDown,
    label: "Resume",
    href: siteConfig.resumeUrl,
    value: "Download PDF",
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-24 relative">
      <div className="absolute inset-0 bg-gradient-to-t from-blue-600/5 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Contact"
          subtitle="Let's connect and build something impactful"
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <div className="grid sm:grid-cols-2 gap-4">
            {contactLinks.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                target={link.label !== "Email" && link.label !== "Resume" ? "_blank" : undefined}
                rel={link.label !== "Email" && link.label !== "Resume" ? "noopener noreferrer" : undefined}
                download={link.label === "Resume" ? true : undefined}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group flex items-center gap-4 p-5 rounded-xl border border-zinc-800 bg-zinc-900/50 hover:border-blue-500/30 hover:bg-zinc-900 transition-all"
              >
                <div className="p-3 rounded-lg bg-blue-500/10 text-blue-400 group-hover:bg-blue-500/20 transition-colors">
                  <link.icon className="h-5 w-5" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-zinc-500">{link.label}</p>
                  <p className="text-zinc-200 font-medium">{link.value}</p>
                </div>
                <ArrowUpRight className="h-4 w-4 text-zinc-600 group-hover:text-blue-400 transition-colors" />
              </motion.a>
            ))}
          </div>

          <div className="mt-10 text-center">
            <ButtonLink variant="default" size="lg" href={`mailto:${siteConfig.email}`}>
              <Mail className="h-4 w-4" />
              Get in Touch
            </ButtonLink>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
