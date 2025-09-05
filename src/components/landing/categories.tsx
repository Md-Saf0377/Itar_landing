import PerfumeCard, { type Perfume } from '@/components/landing/perfume-card';

const perfumes: Perfume[] = [
    {
        name: 'Extrait de Parfum',
        description: 'The most concentrated and long-lasting form of fragrance.',
        imageUrl: 'https://picsum.photos/400/500?random=7',
        imageHint: 'perfume bottle',
    },
    {
        name: 'Eau de Parfum',
        description: 'A lighter concentration of fragrance, perfect for everyday wear.',
        imageUrl: 'https://picsum.photos/400/500?random=8',
        imageHint: 'perfume bottle',
    },
    {
        name: 'Hand & Body',
        description: 'Luxurious scented products for your skin.',
        imageUrl: 'https://picsum.photos/400/500?random=9',
        imageHint: 'body lotion',
    },
];

export default function CategoriesSection() {
    return (
        <section id="categories" className="w-full py-12 md:py-24 lg:py-32 bg-secondary">
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center">
                    <div className="space-y-2">
                        <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-5xl">
                            Shop by Category
                        </h2>
                        <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                            Find the perfect fragrance intensity and type for you.
                        </p>
                    </div>
                </div>
                <div className="mx-auto grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 lg:grid-cols-3">
                    {perfumes.map((perfume) => (
                        <PerfumeCard key={perfume.name} perfume={perfume} />
                    ))}
                </div>
            </div>
        </section>
    );
}
