
import PerfumeCard from '@/components/landing/perfume-card';
import { perfumes } from '@/lib/perfumes';

const collectionPerfumes = perfumes.slice(9, 13);

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
          {collectionPerfumes.map((perfume) => (
            <PerfumeCard key={perfume.name} perfume={perfume} />
          ))}
        </div>
      </div>
    </section>
  );
}
