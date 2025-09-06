
'use client';

import { cn } from '@/lib/utils';
import Link from 'next/link';

type WhatsAppButtonProps = {
  isVisible: boolean;
};

const WhatsAppIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 448 512"
      className="h-8 w-8 fill-current text-white"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.8 0-67.6-9.5-97.8-27.2l-6.9-4-72.6 19.1 19.4-70.6-4.4-7.2c-19.5-31.4-29.9-68-29.9-106.1 0-109.3 89.5-198.8 198.8-198.8 53.3 0 102.7 20.9 140.4 58.6 37.7 37.7 58.6 87.1 58.6 140.4-.1 109.3-89.5 198.8-198.8 198.8zm122.3-179.3c-6.8-3.4-39.7-19.6-45.9-21.8-6.2-2.2-10.7-3.4-15.2 3.4-4.5 6.8-17.3 21.8-21.2 26.3-3.9 4.5-7.8 5.1-14.5 1.7-6.8-3.4-28.5-10.5-54.3-33.5-20-18-33.8-40.2-37.7-47-3.9-6.8-.4-10.5 3-13.9 3.1-3.1 6.8-8.2 10.2-12.2 3.4-4.1 4.5-6.8 6.8-11.4 2.2-4.5 1.1-8.5-0.6-11.9s-15.2-36.5-20.8-50c-5.4-13.4-10.8-11.5-14.8-11.5-3.9 0-8.4 0-12.9 0s-11.9 1.7-18.1 8.5c-6.2 6.8-23.5 23-23.5 56.1 0 33.1 24.1 65 27.5 69.5 3.4 4.5 46.9 71.9 114.2 101.1 15.9 7.1 29.8 11.4 40 14.8 14.5 4.8 27.5 4.1 37.8 2.5 11.9-1.7 39.7-16.2 45.3-31.8 5.6-15.6 5.6-28.9 3.9-31.8z" />
    </svg>
  );

export default function WhatsAppButton({ isVisible }: WhatsAppButtonProps) {
  return (
    <Link
      href="https://wa.me/1234567890" // Replace with your WhatsApp number
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'fixed bottom-6 right-6 z-50 flex items-center gap-3 transition-opacity duration-300',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
      aria-label="Chat on WhatsApp"
    >
      <div className="rounded-lg bg-white px-4 py-2 text-foreground shadow-md">
        <span className="font-semibold">تواصل معنا</span>
      </div>
      <div className="relative">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-green-500 shadow-lg">
          <WhatsAppIcon />
        </div>
        <span className="absolute -top-1 -right-1 flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
          1
        </span>
      </div>
    </Link>
  );
}
