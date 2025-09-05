
'use client';

import { useParams } from 'next/navigation';
import { getPerfumeByName, Perfume } from '@/lib/perfumes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';

export default function PerfumePage() {
  const params = useParams();
  const [perfume, setPerfume] = useState<Perfume | null>(null);
  const { addToCart } = useCart();

  useEffect(() => {
    if (params.name) {
      const perfumeName = decodeURIComponent(params.name as string);
      const foundPerfume = getPerfumeByName(perfumeName);
      setPerfume(foundPerfume || null);
    }
  }, [params.name]);

  if (!perfume) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        Loading...
      </div>
    );
  }

  const { name, description, imageUrl, imageHint } = perfume;
  const mailtoLink = `mailto:contact@itar.com?subject=Order for ${encodeURIComponent(name)}&body=I would like to purchase ${encodeURIComponent(name)}. Please provide me with payment and shipping details.`;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 md:px-6 md:py-24">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="relative aspect-square">
              <Image
                src={imageUrl}
                alt={`Image of ${name}`}
                fill
                className="rounded-lg object-cover shadow-lg"
                sizes="(max-width: 768px) 100vw, 50vw"
                data-ai-hint={imageHint}
              />
            </div>
            <div className="flex flex-col justify-center space-y-6">
              <h1 className="font-headline text-4xl font-bold md:text-5xl">{name}</h1>
              <p className="text-lg text-muted-foreground">{description}</p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button
                  size="lg"
                  onClick={() => addToCart(perfume)}
                  className="border border-black/20 bg-white/20 text-foreground backdrop-blur-sm transition-colors hover:border-black/30 hover:bg-white/30"
                >
                  Add to Cart
                </Button>
                <a href={mailtoLink} className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border border-black/20 bg-white/20 text-foreground backdrop-blur-sm hover:bg-black hover:text-white active:bg-black active:text-white"
                  >
                    Buy Now
                  </Button>
                </a>
              </div>
              <Link href="/" className="mt-4 inline-block text-sm text-muted-foreground hover:underline">
                &larr; Back to shopping
              </Link>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
