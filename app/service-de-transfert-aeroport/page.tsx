import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaTouristTrip, schemaBreadcrumb, schemaFaqPage } from '@/lib/schema';
import { getExcursion } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  const exc = await getExcursion('transfert-aeroport');
  return _gen({
    title: exc.seo.title,
    description: exc.seo.description,
    path: '/service-de-transfert-aeroport',
    ogImage: exc.hero.image,
  });
}

const FAQ = [
  {
    question: 'Quels aéroports sont couverts par le service de transfert ?',
    answer:
      "Le service de transfert couvre les aéroports de Louxor, Assouan, Hurghada, Marsa Alam et Le Caire, avec prise en charge à l'arrivée ou dépose au départ.",
  },
  {
    question: 'Le transfert aéroport est-il disponible 24h/24 ?',
    answer:
      "Oui, le service est disponible 24h/24 et 7j/7. Votre chauffeur vous attend à l'arrivée avec votre nom sur un panneau et suit en temps réel les horaires des vols.",
  },
  {
    question: 'Peut-on réserver un transfert entre deux villes différentes ?',
    answer:
      'Absolument. Nous proposons des transferts inter-villes (Louxor–Hurghada, Hurghada–Le Caire, etc.) avec véhicules climatisés et chauffeurs professionnels.',
  },
];

export default async function TransfertPage() {
  const exc = await getExcursion('transfert-aeroport');

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaTouristTrip({
          name: exc.name,
          description: exc.seo.description,
          path: '/service-de-transfert-aeroport',
          image: exc.hero.image,
        })}
      />
      <JsonLd
        data={schemaBreadcrumb([{ name: exc.name, path: '/service-de-transfert-aeroport' }])}
      />
      <JsonLd data={schemaFaqPage(FAQ)} />

      <nav aria-label="Fil d'Ariane">
        <ol className="flex gap-2 text-caption container-luxury py-4">
          <li><Link href="/">Accueil</Link></li>
          <li aria-hidden="true">›</li>
          <li><Link href="/excursions">Excursions</Link></li>
          <li aria-hidden="true">›</li>
          <li aria-current="page">{exc.name}</li>
        </ol>
      </nav>

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative aspect-hero">
          <Image
            src={exc.hero.image}
            alt="Service de transfert aéroport en Égypte"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-16">
            <span className="badge badge-white mb-4">{exc.category}</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">
              {exc.name}
            </h1>
            {exc.hero.tagline && (
              <p className="text-gold mt-3 text-xl">{exc.hero.tagline}</p>
            )}
          </div>
        </section>

        <section aria-labelledby="intro-transfert" className="section-y">
          <div className="container-narrow">
            <h2 id="intro-transfert" className="sr-only">Présentation du service</h2>
            <p className="text-pretty leading-relaxed text-lg">{exc.intro}</p>
          </div>
        </section>

        {exc.coverage && Object.keys(exc.coverage).length > 0 && (
          <section aria-labelledby="coverage-title" className="section-y bg-parchment-gradient">
            <div className="container-luxury">
              <h2 id="coverage-title" className="text-display-md">Zones desservies</h2>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
                {Object.entries(exc.coverage as Record<string, string[]>).map(([city, routes]) => (
                  <div key={city} className="surface p-6">
                    <h3 className="font-display text-xl text-gold">{city}</h3>
                    <ul className="mt-3 space-y-1 list-none p-0">
                      {routes.map((route, i) => (
                        <li key={i} className="text-caption flex gap-2">
                          <span className="text-gold" aria-hidden="true">›</span>
                          <span>{route}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {exc.vehicleTypes && exc.vehicleTypes.length > 0 && (
          <section aria-labelledby="vehicles-title" className="section-y">
            <div className="container-luxury">
              <h2 id="vehicles-title" className="text-display-md">Véhicules disponibles</h2>
              <ul className="flex flex-wrap gap-3 mt-6 list-none p-0">
                {exc.vehicleTypes.map((v) => (
                  <li key={v} className="badge badge-nil">{v}</li>
                ))}
              </ul>
            </div>
          </section>
        )}

        <section aria-labelledby="faq-transfert" className="section-y bg-parchment-gradient">
          <div className="container-narrow">
            <h2 id="faq-transfert" className="text-display-md">Questions fréquentes</h2>
            <dl className="mt-8 space-y-6">
              {FAQ.map((faq) => (
                <div key={faq.question}>
                  <dt className="font-display text-xl font-medium">{faq.question}</dt>
                  <dd className="mt-2 text-pretty text-text-muted">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="cta-transfert" className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 id="cta-transfert" className="text-display-md text-white">
              Réserver votre transfert aéroport
            </h2>
            <p className="text-gold-muted mt-4">
              Ponctualité garantie — chauffeur professionnel anglophone et francophone.
            </p>
            <Link href="/contact" className="btn btn-primary mt-8 inline-flex">
              Demander un devis gratuit
            </Link>
          </div>
        </section>
      </main>
    </>
  );
}
