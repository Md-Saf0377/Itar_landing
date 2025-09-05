import Link from 'next/link';
import { Leaf } from 'lucide-react';

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 px-4 py-2 backdrop-blur supports-[backdrop-filter]:bg-background/60 md:px-6">
      <div className="container mx-auto flex h-14 items-center justify-between">
        <Link href="#" className="flex items-center" prefetch={false}>
          <Leaf className="h-6 w-6" />
          <span className="ml-2 font-headline text-lg font-semibold">Itar</span>
        </Link>
        <nav className="hidden gap-6 text-sm font-medium md:flex">
          <Link href="#home" className="hover:underline" prefetch={false}>
            Home
          </Link>
          <Link href="#about" className="hover:underline" prefetch={false}>
            About
          </Link>
          <Link href="#collection" className="hover:underline" prefetch={false}>
            Collection
          </Link>
          <Link href="#contact" className="hover:underline" prefetch={false}>
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
