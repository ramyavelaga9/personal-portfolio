"use client";

import { motion } from "framer-motion";
import { Award, GraduationCap } from "lucide-react";
import { awards } from "@/data/awards";
import { certifications } from "@/data/certifications";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";

export function AwardsAndCerts() {
  return (
    <section id="awards" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Awards & Certifications"
          subtitle="Academic excellence and continuous learning"
        />

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-emerald-400 mb-4 flex items-center gap-2">
              <Award className="h-4 w-4" />
              Awards
            </h3>
            <div className="space-y-4">
              {awards.map((award, i) => (
                <motion.div
                  key={award.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                >
                  <Card className="gradient-border">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <span className="text-2xl">🏅</span>
                        {award.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-blue-400 font-medium">{award.organization}</p>
                      <p className="text-sm text-zinc-400 mt-1">{award.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-blue-400 mb-4 flex items-center gap-2">
              <GraduationCap className="h-4 w-4" />
              Certifications
            </h3>
            <div className="grid grid-cols-2 gap-3">
              {certifications.map((cert, i) => (
                <motion.div
                  key={cert.id}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Card className="p-4 h-full">
                    <p className="font-medium text-zinc-200 text-sm">{cert.title}</p>
                    <Badge variant="outline" className="mt-2 text-xs">
                      {cert.provider}
                    </Badge>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
