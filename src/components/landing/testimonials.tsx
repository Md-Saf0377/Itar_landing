import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import FadeInSection from "./fade-in-section";

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
];

export default function TestimonialsSection() {
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
          <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
            {testimonials.map((testimonial) => (
              <Card key={testimonial.name} className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <Avatar>
                      <AvatarImage src={testimonial.image} alt={testimonial.name} data-ai-hint={testimonial.imageHint} />
                      <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <p className="text-lg italic text-muted-foreground">
                        &ldquo;{testimonial.quote}&rdquo;
                      </p>
                      <p className="mt-4 text-right font-semibold text-foreground">
                        - {testimonial.name}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </FadeInSection>
    </section>
  );
}
