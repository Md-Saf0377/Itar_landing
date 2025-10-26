
export type Perfume = {
  name: string;
  description: string;
  imageUrl: string;
  imageHint: string;
};

export const perfumes: Perfume[] = [
    {
        name: 'Oud Leavnder',
        description: 'A mysterious blend of oud and soothing lavender.',
        imageUrl: 'https://picsum.photos/seed/oudleavnder/400/500',
        imageHint: 'perfume bottle',
    },
    {
        name: 'Black Opium',
        description: 'An addictive gourmand floral with notes of black coffee, white flowers, and vanilla.',
        imageUrl: 'https://picsum.photos/seed/blackopium/400/500',
        imageHint: 'dark perfume',
    },
    {
        name: 'Velvet Musk',
        description: 'A soft, enveloping scent of pure white musk and ambrette.',
        imageUrl: 'https://picsum.photos/seed/velvetmusk/400/500',
        imageHint: 'perfume bottle',
    },
     {
        name: 'Addictive Oud',
        description: 'An exotic and smoky scent of rare oud, sandalwood, and vetiver.',
        imageUrl: 'https://picsum.photos/seed/addictiveoud/400/500',
        imageHint: 'itar bottle',
    },
    {
        name: 'Imperial Oud',
        description: 'A majestic and powerful fragrance featuring rich oud and spices.',
        imageUrl: 'https://picsum.photos/seed/imperialoud/400/500',
        imageHint: 'luxury perfume',
    },
    {
        name: 'Mt Blnc Legend',
        description: 'A fresh and timeless scent with notes of bergamot, lavender, and sandalwood.',
        imageUrl: 'https://picsum.photos/seed/legend/400/500',
        imageHint: 'men perfume',
    },
    {
        name: 'Megamare',
        description: 'An aquatic and fresh fragrance that captures the essence of the sea.',
        imageUrl: 'https://picsum.photos/seed/megamare/400/500',
        imageHint: 'ocean perfume',
    },
    {
        name: 'Sensual',
        description: 'A romantic and alluring blend of ylang-ylang, vanilla, and musk.',
        imageUrl: 'https://picsum.photos/seed/sensual/400/500',
        imageHint: 'elegant perfume',
    },
    {
        name: 'Fursan',
        description: 'A bold and chivalrous fragrance with notes of leather, cedar, and spice.',
        imageUrl: 'https://picsum.photos/seed/fursan/400/500',
        imageHint: 'strong perfume',
    },
    {
        name: 'Creed Aventus',
        description: 'A confident and fruity scent with pineapple, blackcurrant, and birch.',
        imageUrl: 'https://picsum.photos/seed/aventus/400/500',
        imageHint: 'classic perfume',
    },
    {
        name: 'Musk Rijali',
        description: 'A captivating and masculine scent with deep woody and musky notes.',
        imageUrl: 'https://picsum.photos/seed/muskrijali/400/500',
        imageHint: 'men itar',
    },
    {
        name: 'Escada Collection',
        description: 'An exclusive collection of vibrant and exotic fruity fragrances.',
        imageUrl: 'https://picsum.photos/seed/escada/400/500',
        imageHint: 'colorful perfume',
    },
    {
        name: 'Feelings',
        description: 'An emotional and expressive fragrance with a blend of soft florals and warm woods.',
        imageUrl: 'https://picsum.photos/seed/feelings/400/500',
        imageHint: 'soft perfume',
    },
    {
        name: 'Baccarat 540',
        description: 'A radiant and sophisticated fragrance with notes of jasmine, saffron, and cedarwood.',
        imageUrl: 'https://picsum.photos/seed/baccarat/400/500',
        imageHint: 'crystal perfume',
    },
];

export function getPerfumeByName(name: string): Perfume | undefined {
    return perfumes.find((p) => p.name.toLowerCase() === name.toLowerCase());
}
