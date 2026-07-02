import Image from 'next/image';
import Link from 'next/link';
import { Clock, Calendar, Lightbulb } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { PhotoGallery } from '@/components/PhotoGallery';
import type { Destination, Excursion } from '@/lib/content';
import {
  schemaTravelAgency,
  schemaTouristDestination,
  schemaBreadcrumb,
  schemaFaqPage,
} from '@/lib/schema';

const EXCURSION_HREFS: Record<string, string> = {
  'excursions-louxor': '/excursions/louxor',
  'excursions-assouan': '/excursions/assouan',
  'excursions-hurghada': '/excursions/hurghada',
  montgolfiere: '/montgolfiere',
  'croisiere-nil': '/croisieres-en-egypte-sur-le-nil',
  'croisieres-en-egypte-sur-le-nil': '/croisieres-en-egypte-sur-le-nil',
  'transfert-aeroport': '/service-de-transfert-aeroport',
  'service-de-transfert-aeroport': '/service-de-transfert-aeroport',
};

const DEST_HREFS: Record<string, string> = {
  louxor: '/louxor',
  caire: '/caire',
  assouan: '/assouan',
  hurghada: '/hurghada',
};

interface DestinationTemplateProps {
  dest: Destination;
  relatedExcursions: Excursion[];
  otherDestinations: Destination[];
  path: string;
}

