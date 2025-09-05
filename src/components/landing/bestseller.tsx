
import PerfumeCard, { type Perfume } from '@/components/landing/perfume-card';

const perfumes: Perfume[] = [
    {
        name: 'Radical Rose',
        description: 'A mysterious blend of rose, patchouli, and labdanum.',
        imageUrl: 'https://picsum.photos/400/500?random=13',
        imageHint: 'perfume bottle',
    },
    {
        name: 'Vanilla Powder',
        description: 'A warm and comforting scent of vanilla, coconut, and white musk.',
        imageUrl: 'https://images.pexels.com/photos/16057236/pexels-photo-16057236/free-photo-of-close-up-of-chanel-perfume.jpeg',
        imageHint: 'perfume bottle',
    },
    {
        name: 'Crystal Saffron',
        description: 'A spicy and oriental fragrance with notes of saffron, musk, and ambroxan.',
        imageUrl: 'https://i.pinimg.com/originals/ce/4b/fb/ce4bfb8fbe402e634787671571db7af5.png',
        imageHint: 'perfume bottle',
    },
     {
        name: 'Oud Wood',
        description: 'An exotic and smoky scent of rare oud, sandalwood, and vetiver.',
        imageUrl: 'https://cdn.pixabay.com/photo/2017/03/14/11/39/perfume-2142817_640.jpg',
        imageHint: 'itar bottle',
    },
    {
        name: 'Pexels Passion',
        description: 'A captivating aroma of wild berries and jasmine.',
        imageUrl: 'https://images.pexels.com/photos/1961789/pexels-photo-1961789.jpeg?cs=srgb&dl=pexels-valeriya-1961789.jpg&fm=jpg',
        imageHint: 'perfume bottle flowers',
    }
];

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
                    {perfumes.map((perfume) => (
                        <PerfumeCard key={perfume.name} perfume={perfume} />
                    ))}
                </div>
            </div>
        </section>
    );
}
