import { Hero } from "@/components/Hero";
import { FeatureCards } from "@/components/FeatureCards";
import { Services } from "@/components/Services";
import { PortfolioGallery } from "@/components/PortfolioGallery";

export default function Home() {
  return (
    <>
      <Hero />
      <FeatureCards />
      <Services />
      <PortfolioGallery />
    </>
  );
}
