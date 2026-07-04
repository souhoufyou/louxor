import type { Metadata } from 'next';

export const SITE_URL = 'https://www.guidefrancophonelouxor.com';
export const SITE_NAME = 'Guide Francophone Louxor';
const DEFAULT_OG_IMAGE = '/images/og-default.jpg';

export interface SeoParams {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  noIndex?: boolean;
  publishedTime?: string;
  modifiedTime?: string;
}

export function generateMetadata({
  title,
  description,
  path,
  ogImage = DEFAULT_OG_IMAGE,
  ogType = 'website',
  noIndex = false,
  publishedTime,
  modifiedTime,
}: SeoParams): Metadata {
  const canonicalUrl = `${SITE_URL}${path}`;
  const imageUrl = ogImage.startsWith('http') ? ogImage : `${SITE_URL}${ogImage}`;
  const fullTitle = `${title} | ${SITE_NAME}`;

  return {
    // `absolute` empêche le template du layout racine (`%s | SITE_NAME`)
    // de dupliquer le suffixe déjà présent dans fullTitle.
    title: { absolute: fullTitle },
    description,
    metadataBase: new URL(SITE_URL),
    alternates: { canonical: canonicalUrl },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      locale: 'fr_FR',
      type: ogType,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [imageUrl],
    },
    robots: noIndex
      ? { index: false, follow: false }
      : {
          index: true,
          follow: true,
          googleBot: {
            index: true,
            follow: true,
            'max-image-preview': 'large',
            'max-snippet': -1,
          },
        },
  };
}
