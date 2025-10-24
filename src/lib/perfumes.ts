
export type Perfume = {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const perfumes: Perfume[] = [
    {
        name: 'Radical Rose',
        description: 'A mysterious blend of rose, patchouli, and labdanum.',
        imageUrl: 'https://www.shutterstock.com/image-photo/still-life-shot-davidoff-cool-600nw-2435571775.jpg',
        imageHint: 'perfume bottle',
    },
    {
        name: 'Misk Rijali',
        description: 'A captivating and masculine scent with deep woody notes.',
        imageUrl: '/images/misk_rijali.png',
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
    },
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
    {
        name: 'Itar Oils',
        description: 'Concentrated perfume oils with rich, traditional scents.',
        imageUrl: 'https://picsum.photos/400/500?random=11',
        imageHint: 'itar bottle',
    },
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

export function getPerfumeByName(name: string): Perfume | undefined {
    return perfumes.find((p) => p.name === name);
}
