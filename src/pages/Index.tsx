
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturedDrops from '@/components/FeaturedDrops';
import ShopByMood from '@/components/ShopByMood';
import InstagramGallery from '@/components/InstagramGallery';
import QualityShowcase from '@/components/QualityShowcase';
import OurStory from '@/components/OurStory';
import DeliveryReturns from '@/components/DeliveryReturns';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <HeroSection />
      <FeaturedDrops />
      <ShopByMood />
      <InstagramGallery />
      <QualityShowcase />
      <OurStory />
      <DeliveryReturns />
      <Footer />
    </div>
  );
};

export default Index;
