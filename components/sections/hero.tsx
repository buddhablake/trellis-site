"use client";

import { Container } from "@/components/layout/container"
import { OrganicPattern } from "@/components/ui/organic-pattern"
import { AssessmentDialog } from "@/components/forms/assessment-dialog"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-cream overflow-hidden">
      <OrganicPattern />
      <Container className="py-16 sm:py-24">
        <motion.div 
          className="max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="text-h1 font-heading font-semibold text-forest mb-6">
            Discover Your Natural Path to Growth
          </h1>
          <p className="text-xl mb-8 text-soil/80">
            Stop forcing someone else's business model. Start cultivating growth that feels authentically yours.
          </p>
          <AssessmentDialog className="bg-forest hover:bg-forest/90" />
        </motion.div>
      </Container>
    </section>
  )
}
