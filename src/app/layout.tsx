import './globals.css';

import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import { cn } from '@/lib/utils';

const inter = Inter({ weight: '500', subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'My awesome Portfolio for old nasty B*tches.',
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          'w-screen overflow-x-hidden bg-body scrollbar scrollbar-track-vicious-black scrollbar-thumb-vicious-primary scrollbar-thumb-rounded-full',
          inter.className,
        )}
      >
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
