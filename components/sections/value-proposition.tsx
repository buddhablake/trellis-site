"use client";

import { Section } from "@/components/layout/section";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

const benefits = [
  "See your natural strengths clearly",
  "Understand your authentic market position",
  "Find growth opportunities that feel right",
  "Build confidence in your approach",
] as const;

export function ValueProposition() {
  return (
    <Section className="bg-cream/50 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-sage/5 to-transparent" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 relative">
        <ScrollReveal>
          <div>
            <h2 className="text-h2 font-heading font-semibold text-forest mb-6">
              Cultivate Your Unique Value
            </h2>
            <p className="text-lg text-soil/80 mb-8">
              Within your business lies unique potential waiting to be
              cultivated. Stop struggling to fit someone else's model of
              success. Start growing in ways that feel natural and right for
              you.
            </p>
          </div>
        </ScrollReveal>
        <div className="space-y-6">
          {benefits.map((benefit, index) => (
            <ScrollReveal key={benefit} delay={index * 0.1}>
              <div className="flex items-start gap-4">
                <div className="w-6 h-6 rounded-full bg-sage flex items-center justify-center mt-1">
                  <svg
                    className="w-4 h-4 text-cream"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <p className="text-lg text-soil/80">{benefit}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
