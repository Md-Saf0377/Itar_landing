import PerfumeCard, { type Perfume } from '@/components/landing/perfume-card';

const perfumes: Perfume[] = [
  {
    name: 'Midnight Bloom',
    description: 'A mysterious blend of jasmine, tuberose, and dark oud.',
    imageUrl: 'https://picsum.photos/400/500?random=1',
    imageHint: 'perfume bottle',
  },
  {
    name: 'Sunkissed Citrus',
    description: 'A vibrant burst of Italian lemon, bergamot, and neroli.',
    imageUrl: 'https://picsum.photos/400/500?random=2',
    imageHint: 'perfume bottle',
  },
  {
    name: 'Velvet Rose',
    description: 'An elegant and timeless scent of Bulgarian rose and soft musk.',
    imageUrl: 'https://picsum.photos/400/500?random=3',
    imageHint: 'perfume bottle',
  },
  {
    name: 'Amber Itar',
    description: 'A rich and warm traditional itar with notes of amber and spice.',
    imageUrl: 'https://picsum.photos/400/500?random=12',
    imageHint: 'itar bottle',
  },
];

export default function CollectionSection() {
  return (
    <section id="collection" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
              Explore Our Collection
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Each fragrance is a masterpiece, crafted with the finest ingredients to evoke emotions and create lasting memories.
            </p>
          </div>
        </div>
        <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
          {perfumes.map((perfume) => (
            <PerfumeCard key={perfume.name} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
}
