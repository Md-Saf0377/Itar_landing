tsx
        // src/app/layout.tsx
        'use client'; // Keep this line

        export default function RootLayout({
          children,
        }: Readonly<{
          children: React.ReactNode;
        }>) {
          return (
            <html lang="en">
              <body>
                {children}
              </body>
            </html>
          );
        }
