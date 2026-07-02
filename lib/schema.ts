import { SITE_URL, SITE_NAME } from './seo';

const AGENCY_ID = `${SITE_URL}/#agency`;

/* ── Types ─────────────────────────────────────────────────────── */

export interface BreadcrumbItem {
  name: string;
  path: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  author: string;
  rating: number;
  text: string;
  date?: string;
}

export interface ArticleParams {
  title: string;
  description: string;
  path: string;
  image?: string;
  publishedTime: string;
  modifiedTime?: string;
  author?: string;
}

/* ── Helpers ─────────────────────────────────────────────────────*/

export function schemaTravelAgency() {
  return {
    '@context': 'https://schema.org',
    '@type': ['TravelAgency', 'LocalBusiness'],
    '@id': AGENCY_ID,
    name: SITE_NAME,
    alternateName: 'Guide Francophone Égypte',
    description:
      'Voyages et excursions sur mesure en Égypte avec Hisham, guide égyptologue francophone diplômé : Louxor, Le Caire, Assouan, Hurghada, croisières sur le Nil et montgolfière.',
    url: SITE_URL,
    telephone: '+201002086724',
    email: 'guidefrancophonelouxor@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '23 TV Street',
      addressLocality: 'Louxor',
      addressCountry: 'EG',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 25.6872,
      longitude: 32.6396,
    },
    priceRange: '$$',
    currenciesAccepted: 'EUR, USD, EGP',
    paymentAccepted: 'Virement bancaire, Espèces',
    areaServed: {
      '@type': 'Country',
      name: 'Égypte',
    },
    availableLanguage: [
      { '@type': 'Language', name: 'Français' },
      { '@type': 'Language', name: 'Arabe' },
      { '@type': 'Language', name: 'Anglais' },
    ],
    foundingDate: '2010',
    knowsAbout: ['Égyptologie', 'Archéologie égyptienne', 'Tourisme culturel', 'Croisières sur le Nil'],
  };
}

export function schemaBreadcrumb(items: BreadcrumbItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Accueil',
        item: SITE_URL,
      },
      ...items.map((item, idx) => ({
        '@type': 'ListItem',
        position: idx + 2,
        name: item.name,
        item: `${SITE_URL}${item.path}`,
      })),
    ],
  };
}

export function schemaTouristDestination(params: {
  name: string;
  description: string;
  path: string;
  image?: string;
  country?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristDestination',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    ...(params.image && { image: params.image.startsWith('http') ? params.image : `${SITE_URL}${params.image}` }),
    touristType: {
      '@type': 'Audience',
      audienceType: 'Touristes francophones',
    },
    containedInPlace: {
      '@type': 'Country',
      name: params.country ?? 'Égypte',
    },
    publicAccess: true,
  };
}

export function schemaTouristTrip(params: {
  name: string;
  description: string;
  path: string;
  image?: string;
  duration?: string;
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    ...(params.image && { image: params.image.startsWith('http') ? params.image : `${SITE_URL}${params.image}` }),
    ...(params.duration && { duration: params.duration }),
    provider: {
      '@id': AGENCY_ID,
      '@type': 'TravelAgency',
      name: SITE_NAME,
    },
    touristType: {
      '@type': 'Audience',
      audienceType: 'Touristes francophones',
    },
    offers: {
      '@type': 'Offer',
      priceCurrency: 'EUR',
      priceSpecification: { '@type': 'PriceSpecification', description: 'Sur devis personnalisé' },
      availability: 'https://schema.org/InStock',
      url: `${SITE_URL}/contact`,
    },
    inLanguage: 'fr',
    availableLanguage: { '@type': 'Language', name: 'Français' },
  };
}

export function schemaFaqPage(faqs: FaqItem[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function schemaAggregateRating(reviews: ReviewItem[]) {
  const rated = reviews.filter((r) => r.rating > 0);
  const avg = rated.reduce((sum, r) => sum + r.rating, 0) / rated.length;

  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': AGENCY_ID,
    name: SITE_NAME,
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: avg.toFixed(1),
      reviewCount: rated.length,
      bestRating: 5,
      worstRating: 1,
    },
    review: rated.slice(0, 10).map((r) => ({
      '@type': 'Review',
      author: { '@type': 'Person', name: r.author },
      reviewRating: { '@type': 'Rating', ratingValue: r.rating, bestRating: 5 },
      reviewBody: r.text,
      ...(r.date && { datePublished: r.date }),
    })),
  };
}

export function schemaArticle(params: ArticleParams) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    ...(params.image && { image: params.image.startsWith('http') ? params.image : `${SITE_URL}${params.image}` }),
    datePublished: params.publishedTime,
    dateModified: params.modifiedTime ?? params.publishedTime,
    author: {
      '@type': 'Person',
      name: params.author ?? 'Hisham',
      jobTitle: 'Guide égyptologue francophone',
    },
    publisher: {
      '@id': AGENCY_ID,
      '@type': 'Organization',
      name: SITE_NAME,
    },
    inLanguage: 'fr',
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}${params.path}`,
    },
  };
}

export function schemaPerson(params: {
  name: string;
  jobTitle: string;
  description: string;
  url: string;
  image?: string;
  languages: string[];
  knowsAbout: string[];
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: params.name,
    jobTitle: params.jobTitle,
    description: params.description,
    url: params.url,
    ...(params.image && {
      image: params.image.startsWith('http') ? params.image : `${SITE_URL}${params.image}`,
    }),
    worksFor: { '@id': AGENCY_ID, '@type': 'TravelAgency', name: SITE_NAME },
    knowsLanguage: params.languages.map((l) => ({ '@type': 'Language', name: l })),
    knowsAbout: params.knowsAbout,
    hasCredential: [
      {
        '@type': 'EducationalOccupationalCredential',
        name: "Licence en égyptologie — Institut d'Études Supérieures du Sinaï",
        credentialCategory: 'Licence universitaire',
      },
      {
        '@type': 'EducationalOccupationalCredential',
        name: 'Licence officielle de guide touristique — Ministère du Tourisme égyptien',
        credentialCategory: 'Licence professionnelle',
      },
    ],
    alumniOf: {
      '@type': 'EducationalOrganization',
      name: "Institut d'Études Supérieures du Sinaï",
    },
    nationality: { '@type': 'Country', name: 'Égypte' },
    homeLocation: { '@type': 'Place', name: 'Louxor, Égypte' },
  };
}

export function schemaContactPoint() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': AGENCY_ID,
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: '+201002086724',
        email: 'guidefrancophonelouxor@gmail.com',
        contactType: 'customer service',
        availableLanguage: [
          { '@type': 'Language', name: 'Français' },
          { '@type': 'Language', name: 'Arabe' },
          { '@type': 'Language', name: 'Anglais' },
        ],
        areaServed: { '@type': 'Country', name: 'Égypte' },
        hoursAvailable: {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '21:00',
        },
      },
    ],
  };
}

export function schemaWebPage(params: { name: string; description: string; path: string }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: params.name,
    description: params.description,
    url: `${SITE_URL}${params.path}`,
    isPartOf: { '@id': SITE_URL },
    about: { '@id': AGENCY_ID },
    inLanguage: 'fr',
  };
}
