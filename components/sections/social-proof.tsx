"use client";

import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "Starting my own salon felt overwhelming until I worked with Trellis. They helped me discover my unique value in the market and translate it into a clear brand strategy. What sets them apart is how they truly understand small businesses and help you grow in ways that feel authentic. I now have complete confidence in my business's direction and value.",
    name: "Nic Graham",
    business: "Owner, Nics & Cuts",
    image: "/testimonials/nic_graham.jpeg",
  },
] as const;

export function SocialProof() {
  return (
    <Section>
      <ScrollReveal>
        <h2 className="text-h2 font-heading font-semibold text-forest text-center mb-16">
          Growing Their Own Way
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 gap-8">
        {testimonials.map((testimonial, index) => (
          <ScrollReveal key={testimonial.name} delay={index * 0.2}>
            <Card className="border-sage/20 hover:border-sage/40 transition-colors">
              <CardContent className="pt-6">
                <div className="flex items-start gap-4">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden bg-sage/20 flex-shrink-0">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={48}
                      height={48}
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <blockquote className="text-soil/80 mb-4 italic">
                      &quot;{testimonial.quote}&quot;
                    </blockquote>
                    <cite className="not-italic">
                      <div className="font-heading font-semibold text-forest">
                        {testimonial.name}
                      </div>
                      <div className="text-soil/60 text-sm">
                        {testimonial.business}
                      </div>
                    </cite>
                  </div>
                </div>
              </CardContent>
            </Card>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  );
}
