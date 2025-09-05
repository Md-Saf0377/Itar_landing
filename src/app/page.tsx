import AboutSection from '@/components/landing/about';
import CollectionSection from '@/components/landing/collection';
import ContactSection from '@/components/landing/contact';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <CollectionSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
