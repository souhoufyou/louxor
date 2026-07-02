import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb, schemaWebPage } from '@/lib/schema';
import { getExcursions, getDestinations } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Excursions en Égypte avec guide francophone',
    description:
      'Toutes nos excursions en Égypte : croisière sur le Nil, montgolfière à Louxor, visites guidées Le Caire, Assouan, Hurghada. Devis gratuit et sur mesure.',
    path: '/excursions',
  });
}

const EXCURSION_PATHS: Record<string, string> = {
  'croisiere-nil': '/croisieres-en-egypte-sur-le-nil',
  montgolfiere: '/montgolfiere',
  'transfert-aeroport': '/service-de-transfert-aeroport',
};

const DESTINATION_PATHS: Record<string, string> = {
  louxor: '/louxor',
  caire: '/caire',
  assouan: '/assouan',
  hurghada: '/hurghada',
};

const DEST_EXCURSION_PATHS: Record<string, string> = {
  'excursions-louxor': '/excursions/louxor',
  'excursions-assouan': '/excursions/assouan',
  'excursions-hurghada': '/excursions/hurghada',
};

export default async function ExcursionsPage() {
  const [excursions, destinations] = await Promise.all([
    getExcursions(),
    getDestinations(),
  ]);

  const mainExcursions = excursions.filter((e) => e.slug in EXCURSION_PATHS);
  const destExcursions = excursions.filter((e) => e.slug.startsWith('excursions-'));

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaWebPage({
          name: 'Toutes nos excursions en Égypte',
          description:
            'Croisières sur le Nil, montgolfière, visites guidées — tous les circuits proposés par votre guide francophone.',
          path: '/excursions',
        })}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'Excursions', path: '/excursions' }])} />

      <main id="main-content">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section aria-labelledby="page-title" className="pt-16 pb-16 bg-luxury-gradient">
          <div className="container-luxury">
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex gap-2 text-caption list-none p-0">
                <li><Link href="/" className="text-white/65 hover:text-white transition-colors">Accueil</Link></li>
                <li aria-hidden="true" className="text-white/35">›</li>
                <li aria-current="page" className="text-gold">Excursions</li>
              </ol>
            </nav>
            <h1 id="page-title" className="text-display-xl text-white text-balance">
              Toutes nos excursions en Égypte
            </h1>
            <p className="text-gold-muted mt-4 text-xl max-w-2xl">
              Des expériences sur mesure avec un guide égyptologue francophone — croisières, survols
              en montgolfière, visites archéologiques et transferts.
            </p>
          </div>
        </section>

        {/* ── Excursions principales ──────────────────────────── */}
        <section aria-labelledby="main-excursions-title" className="section-y">
          <div className="container-luxury">
            <h2 id="main-excursions-title" className="text-display-md">Circuits & services</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {mainExcursions.map((exc) => (
                <li key={exc.slug}>
                  <article className="card-luxury">
                    <Link href={EXCURSION_PATHS[exc.slug]} aria-label={`Voir ${exc.name}`}>
                      <div className="aspect-card relative img-zoom">
                        <Image
                          src={exc.hero.image}
                          alt={exc.name}
                          fill
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-6">
                        <span className="badge badge-gold">{exc.category}</span>
                        <h3 className="font-display text-2xl mt-3">{exc.name}</h3>
                        <p className="text-caption mt-3 line-clamp-3">{exc.intro}</p>
                        <span className="text-gold font-medium text-sm mt-4 inline-block hover:text-gold-dark transition-colors">
                          Voir le programme →
                        </span>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Excursions par destination ──────────────────────── */}
        {destExcursions.length > 0 && (
          <section aria-labelledby="dest-excursions-title" className="section-y bg-parchment-gradient">
            <div className="container-luxury">
              <h2 id="dest-excursions-title" className="text-display-md">
                Excursions par destination
              </h2>
              <ul className="grid sm:grid-cols-2 gap-6 mt-10 list-none p-0">
                {destExcursions.map((exc) => {
                  const href = DEST_EXCURSION_PATHS[exc.slug] ?? DESTINATION_PATHS[exc.slug.replace('excursions-', '')] ?? '#';
                  return (
                    <li key={exc.slug}>
                      <article className="card-luxury">
                        <Link href={href}>
                          <div className="aspect-card relative img-zoom">
                            <Image
                              src={exc.hero.image}
                              alt={exc.name}
                              fill
                              sizes="(max-width: 640px) 100vw, 50vw"
                              className="object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="p-6">
                            <span className="badge badge-gold">{exc.category}</span>
                            <h3 className="font-display text-2xl mt-3">{exc.name}</h3>
                            <p className="text-caption mt-3 line-clamp-3">{exc.intro}</p>
                            <span className="text-gold font-medium text-sm mt-4 inline-block hover:text-gold-dark transition-colors">
                              Voir le programme →
                            </span>
                          </div>
                        </Link>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* ── Destinations ────────────────────────────────────── */}
        <section aria-labelledby="destinations-list-title" className="section-y">
          <div className="container-luxury">
            <h2 id="destinations-list-title" className="text-display-md">Nos destinations</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 list-none p-0">
              {destinations.map((dest) => (
                <li key={dest.slug}>
                  <article className="card-luxury">
                    <Link href={DESTINATION_PATHS[dest.slug] ?? dest.legacyPath}>
                      <div className="aspect-card relative img-zoom">
                        <Image
                          src={dest.hero.image}
                          alt={dest.name}
                          fill
                          sizes="(max-width: 640px) 100vw, 25vw"
                          className="object-cover"
                          loading="lazy"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-display text-xl">{dest.name}</h3>
                      </div>
                    </Link>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section aria-labelledby="cta-excursions" className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 id="cta-excursions" className="text-display-md text-white">
              Créez votre programme sur mesure
            </h2>
            <p className="text-gold-muted mt-4">
              Chaque voyage est unique. Contactez-nous pour un devis personnalisé.
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
