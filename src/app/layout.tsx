// src/app/layout.tsx
import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import LayoutClientWrapper from './layout-client'; 

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Mini Profile Editor',
  description: 'Built with Next.js and ShadCN UI',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LayoutClientWrapper>{children}</LayoutClientWrapper>
      </body>
    </html>
  );
}
