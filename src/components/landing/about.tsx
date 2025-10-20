import Image from 'next/image';
import { Leaf, Droplets, Flower } from 'lucide-react';
import FadeInSection from './fade-in-section';

const ingredients = [
  {
    name: 'Rose',
    icon: Flower,
    image: 'https://picsum.photos/seed/rose/400/400',
    hint: 'rose flower',
    delay: 'delay-100'
  },
  {
    name: 'Saffron',
    icon: Leaf,
    image: 'https://picsum.photos/seed/saffron/400/400',
    hint: 'saffron spice',
    delay: 'delay-300'
  },
  {
    name: 'Oud',
    icon: Droplets,
    image: 'https://picsum.photos/seed/oud/400/400',
    hint: 'oud wood',
    delay: 'delay-500'
  }
]

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <FadeInSection>
              <div className="space-y-2">
                <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                  Our Story
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Kaab Fragrances was born from a passion for the art of perfumery. Our journey began with a simple desire to capture the essence of memories and emotions in a bottle. We travel the world to source the finest ingredients, blending tradition with modern innovation to create unique and captivating fragrances that tell a story.
                </p>
              </div>
            </FadeInSection>
          </div>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
             {ingredients.slice(0, 2).map((ingredient, index) => (
              <FadeInSection key={ingredient.name} className={`transition-all duration-700 ${ingredient.delay}`}>
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={ingredient.image}
                    alt={ingredient.name}
                    fill
                    data-ai-hint={ingredient.hint}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{ingredient.name}</h3>
                  </div>
                </div>
              </FadeInSection>
            ))}
             <FadeInSection className={`transition-all duration-700 ${ingredients[2].delay} col-span-2 sm:col-span-1`}>
                <div className="relative aspect-square overflow-hidden rounded-xl shadow-lg">
                  <Image
                    src={ingredients[2].image}
                    alt={ingredients[2].name}
                    fill
                    data-ai-hint={ingredients[2].hint}
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 text-white">
                    <h3 className="text-lg font-semibold">{ingredients[2].name}</h3>
                  </div>
                </div>
              </FadeInSection>
          </div>
        </div>
      </div>
    </section>
  );
}
