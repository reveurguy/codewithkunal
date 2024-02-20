import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';
import { ThemeProvider } from '@/components/theme-provider';
import { cn } from '@/lib/utils';
import { Analytics } from '@vercel/analytics/react';

const fontTitle = localFont({
  src: '../fonts/ClashGrotesk-Variable.woff2',
  weight: 'variable',
  fallback: ['Inter', 'sans-serif'],
  variable: '--font-title',
});

const fontBody = localFont({
  src: '../fonts/Satoshi-Variable.woff2',
  weight: 'variable',
  fallback: ['Inter', 'sans-serif'],
  variable: '--font-body',
});

export const metadata: Metadata = {
  title: 'NextJS Starter Template by Adarsh Dubey',
  description:
    'Simple and easy to use nextjs 14 starter template made by Adarsh Dubey.',
  metadataBase: new URL('https://nextjs.adarshdubey.com'),
  openGraph: {
    title: 'NextJS Starter Template by Adarsh Dubey',
    description:
      'Simple and easy to use nextjs 14 starter template made by Adarsh Dubey.',
    url: 'https://nextjs.adarshdubey.com',
    siteName: 'NextJS Starter Template by Adarsh Dubey',
    images: {
      url: '/opengraph-image.png',
      width: 1920,
      height: 960,
      alt: "The only nexjs starter kit you'll ever need.",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          'font-body antialiased',
          fontTitle.variable,
          fontBody.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <Analytics />
        </ThemeProvider>
        <Analytics />
      </body>
    </html>
  );
}
