import { Hero } from "@/components/sections/hero"
import { HowItWorks } from "@/components/sections/how-it-works"
import { ValueProposition } from "@/components/sections/value-proposition"
import { SocialProof } from "@/components/sections/social-proof"
import { FinalCTA } from "@/components/sections/final-cta"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <HowItWorks />
      <ValueProposition />
      <SocialProof />
      <FinalCTA />
    </main>
  )
}

export const metadata = {
  title: 'Trellis | Cultivate Your Business Growth',
  description: 'Discover your natural path to business growth with Trellis. Our Cultivate Assessment helps you understand your unique strengths and authentic market position.',
}
