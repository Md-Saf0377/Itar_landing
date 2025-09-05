"use client";

import Image from 'next/image';
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
import Link from 'next/link';

export type Perfume = {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

type PerfumeCardProps = {
  perfume: Perfume;
};

export default function PerfumeCard({ perfume }: PerfumeCardProps) {
  const { name, description, imageUrl, imageHint } = perfume;
  const { addToCart } = useCart();

  return (
    <Card className="flex h-full transform flex-col overflow-hidden rounded-lg shadow-lg transition-transform duration-300 hover:scale-105">
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
      </CardContent>
      <CardFooter className="flex gap-2 p-6 pt-0">
          <Button
            onClick={() => addToCart(perfume)}
            className="w-full border border-black/20 bg-white/20 text-foreground backdrop-blur-sm transition-colors hover:border-black/30 hover:bg-white/30"
          >
            Add to Cart
          </Button>
          <Link href="/checkout" passHref className="w-full">
            <Button
                variant="outline"
                className="w-full border border-black/20 bg-white/20 text-foreground backdrop-blur-sm transition-colors hover:border-black/30 hover:bg-white/30"
            >
                Buy Now
            </Button>
          </Link>
      </CardFooter>
    </Card>
  );
}
