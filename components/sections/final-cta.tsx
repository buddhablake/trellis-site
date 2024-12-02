"use client";

import { Section } from "@/components/layout/section";
import { AssessmentDialog } from "@/components/forms/assessment-dialog";
import { ScrollReveal } from "@/components/ui/scroll-reveal";

export function FinalCTA() {
  return (
    <Section className="bg-forest text-cream relative">
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <ScrollReveal>
          <h2 className="text-h2 font-heading font-semibold text-cream mb-6">
            Let&apos;s grow together
          </h2>
          <p className="text-lg text-cream/80 mb-8">
            Take the first step towards authentic business growth with our
            Cultivate Assessment. It&apos;s free, takes just 15-20 minutes, and
            could transform how you see your business.
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.2}>
          <AssessmentDialog
            className="bg-cream text-forest hover:bg-cream/90 transition-colors"
            variant="outline"
          />
        </ScrollReveal>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(156,175,136,0.1)_0%,transparent_70%)]" />
    </Section>
  );
}
