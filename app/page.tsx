import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { QuickstartSection } from "@/components/quickstart-section"
import { PoliciesSection } from "@/components/policies-section"
import { FooterSection } from "@/components/footer-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <FeaturesSection />
      <QuickstartSection />
      <PoliciesSection />
      <FooterSection />
    </main>
  )
}
