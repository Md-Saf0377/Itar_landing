
'use client';

import type { Metadata } from 'next';
import './globals.css';
import { Toaster } from '@/components/ui/toaster';
import { CartProvider } from '@/context/cart-context';
import WhatsAppButton from '@/components/landing/whatsapp-button';
import { useScrollVisibility } from '@/hooks/use-scroll-visibility';

// This is a client component, so metadata should be exported from a server component if needed.
// For simplicity, we'll manage the title directly in the <head>.

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isVisible = useScrollVisibility();

  return (
    <html lang="en">
      <head>
        <title>Itar Landing</title>
        <meta name="description" content="Discover the essence of elegance with Itar perfumes." />
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
