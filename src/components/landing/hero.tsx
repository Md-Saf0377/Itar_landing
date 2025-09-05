import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] w-full">
      <Image
        src="https://picsum.photos/1920/1080"
        alt="Elegant perfume display"
        fill
        className="hidden object-cover md:block"
        data-ai-hint="perfume display"
        priority
      />
      <Image
        src="https://picsum.photos/600/800"
        alt="Flowers"
        fill
        className="block object-cover md:hidden"
        data-ai-hint="flowers"
        priority
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white">
        <div className="space-y-4">
          <h1 className="font-headline text-4xl font-bold tracking-tighter sm:text-6xl md:text-7xl">
            Itar
          </h1>
          <p className="max-w-[700px] text-lg text-gray-200 md:text-xl">
            Crafting memories, one scent at a time. Discover your signature fragrance with our exclusive collection.
          </p>
        </div>
        <Link href="#collection" className="mt-8" prefetch={false}>
          <Button
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90"
          >
            Explore Collection
          </Button>
        </Link>
      </div>
    </section>
  );
}
