import { Facebook, Instagram, Mail, Phone, Twitter } from 'lucide-react';
import Link from 'next/link';
import FadeInSection from './fade-in-section';

export default function ContactSection() {
  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
      <FadeInSection>
        <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="font-headline text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Get in Touch
            </h2>
            <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have questions or want to learn more about our fragrances? We&apos;d love to hear from you.
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-primary" />
              <a href="mailto:imadhussain9@gmail.com" className="text-lg font-medium hover:underline">
                imadhussain9@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5 text-primary" />
              <a href="tel:+918088603853" className="text-lg font-medium hover:underline">
                +91 80886 03853
              </a>
            </div>
          </div>
           <div className="mt-8 flex justify-center space-x-6">
              <Link
                href="#"
                prefetch={false}
                className="text-muted-foreground transition-colors hover:text-foreground">
                  <Instagram className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                prefetch={false}
                className="text-muted-foreground transition-colors hover:text-foreground">
                  <Facebook className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                prefetch={false}
                className="text-muted-foreground transition-colors hover:text-foreground">
                  <Twitter className="h-6 w-6" />
              </Link>
            </div>
        </div>
      </FadeInSection>
    </section>
  );
}
