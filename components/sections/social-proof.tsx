"use client";

import { Section } from "@/components/layout/section";
import { Card, CardContent } from "@/components/ui/card";
import { ScrollReveal } from "@/components/ui/scroll-reveal";
import Image from "next/image";

const testimonials = [
  {
    quote:
      "The Cultivate Assessment helped me see my business's unique strengths in a whole new light. Now I'm growing in a way that feels authentic to me.",
    name: "Sarah Chen",
    business: "Wellness Coach",
    image: "/testimonials/sarah.jpg",
  },
  {
    quote:
      "Finally, a framework that doesn't try to force my business into someone else's mold. The insights were truly transformative.",
    name: "Marcus Rodriguez",
    business: "Artisanal Baker",
    image: "/testimonials/marcus.jpg",
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
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
