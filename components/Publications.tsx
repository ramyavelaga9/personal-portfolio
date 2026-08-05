"use client";

import { motion } from "framer-motion";
import { ExternalLink, BookOpen } from "lucide-react";
import { publications } from "@/data/publications";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function Publications() {
  return (
    <section id="publications" className="py-24 relative bg-zinc-950/50">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Publications"
          subtitle="Research contributions and technical papers"
        />

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {publications.map((pub, i) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="h-full">
                <CardHeader>
                  <div className="flex items-start justify-between gap-2">
                    <BookOpen className="h-5 w-5 text-blue-400 shrink-0 mt-0.5" />
                    <Badge variant="emerald">{pub.year}</Badge>
                  </div>
                  <CardTitle className="mt-3">{pub.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-zinc-400 mb-3">{pub.venue}</p>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      View Paper
                      <ExternalLink className="h-3 w-3" />
                    </a>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
