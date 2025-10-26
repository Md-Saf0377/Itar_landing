
'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

type WhatsAppButtonProps = {
  isVisible: boolean;
};

export default function WhatsAppButton({ isVisible }: WhatsAppButtonProps) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Link
            href="https://wa.me/918088603853"
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'group fixed bottom-6 right-6 z-50 flex items-center gap-1 transition-opacity duration-300',
              isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
            )}
            aria-label="Chat on WhatsApp"
          >
            <div className="relative flex h-14 w-14 items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <Image
                src="https://cdn.shopify.com/s/files/1/0033/3538/9233/files/520.png"
                alt="WhatsApp Icon"
                fill
                className="p-2 transition-transform duration-300 ease-in-out group-hover:rotate-12"
              />
            </div>
            <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-red-600 p-2 text-[10px] font-bold text-white">
              1
            </span>
          </Link>
        </TooltipTrigger>
        <TooltipContent>
          <p>Chat with us</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
