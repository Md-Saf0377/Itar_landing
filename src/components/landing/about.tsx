import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2">
              <h2 className="font-headline text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Our Story
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Kaab Fragrances was born from a passion for the art of perfumery. Our journey began with a simple desire to capture the essence of memories and emotions in a bottle. We travel the world to source the finest ingredients, blending tradition with modern innovation to create unique and captivating fragrances that tell a story.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <Image
              src="https://picsum.photos/600/400"
              alt="Perfume ingredients"
              width={600}
              height={400}
              data-ai-hint="perfume ingredients"
              className="aspect-video overflow-hidden rounded-xl object-cover shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
