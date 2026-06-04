import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { ProntaSection } from "@/components/pronta-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <GallerySection />
      <PortfolioGallery />
      <AboutSection />
      <TestimonialsSection />
      <ProntaSection />
      <Footer />
    </main>
  );
}
