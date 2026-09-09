import { initialProducts } from '@/lib/data/products';
import { Hero } from '@/components/home/Hero';
import { ShopByNeed } from '@/components/home/ShopByNeed';
import { FeaturedPlants } from '@/components/home/FeaturedPlants';
import { ServicesSection } from '@/components/home/ServicesSection';
import { BalconyTransformation } from '@/components/home/BalconyTransformation';
import { PlantDoctorTeaser } from '@/components/home/PlantDoctorTeaser';
import { PlantCareEducation } from '@/components/home/PlantCareEducation';
import { WhyLeafLover } from '@/components/home/WhyLeafLover';
import { BusinessSection } from '@/components/home/BusinessSection';
import { Testimonials } from '@/components/home/Testimonials';
import { BrandVision } from '@/components/home/BrandVision';
import { FinalCTA } from '@/components/home/FinalCTA';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Hero />
      <ShopByNeed />
      <FeaturedPlants products={initialProducts} />
      <ServicesSection />
      <BalconyTransformation />
      <PlantDoctorTeaser />
      <PlantCareEducation />
      <WhyLeafLover />
      <BusinessSection />
      <Testimonials />
      <BrandVision />
      <FinalCTA />
    </div>
  );
}
