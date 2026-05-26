import { AudienceSection } from "@/components/AudienceSection";
import { BeforeAfterSection } from "@/components/BeforeAfterSection";
import { CaseOverview } from "@/components/CaseOverview";
import { DemoContactSection } from "@/components/DemoContactSection";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProblemSection } from "@/components/ProblemSection";
import { ProcessSection } from "@/components/ProcessSection";
import { ProductLineSection } from "@/components/ProductLineSection";
import { SolutionSection } from "@/components/SolutionSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <SolutionSection />
        <ProductLineSection />
        <AudienceSection />
        <ProcessSection />
        <BeforeAfterSection />
        <CaseOverview compact />
        <DemoContactSection />
      </main>
      <Footer />
    </>
  );
}
