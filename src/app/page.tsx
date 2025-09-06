
import AboutSection from '@/components/landing/about';
import BestsellerSection from '@/components/landing/bestseller';
import CategoriesSection from '@/components/landing/categories';
import CollectionSection from '@/components/landing/collection';
import ContactSection from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero';
import TestimonialsSection from '@/components/landing/testimonials';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <BestsellerSection />
        <CategoriesSection />
        <CollectionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
