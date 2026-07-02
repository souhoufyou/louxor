import type { Metadata } from 'next';
import { Fraunces, Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL, SITE_NAME } from '@/lib/seo';
import { NavBar } from '@/components/NavBar';
import { WhatsAppButton } from '@/components/WhatsAppButton';
import { Footer } from '@/components/Footer';

const fraunces = Fraunces({
  variable: '--font-fraunces',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
  preload: true,
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  preload: false,
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — Voyages d'Exception en Égypte`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Découvrez l'Égypte avec Hisham, guide égyptologue francophone diplômé. Circuits sur-mesure à Louxor, Le Caire, Assouan, Hurghada. Croisières Nil, montgolfière, transferts.",
  keywords: [
    'guide francophone Louxor',
    'guide égyptologue',
    'voyage Égypte',
    'excursions Louxor',
    'croisière Nil',
    'montgolfière Louxor',
    'pyramides de Gizeh',
    'Vallée des Rois',
  ],
  authors: [{ name: 'Hisham', url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  formatDetection: { email: false, telephone: false },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: SITE_URL,
    siteName: SITE_NAME,
  },
  twitter: { card: 'summary_large_image' },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 },
  },
  manifest: '/manifest.json',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
    ],
    apple: [{ url: '/icons/apple-touch-icon.png', sizes: '180x180' }],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${fraunces.variable} ${inter.variable}`}>
      <body className="antialiased">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-gold focus:text-ink focus:rounded focus:font-medium"
        >
          Aller au contenu principal
        </a>
        <NavBar />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
