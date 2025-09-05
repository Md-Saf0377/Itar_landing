
import PerfumeCard from '@/components/landing/perfume-card';
import { perfumes } from '@/lib/perfumes';

const bestsellerPerfumes = perfumes.slice(0, 5);

export default function BestsellerSection() {
    return (
        <section id="bestsellers" className="w-full py-12 md:py-24 lg:py-32">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                            Our Bestsellers
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Discover the fragrances our customers love the most.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-4">
                    {bestsellerPerfumes.map((perfume) => (
                        <PerfumeCard key={perfume.name} perfume={perfume} />
                    ))}
                </div>
            </div>
        </section>
    );
}
