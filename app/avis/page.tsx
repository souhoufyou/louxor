/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaAggregateRating, schemaBreadcrumb } from '@/lib/schema';
import { getReviews } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Avis clients — Guide Francophone Louxor',
    description:
      'Lisez les avis authentiques de nos clients sur leurs voyages en Égypte avec Hisham, guide égyptologue francophone. Plus de 20 avis 5 étoiles.',
    path: '/avis',
  });
}

const STARS = [1, 2, 3, 4, 5];

export default async function AvisPage() {
  const reviews = await getReviews();
  const rated = reviews.filter((r) => r.rating != null && r.rating > 0);
  const avg = rated.length
    ? (rated.reduce((s, r) => s + (r.rating ?? 0), 0) / rated.length).toFixed(1)
    : '5.0';

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaAggregateRating(
          rated.map((r) => ({
            author: r.author,
            rating: r.rating ?? 5,
            text: r.text,
            date: r.date,
          })),
        )}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'Avis clients', path: '/avis' }])} />

      <main id="main-content">
        {/* ── Header ──────────────────────────────────────────── */}
        <section aria-labelledby="avis-title" className="pt-16 pb-16 bg-parchment-gradient">
          <div className="container-narrow text-center">
            <nav aria-label="Fil d'Ariane" className="mb-8 text-left">
              <ol className="flex gap-2 text-caption list-none p-0">
                <li><Link href="/" className="hover:text-gold transition-colors">Accueil</Link></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-gold">Avis clients</li>
              </ol>
            </nav>
            <h1 id="avis-title" className="text-display-xl text-balance">
              Ce que disent nos clients
            </h1>
            <div className="flex items-center justify-center gap-3 mt-6" aria-label={`Note moyenne : ${avg} sur 5`}>
              <div className="flex gap-1" aria-hidden="true">
                {STARS.map((s) => (
                  <svg key={s} className="w-6 h-6 text-gold fill-current" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              <span className="font-display text-2xl text-gold-accessible">{avg}</span>
              <span className="text-caption">/ 5 — {rated.length} avis</span>
            </div>
          </div>
        </section>

        {/* ── Liste des avis ──────────────────────────────────── */}
        <section aria-labelledby="reviews-list-title" className="section-y">
          <div className="container-luxury">
            <h2 id="reviews-list-title" className="sr-only">Liste des avis clients</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 list-none p-0">
              {reviews.map((review, i) => (
                <li key={i}>
                  <article className="surface-elevated p-6 h-full flex flex-col">
                    {/* Note */}
                    {review.rating && (
                      <div
                        className="flex gap-0.5 mb-3"
                        aria-label={`Note : ${review.rating} sur 5`}
                      >
                        {STARS.map((s) => (
                          <svg
                            key={s}
                            className={`w-4 h-4 fill-current ${s <= review.rating! ? 'text-gold' : 'text-parchment'}`}
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                          >
                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                          </svg>
                        ))}
                      </div>
                    )}

                    {/* Texte */}
                    <blockquote className="flex-1">
                      <p className="text-pretty leading-relaxed">"{review.text}"</p>
                    </blockquote>

                    {/* Auteur */}
                    <footer className="mt-4 pt-4 border-t border-border">
                      <cite className="not-italic font-medium">{review.author}</cite>
                      <div className="flex gap-3 mt-1 flex-wrap">
                        {review.location && (
                          <span className="text-caption">{review.location}</span>
                        )}
                        {review.date && (
                          <time className="text-caption" dateTime={review.date}>
                            {review.date}
                          </time>
                        )}
                      </div>
                    </footer>
                  </article>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section aria-labelledby="cta-avis" className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 id="cta-avis" className="text-display-md text-white">
              Prêt à vivre votre propre aventure en Égypte ?
            </h2>
            <p className="text-gold-muted mt-4">
              Rejoignez nos clients satisfaits et créez vos propres souvenirs inoubliables.
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
