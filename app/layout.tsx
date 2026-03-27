import type { Metadata } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-body' });
const manrope = Manrope({ subsets: ['latin'], variable: '--font-heading' });

export const metadata: Metadata = {
  title: 'yasmg.studio | Freelance Web Designer & Developer',
  description:
    'yasmg.studio creates clear, modern, conversion-focused websites for small businesses, freelancers, and local services.',
  openGraph: {
    title: 'yasmg.studio | Freelance Web Designer & Developer',
    description:
      'Modern website design and front-end development for small businesses and freelancers.',
    url: 'https://yasmg.studio',
    siteName: 'yasmg.studio',
    type: 'website'
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="font-[var(--font-body)]">{children}</body>
    </html>
  );
}
