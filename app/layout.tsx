import type { Metadata } from 'next';
import { ReactNode } from 'react';
import { Roboto, Raleway } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-roboto',
});

const raleway = Raleway({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  variable: '--font-raleway',
});

export const metadata: Metadata = {
  title: 'Yahtzee',
  description:
    'A simple Yahtzee game built with Next.js, TypeScript, and Tailwind CSS',
  icons: {
    icon: '/assets/images/dice/dice-6.svg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html
      lang='en'
      suppressHydrationWarning
    >
      <body className={`${roboto.variable} ${raleway.variable} antialiased`}>
        <ThemeProvider
          attribute='class'
          defaultTheme='system'
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
