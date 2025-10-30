
import AboutSection from '@/components/landing/about';
import BestsellerSection from '@/components/landing/bestseller';
import CategoriesSection from '@/components/landing/categories';
import CollectionSection from '@/components/landing/collection';
import ContactSection from '@/components/landing/contact';
import FindYourScent from '@/components/landing/find-your-scent';
import Footer from '@/components/landing/footer';
import Header from '@/components/landing/header';
import HeroSection from '@/components/landing/hero';
import TestimonialsSection from '@/components/landing/testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | Kaab Fragrances',
    default: 'Kaab Fragrances - Crafting Memories, One Scent at a Time',
  },
  description: 'Discover the essence of elegance with Kaab Fragrances. Explore our exclusive collection of unique and captivating fragrances crafted with the finest ingredients.',
  keywords: ['perfume', 'fragrance', 'itar', 'oud', 'luxury perfume', 'Kaab Fragrances'],
  openGraph: {
    title: 'Kaab Fragrances',
    description: 'Crafting memories, one scent at a time. Discover your signature fragrance with our exclusive collection.',
    images: [{
      url: 'https://picsum.photos/1200/630',
      width: 1200,
      height: 630,
      alt: 'Kaab Fragrances Collection',
    }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kaab Fragrances',
    description: 'Discover the essence of elegance with Kaab Fragrances.',
    images: ['https://picsum.photos/1200/630'],
  },
};


export default function Home() {
  return (
    <div id="home" className="flex min-h-screen flex-col overflow-hidden">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <AboutSection />
        <BestsellerSection />
        <CategoriesSection />
        <FindYourScent />
        <CollectionSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
