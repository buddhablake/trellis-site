"use client";

import { Section } from "@/components/layout/section"
import { ScrollReveal } from "@/components/ui/scroll-reveal"

const steps = [
  {
    number: "01",
    heading: "Share Your Story",
    text: "Through our thoughtfully crafted assessment, tell us about your business journey, challenges, and vision. Take 15-20 minutes to reflect on what makes your business unique.",
  },
  {
    number: "02",
    heading: "Gain Clear Insight",
    text: "Receive your personalized Cultivate Report, revealing patterns and opportunities you might not see. Understand your natural strengths and authentic market position.",
  },
  {
    number: "03",
    heading: "Find Your Path",
    text: "Get specific guidance for growing your business in ways that feel right to you. No cookie-cutter solutions - just clear direction aligned with your values.",
  },
]

export function HowItWorks() {
  return (
    <Section className="bg-cream">
      <ScrollReveal>
        <h2 className="text-h2 font-heading font-semibold text-forest text-center mb-16">
          A Simple Process for Clarity
        </h2>
      </ScrollReveal>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
        {steps.map((step, index) => (
          <ScrollReveal key={step.number} delay={index * 0.2}>
            <div className="relative">
              <div className="mb-4 text-2xl font-heading font-semibold text-earth">
                {step.number}
              </div>
              <h3 className="text-h3 font-heading font-semibold text-forest mb-4">
                {step.heading}
              </h3>
              <p className="text-soil/80">{step.text}</p>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </Section>
  )
}
