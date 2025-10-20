
"use client";

import Image from 'next/image';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useCart } from '@/context/cart-context';
import type { Perfume } from '@/lib/perfumes';
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type PerfumeCardProps = {
  perfume: Perfume;
};

const sizes = [
  { size: 3, label: 'Travel Size' },
  { size: 6, label: 'Regular Size' },
  { size: 12, label: 'Full Size' },
];

export default function PerfumeCard({ perfume }: PerfumeCardProps) {
  const { name, description, imageUrl, imageHint } = perfume;
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState<number>(sizes[0].size);

  const mailtoLink = `mailto:contact@kaabfragrances.com?subject=Order for ${encodeURIComponent(name)} (${selectedSize}ml)&body=I would like to purchase ${encodeURIComponent(name)} (${selectedSize}ml). Please provide me with payment and shipping details.`;

  const handleSizeClick = (e: React.MouseEvent, size: number) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedSize(size);
  };

  return (
    <TooltipProvider>
      <Link
        href={`/perfume/${encodeURIComponent(name)}`}
        className="flex h-full w-full">
          <Card className="flex h-full w-full transform flex-col overflow-hidden rounded-lg bg-card shadow-lg transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-2xl">
            <CardHeader className="p-0">
              <div className="relative h-64 w-full">
                <Image
                  src={imageUrl}
                  alt={`Image of ${name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  data-ai-hint={imageHint}
                />
              </div>
            </CardHeader>
            <CardContent className="flex-1 p-6">
              <CardTitle className="font-headline text-2xl">{name}</CardTitle>
              <CardDescription className="mt-2">{description}</CardDescription>
              <div className="mt-4">
                <span className="text-sm font-medium text-muted-foreground">Size:</span>
                <div className="mt-2 flex justify-center gap-2">
                  {sizes.map(({ size, label }) => (
                     <Tooltip key={size}>
                        <TooltipTrigger asChild>
                          <Button
                            variant="outline"
                            size="sm"
                            onClick={(e) => handleSizeClick(e, size)}
                            className={cn(
                              'border border-black/20 bg-white/20 text-foreground backdrop-blur-sm transition-all duration-300 ease-in-out dark:border-white/20 dark:bg-black/20',
                              selectedSize === size
                                ? 'bg-black text-white dark:bg-white dark:text-black'
                                : 'hover:bg-black/10 dark:hover:bg-white/10'
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
            </CardContent>
            <CardFooter className="flex flex-col items-center gap-2 p-6 pt-0">
                <Button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    addToCart({ ...perfume, size: selectedSize });
                  }}
                  className="w-full border border-black/20 bg-white/20 text-foreground backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-black hover:text-white hover:scale-105 dark:border-white/20 dark:bg-black/20 dark:hover:bg-white dark:hover:text-black"
                >
                  Add to Cart
                </Button>
                <Button
                    variant="outline"
                    className="w-full border border-black/20 bg-white/20 text-foreground backdrop-blur-sm transition-all duration-300 ease-in-out hover:bg-black hover:text-white active:bg-black active:text-white hover:scale-105 dark:border-white/20 dark:bg-black/20 dark:hover:bg-white dark:hover:text-black dark:active:bg-white dark:active:text-black"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      window.location.href = mailtoLink;
                    }}
                >
                    Buy Now
                </Button>
            </CardFooter>
          </Card>
      </Link>
    </TooltipProvider>
  );
}
