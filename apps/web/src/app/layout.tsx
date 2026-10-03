import type { Metadata } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans, Noto_Serif_Bengali } from 'next/font/google';
import './globals.css';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-editorial',
  display: 'swap',
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const notoSerifBengali = Noto_Serif_Bengali({
  subsets: ['bengali'],
  variable: '--font-assamese',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Karigar — Discover Things Made by Hand',
  description:
    'An editorial marketplace and creator sanctuary connecting independent Indian master artisans with people who cherish authentic handmade craft.',
  openGraph: {
    title: 'Karigar — Discover Things Made by Hand',
    description:
      'Meet independent Indian master artisans and discover heirloom objects with living lineage.',
    url: 'https://karigar.craft',
    siteName: 'Karigar',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Karigar — Discover Things Made by Hand',
    description:
      'Meet independent Indian master artisans and discover heirloom objects with living lineage.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${plusJakarta.variable} ${notoSerifBengali.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#FAF8F5] text-[#191817] selection:bg-[#EBD6CE] selection:text-[#8B3C1B]">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
