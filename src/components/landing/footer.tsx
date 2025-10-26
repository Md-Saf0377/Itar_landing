import { Separator } from '@/components/ui/separator';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-6">
      <div className="container mx-auto px-4 md:px-6">
        <Separator className="mb-6" />
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row sm:justify-between">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Kaab Fragrances. All rights reserved.
          </p>
          <nav className="flex gap-4 sm:gap-6">
            <Link href="/terms" className="text-sm hover:underline" prefetch={false}>
              Terms of Service
            </Link>
            <Link href="/privacy" className="text-sm hover:underline" prefetch={false}>
              Privacy Policy
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
}
