import type { Metadata } from "next";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { GallerySection } from "@/components/gallery-section";
import { PortfolioGallery } from "@/components/portfolio-gallery";
import { AboutSection } from "@/components/about-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { Footer } from "@/components/footer";
import { ProntaSection } from "@/components/pronta-section";
import { JsonLd } from "@/components/json-ld";
import {
  DEFAULT_DESCRIPTION,
  breadcrumbSchema,
  createMetadata,
  webPageSchema,
} from "@/lib/seo";

export const metadata: Metadata = createMetadata({
  title: "Trancista no Rio de Janeiro | Box Braids, Nagô e Cornrows",
  description: DEFAULT_DESCRIPTION,
  path: "/",
  keywords: [
    "trancista rio de janeiro",
    "hair braider rio de janeiro",
    "box braids rio de janeiro",
    "nagô rio de janeiro",
    "cornrows rio de janeiro",
    "trancista perto de mim",
  ],
});

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <JsonLd
        id="home-webpage-jsonld"
        data={webPageSchema({
          title: "Fernanda Talavera | Trancista no Rio de Janeiro",
          description: DEFAULT_DESCRIPTION,
          path: "/",
        })}
      />
      <JsonLd
        id="home-breadcrumb-jsonld"
        data={breadcrumbSchema([{ name: "Início", path: "/" }])}
      />
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
