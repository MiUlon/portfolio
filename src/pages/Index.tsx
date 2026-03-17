import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import SummarySection from "@/components/SummarySection";
import ExpertiseSection from "@/components/ExpertiseSection";
import ContactSection from "@/components/ContactSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroSection />
      <SummarySection />
      <ExpertiseSection />
      <ContactSection />
    </div>
  );
};

export default Index;
