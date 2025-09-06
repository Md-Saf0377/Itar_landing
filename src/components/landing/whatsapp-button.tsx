
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

type WhatsAppButtonProps = {
  isVisible: boolean;
};

export default function WhatsAppButton({ isVisible }: WhatsAppButtonProps) {
  return (
    <Link
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-1 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Chat on WhatsApp"
    >
      <div className="rounded-full bg-background/80 px-3 py-1 text-xs font-medium text-foreground shadow-lg backdrop-blur-sm">
        Contact Us
      </div>
      <div className="relative">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <Image
            src="https://cdn.shopify.com/s/files/1/0033/3538/9233/files/520.png"
            alt="WhatsApp Icon"
            fill
            className="p-2"
          />
        </div>
        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 text-[10px] font-bold text-white">
          1
        </span>
      </div>
    </Link>
  );
}