export function DestinationTemplate({
  dest,
  relatedExcursions,
  otherDestinations,
  path,
}: DestinationTemplateProps) {
  const faq = dest.faq ?? [];
  const pi = dest.practicalInfo;

  return (
    <>
      {/* ── Schema.org ────────────────────────────────────────── */}
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaTouristDestination({
          name: dest.name,
          description: dest.seo.description,
          path,
          image: dest.hero.image,
        })}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Destinations', path: '/excursions' },
          { name: dest.name, path },
        ])}
      />
      {faq.length > 0 && <JsonLd data={schemaFaqPage(faq)} />}

      <main id="main-content">
        {/* ── 1. Hero ───────────────────────────────────────────── */}
        <section aria-labelledby="page-title" className="relative aspect-hero overflow-hidden min-h-[320px]">
          <div className="absolute inset-0 animate-hero-zoom">
            <Image
              src={dest.hero.image}
              alt={`${dest.name} — visite guidée francophone`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          </div>
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li>
                <Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li>
                <Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">
                  Destinations
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">
                {dest.name}
              </li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-16">
            <span className="badge badge-white mb-4 self-start">Destination</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">
              Visite guidée privée de {dest.name}
              <br className="hidden sm:block" /> avec guide francophone
            </h1>
            {dest.hero.tagline && (
              <p className="text-gold mt-3 text-xl max-w-2xl">{dest.hero.tagline}</p>
            )}
          </div>
        </section>

        {/* ── 2. Introduction éditoriale ────────────────────────── */}
        <section aria-labelledby="intro-title" className="section-y">
          <div className="container-narrow">
            <p className="text-eyebrow mb-4">Pourquoi visiter {dest.name} ?</p>
            <h2 id="intro-title" className="text-display-md mb-6">
              {dest.name}, une destination d&apos;exception
            </h2>
            <p className="text-pretty leading-relaxed text-lg text-text-muted">{dest.intro}</p>
          </div>
        </section>

        {/* ── 3. Zones (Louxor — deux rives) ───────────────────── */}
        {dest.areas && dest.areas.length > 0 && (
          <section aria-labelledby="zones-title" className="section-y bg-parchment-gradient">
            <div className="container-luxury">
              <h2 id="zones-title" className="text-display-md">
                Les deux rives de {dest.name}
              </h2>
              <ul className="grid sm:grid-cols-2 gap-6 mt-8 list-none p-0">
                {dest.areas.map((area) => (
                  <li key={area.name} className="surface p-6 border-gold-accent">
                    <h3 className="font-display text-2xl text-gold">{area.name}</h3>
                    <p className="mt-3 text-pretty">{area.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── 4. À voir absolument ──────────────────────────────── */}
        <section
          aria-labelledby="highlights-title"
          className={`section-y ${dest.areas && dest.areas.length > 0 ? '' : 'bg-parchment-gradient'}`}
        >
          <div className="container-luxury">
            <p className="text-eyebrow mb-4">Incontournables</p>
            <h2 id="highlights-title" className="text-display-md">
              À voir absolument à {dest.name}
            </h2>
            <p className="text-text-muted mt-4 max-w-xl">
              Les sites et monuments à découvrir avec votre guide égyptologue francophone.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {dest.highlights.map((h, i) => (
                <li
                  key={h.name}
                  className="surface p-6 border-gold-accent group hover:shadow-lg transition-shadow duration-300"
                >
                  <span className="text-sm font-mono text-gold/60 font-medium">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-display text-xl mt-2 group-hover:text-gold transition-colors duration-300">
                    {h.name}
                  </h3>
                  <p className="text-caption mt-3">{h.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 5. Excursions disponibles ─────────────────────────── */}
        {relatedExcursions.length > 0 && (
          <section aria-labelledby="excursions-title" className="section-y bg-parchment-gradient">
            <div className="container-luxury">
              <p className="text-eyebrow mb-4">Programmes sur mesure</p>
              <h2 id="excursions-title" className="text-display-md">
                Excursions disponibles à {dest.name}
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
                {relatedExcursions.map((exc) => {
                  const href = EXCURSION_HREFS[exc.slug] ?? '/contact';
                  return (
                    <li key={exc.slug}>
                      <article className="card-luxury h-full flex flex-col">
                        <div className="aspect-card relative overflow-hidden rounded-t-xl img-zoom">
                          <Image
                            src={exc.hero.image}
                            alt={exc.name}
                            fill
                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                            className="object-cover"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-6 flex flex-col flex-1">
                          <span className="badge badge-gold">{exc.category}</span>
                          <h3 className="font-display text-xl mt-3 flex-1">{exc.name}</h3>
                          {exc.priceFrom && (
                            <p className="text-sm text-text-muted mt-1">{exc.priceFrom}</p>
                          )}
                          <Link
                            href={href}
                            className="btn btn-outline mt-4 inline-flex text-sm self-start"
                          >
                            Voir le programme →
                          </Link>
                        </div>
                      </article>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}

        {/* ── 6. Galerie photos ─────────────────────────────────── */}
        {dest.gallery && dest.gallery.length > 0 && (
          <section aria-labelledby="gallery-title" className="section-y bg-parchment-gradient">
            <div className="container-luxury">
              <p className="text-eyebrow mb-4">En images</p>
              <h2 id="gallery-title" className="text-display-md">
                {dest.name} en photos
              </h2>
              <p className="text-text-muted mt-3 max-w-xl">
                Quelques instants capturés lors de visites guidées privées à {dest.name}.
              </p>
              <PhotoGallery
                photos={dest.gallery.map((src) => ({
                  src,
                  alt: `${dest.name} — visite guidée privée avec guide francophone`,
                }))}
                columns={3}
                className="mt-10"
              />
            </div>
          </section>
        )}

        {/* ── 8. Informations pratiques ─────────────────────────── */}
        {pi && (
          <section aria-labelledby="pratique-title" className="section-y">
            <div className="container-luxury">
              <p className="text-eyebrow mb-4">Conseils du guide</p>
              <h2 id="pratique-title" className="text-display-md">
                Informations pratiques
              </h2>
              <div className="grid sm:grid-cols-3 gap-8 mt-10">
                <div className="surface p-6 border-gold-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Calendar className="text-gold flex-shrink-0" size={22} aria-hidden />
                    <h3 className="font-display text-lg">Meilleure période</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{pi.bestPeriod}</p>
                </div>
                <div className="surface p-6 border-gold-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="text-gold flex-shrink-0" size={22} aria-hidden />
                    <h3 className="font-display text-lg">Durée conseillée</h3>
                  </div>
                  <p className="text-text-muted text-sm leading-relaxed">{pi.daysRecommended}</p>
                </div>
                <div className="surface p-6 border-gold-accent">
                  <div className="flex items-center gap-3 mb-4">
                    <Lightbulb className="text-gold flex-shrink-0" size={22} aria-hidden />
                    <h3 className="font-display text-lg">Conseils du guide</h3>
                  </div>
                  <ul className="space-y-2 list-none p-0">
                    {pi.tips.map((tip, i) => (
                      <li key={i} className="flex gap-2 text-sm text-text-muted">
                        <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden>
                          ›
                        </span>
                        <span>{tip}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── 9. FAQ ────────────────────────────────────────────── */}
        {faq.length > 0 && (
          <section aria-labelledby="faq-title" className="section-y bg-parchment-gradient">
            <div className="container-narrow">
              <p className="text-eyebrow mb-4">Vos questions</p>
              <h2 id="faq-title" className="text-display-md">
                Questions fréquentes sur {dest.name}
              </h2>
              <dl className="mt-10">
                {faq.map((item, i) => (
                  <div
                    key={item.question}
                    className={`py-6 ${i > 0 ? 'border-t border-[var(--parchment)]' : ''}`}
                  >
                    <dt className="font-display text-xl font-medium text-ink">
                      {item.question}
                    </dt>
                    <dd className="mt-3 text-pretty text-text-muted leading-relaxed">
                      {item.answer}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </section>
        )}

        {/* ── 10. CTA fort ──────────────────────────────────────── */}
        <section aria-labelledby="cta-title" className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 id="cta-title" className="text-display-md text-white">
              Visiter {dest.name} avec un guide expert
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Programme sur mesure, transport inclus, guide égyptologue francophone diplômé.
              Devis gratuit sous 24 h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis gratuit
              </Link>
              <a
                href="https://wa.me/201002086724"
                className="btn btn-outline-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                WhatsApp →
              </a>
            </div>
          </div>
        </section>

        {/* ── 11. Maillage interne — autres destinations ────────── */}
        {otherDestinations.length > 0 && (
          <section aria-labelledby="autres-dest-title" className="section-y">
            <div className="container-luxury">
              <h2 id="autres-dest-title" className="text-display-md">
                Explorer d&apos;autres destinations
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
                {otherDestinations.map((d) => {
                  const href = DEST_HREFS[d.slug] ?? '#';
                  return (
                    <li key={d.slug}>
                      <Link
                        href={href}
                        className="block surface border-gold-accent group overflow-hidden rounded-xl"
                      >
                        <div className="aspect-[4/3] relative overflow-hidden">
                          <Image
                            src={d.hero.image}
                            alt={d.name}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 640px) 50vw, 25vw"
                            loading="lazy"
                          />
                        </div>
                        <div className="p-4">
                          <span className="font-display text-lg group-hover:text-gold transition-colors duration-200">
                            {d.name}
                          </span>
                        </div>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
