import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import BenefitsSection from "@/components/BenefitsSection";
import OfferingsSection from "@/components/OfferingsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <ContactForm />
        <BenefitsSection />
        <OfferingsSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
