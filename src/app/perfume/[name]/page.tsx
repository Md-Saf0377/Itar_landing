
'use client';

import { useParams } from 'next/navigation';
import { getPerfumeByName, Perfume, perfumes } from '@/lib/perfumes';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@/components/landing/header';
import Footer from '@/components/landing/footer';
import { cn } from '@/lib/utils';
import PerfumeCard from '@/components/landing/perfume-card';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import FadeInSection from '@/components/landing/fade-in-section';

const sizes = [
  { size: 3, label: 'Travel Size' },
  { size: 6, label: 'Regular Size' },
  { size: 12, label: 'Full Size' },
];

export default function PerfumePage() {
  const params = useParams();
  const [perfume, setPerfume] = useState<Perfume | null>(null);
  const [recommendedPerfumes, setRecommendedPerfumes] = useState<Perfume[]>([]);
  const [selectedSize, setSelectedSize] = useState<number>(sizes[0].size);
  const { addToCart } = useCart();

  useEffect(() => {
    if (params.name) {
      const perfumeName = decodeURIComponent(params.name as string);
      const foundPerfume = getPerfumeByName(perfumeName);
      setPerfume(foundPerfume || null);

      if (foundPerfume) {
        document.title = `${foundPerfume.name} | Kaab Fragrances`;
        const otherPerfumes = perfumes
          .filter((p) => p.name !== foundPerfume.name)
          .sort(() => 0.5 - Math.random())
          .slice(0, 4);
        setRecommendedPerfumes(otherPerfumes);
      }
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
  const mailtoLink = `mailto:contact@kaabfragrances.com?subject=Order for ${encodeURIComponent(name)} (${selectedSize}ml)&body=I would like to purchase ${encodeURIComponent(name)} (${selectedSize}ml). Please provide me with payment and shipping details.`;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <TooltipProvider>
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
                  priority
                />
              </div>
              <div className="flex flex-col justify-center space-y-6">
                <h1 className="font-headline text-4xl font-bold md:text-5xl">{name}</h1>
                <p className="text-lg text-muted-foreground">{description}</p>
                 <div className="mt-4">
                  <span className="text-sm font-medium text-muted-foreground">Size:</span>
                  <div className="mt-2 flex justify-center gap-2 md:justify-start">
                    {sizes.map(({ size, label }) => (
                       <Tooltip key={size}>
                          <TooltipTrigger asChild>
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setSelectedSize(size)}
                               className={cn(
                                'border-input bg-transparent text-foreground backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-accent hover:text-accent-foreground',
                                selectedSize === size && 'bg-primary text-primary-foreground hover:bg-primary/90'
                              )}
                            >
                              {size}ml
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{label}</p>
                          </TooltipContent>
                        </Tooltip>
                    ))}
                  </div>
                </div>
                <div className="flex flex-col gap-4 sm:flex-row">
                  <Button
                    size="lg"
                    onClick={() => addToCart({ ...perfume, size: selectedSize })}
                  >
                    Add to Cart
                  </Button>
                  <a href={mailtoLink} className="w-full sm:w-auto">
                    <Button
                      size="lg"
                      variant="secondary"
                      className="w-full"
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
        </TooltipProvider>

        <section className="w-full bg-secondary py-12 md:py-24 lg:py-32">
          <FadeInSection>
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="mb-12 text-center font-headline text-3xl font-bold tracking-tighter sm:text-4xl">
                We Also Recommend
              </h2>
              <div className="mx-auto grid grid-cols-2 gap-8 lg:grid-cols-4">
                {recommendedPerfumes.map((p) => (
                  <PerfumeCard key={p.name} perfume={p} />
                ))}
              </div>
            </div>
          </FadeInSection>
        </section>

      </main>
      <Footer />
    </div>
  );
}
