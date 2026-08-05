"use client";

import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { testimonials } from "@/data/testimonials";
import { SectionHeading } from "./SectionHeading";
import { Card, CardContent } from "./ui/card";

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 relative">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          title="Testimonials"
          subtitle="What colleagues say about working with me"
        />

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              <Card className="h-full p-6">
                <Quote className="h-8 w-8 text-blue-500/30 mb-4" />
                <CardContent className="p-0">
                  <p className="text-zinc-300 leading-relaxed mb-4 italic">
                    &ldquo;{testimonial.content}&rdquo;
                  </p>
                  <div>
                    <p className="font-medium text-zinc-100">{testimonial.name}</p>
                    <p className="text-sm text-zinc-500">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
