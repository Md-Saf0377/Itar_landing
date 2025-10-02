
'use client';

import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/cart-context';
import WhatsAppButton from '@/components/landing/whatsapp-button';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';
import type { Metadata } from 'next';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isVisible = useScrollVisibility();

  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <CartProvider>
          {children}
          <WhatsAppButton isVisible={isVisible} />
        </CartProvider>
        <Toaster />
      </body>
    </html>
  );
}
