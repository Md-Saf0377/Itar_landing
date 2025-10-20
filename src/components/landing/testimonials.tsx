
'use client';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import FadeInSection from "./fade-in-section";
import React from "react";

const testimonials = [
  {
    name: "Sarah J.",
    avatar: "SJ",
    image: "https://picsum.photos/100/100?random=1",
    imageHint: "woman portrait",
    quote: "The Radical Rose is absolutely divine. It's my new signature scent and I get compliments everywhere I go. The fragrance lasts all day without being overpowering.",
  },
  {
    name: "Michael B.",
    avatar: "MB",
    image: "https://picsum.photos/100/100?random=2",
    imageHint: "man portrait",
    quote: "I purchased the Vanilla Powder and was blown away. It’s warm, comforting, and has a unique complexity. The customer service was also exceptional. Highly recommended!",
  },
  {
    name: "Jessica L.",
    avatar: "JL",
    image: "https://picsum.photos/100/100?random=3",
    imageHint: "woman portrait",
    quote: "Crystal Saffron is a masterpiece. It's spicy, sophisticated, and perfect for special occasions. Kaab Fragrances has a customer for life in me. The quality is simply unmatched.",
  },
  {
    name: "Alex D.",
    avatar: "AD",
    image: "https://picsum.photos/100/100?random=4",
    imageHint: "person portrait",
    quote: "Oud Wood is pure luxury. The scent is rich, deep, and incredibly long-lasting. I feel like royalty whenever I wear it. I'll definitely be exploring more from the collection.",
  },
  {
    name: "Emily R.",
    avatar: "ER",
    image: "https://picsum.photos/100/100?random=5",
    imageHint: "woman smiling",
    quote: "I am in love with the Sunkissed Citrus. It's so fresh and uplifting, perfect for daytime wear. It's like a bottle of sunshine! I'm so glad I found this brand.",
  },
];

export default function TestimonialsSection() {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  )

  return (
    <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
      <FadeInSection>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                What Our Customers Say
              </h2>
              <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Hear from our satisfied customers and discover why they love our fragrances.
              </p>
            </div>
          </div>
          <Carousel
            plugins={[plugin.current]}
            className="mx-auto mt-12 w-full max-w-4xl"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <Card className="h-full overflow-hidden">
                      <CardContent className="flex h-full flex-col items-center justify-center p-6 text-center">
                        <Avatar className="mb-4 h-20 w-20">
                          <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                          <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                        </Avatar>
                        <p className="text-base italic text-muted-foreground">
                          &ldquo;{testimonial.quote}&rdquo;
                        </p>
                        <p className="mt-4 font-semibold text-foreground">
                          - {testimonial.name}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </FadeInSection>
    </section>
  );
}
