import Image from 'next/image';
import Link from 'next/link';
import { Clock, Users, Star, CheckCircle, XCircle, MapPin } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import type { Excursion, Destination, Review } from '@/lib/content';
import {
  schemaTravelAgency,
  schemaTouristTrip,
  schemaBreadcrumb,
  schemaFaqPage,
} from '@/lib/schema';

const DEST_HREFS: Record<string, string> = {
  louxor: '/louxor',
  caire: '/caire',
  assouan: '/assouan',
  hurghada: '/hurghada',
};

const WHATSAPP = '201002086724';

interface ExcursionTemplateProps {
  exc: Excursion;
  relatedDestinations: Destination[];
  reviews: Review[];
  path: string;
  /** ISO 8601 duration e.g. 'PT45M', 'PT8H', 'P5D' */
  schemaDuration?: string;
}

export function ExcursionTemplate({
  exc,
  relatedDestinations,
  reviews,
  path,
  schemaDuration,
}: ExcursionTemplateProps) {
  const faq = exc.faq ?? [];
  const firstDuration = exc.programs?.[0]?.duration;
  const multiProgram = (exc.programs?.length ?? 0) > 1;

  return (
    <>
      {/* ── Schema.org ────────────────────────────────────────── */}
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaTouristTrip({
          name: exc.name,
          description: exc.seo.description,
          path,
          image: exc.hero.image,
          ...(schemaDuration ? { duration: schemaDuration } : {}),
        })}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Excursions', path: '/excursions' },
          { name: exc.name, path },
        ])}
      />
      {faq.length > 0 && <JsonLd data={schemaFaqPage(faq)} />}

      <main id="main-content">
        {/* ── 1. Hero ───────────────────────────────────────────── */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src={exc.hero.image}
            alt={exc.name}
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li>
                <Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">
                  Accueil
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li>
                <Link href="/excursions" className="text-white/75 hover:text-white transition-colors drop-shadow">
                  Excursions
                </Link>
              </li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">
                {exc.name}
              </li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-16 flex flex-col items-start">
            <span className="badge badge-white mb-4 self-start">{exc.category}</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              {exc.name}
            </h1>
            {exc.hero.tagline && (
              <p className="text-gold mt-3 text-xl max-w-2xl">{exc.hero.tagline}</p>
            )}
          </div>
        </section>

        {/* ── 2. Barre de faits rapides ─────────────────────────── */}
        <div className="bg-nil-deep text-white py-5 border-b border-white/10">
          <div className="container-luxury flex flex-wrap gap-x-8 gap-y-3">
            {firstDuration && (
              <div className="flex items-center gap-2 text-sm">
                <Clock size={15} className="text-gold flex-shrink-0" aria-hidden />
                <span className="text-gold font-medium">Durée :</span>
                <span className="text-white/80">{firstDuration}</span>
              </div>
            )}
            {exc.priceFrom && (
              <div className="flex items-center gap-2 text-sm">
                <Star size={15} className="text-gold flex-shrink-0" aria-hidden />
                <span className="text-gold font-medium">Tarif :</span>
                <span className="text-white/80">{exc.priceFrom}</span>
              </div>
            )}
            {exc.difficulty && (
              <div className="flex items-center gap-2 text-sm">
                <Users size={15} className="text-gold flex-shrink-0" aria-hidden />
                <span className="text-gold font-medium">Niveau :</span>
                <span className="text-white/80">{exc.difficulty}</span>
              </div>
            )}
            <div className="flex items-center gap-2 text-sm">
              <MapPin size={15} className="text-gold flex-shrink-0" aria-hidden />
              <span className="text-gold font-medium">Disponibilité :</span>
              <span className="text-white/80">Toute l&apos;année — sur réservation</span>
            </div>
          </div>
        </div>

        {/* ── 3. Description ────────────────────────────────────── */}
        <section aria-labelledby="desc-title" className="section-y">
          <div className="container-narrow">
            <h2 id="desc-title" className="sr-only">
              Présentation
            </h2>
            <p className="text-pretty leading-relaxed text-lg">{exc.intro}</p>
            {exc.experience && (
              <p className="text-pretty leading-relaxed text-lg mt-6 text-text-muted">
                {exc.experience}
              </p>
            )}
          </div>
        </section>

        {/* ── 4. Programmes / Itinéraire ────────────────────────── */}
        {exc.programs && exc.programs.length > 0 && (
          <section aria-labelledby="programs-title" className="section-y bg-parchment-gradient">
            <div className="container-luxury">
              <p className="text-eyebrow mb-4">Déroulement</p>
              <h2 id="programs-title" className="text-display-md">
                {multiProgram ? 'Programmes disponibles' : "Programme de l'excursion"}
              </h2>
              <div className={`grid gap-8 mt-10 ${multiProgram ? 'lg:grid-cols-2' : ''}`}>
                {exc.programs.map((prog) => (
                  <article key={prog.title} className="surface-elevated p-8">
                    <h3 className="font-display text-2xl text-gold">{prog.title}</h3>
                    {prog.duration && (
                      <span className="badge badge-nil mt-3 inline-flex">{prog.duration}</span>
                    )}
                    {prog.description && (
                      <p className="mt-4 text-pretty text-text-muted">{prog.description}</p>
                    )}
                    {prog.items && prog.items.length > 0 && (
                      <ul className="mt-4 space-y-2 list-none p-0">
                        {prog.items.map((item, i) => (
                          <li key={i} className="flex gap-2 text-sm">
                            <span className="text-gold mt-0.5 flex-shrink-0" aria-hidden>
                              ›
                            </span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                    {prog.days && prog.days.length > 0 && (
                      <ol className="mt-6 space-y-5 list-none p-0">
                        {prog.days.map((day) => (
                          <li
                            key={day.label}
                            className="border-l-2 border-[var(--gold)] pl-4"
                          >
                            <h4 className="font-medium text-ink text-sm">{day.label}</h4>
                            {day.items.length > 0 && (
                              <ul className="mt-2 space-y-1 list-none p-0">
                                {day.items.map((item, i) => (
                                  <li key={i} className="text-sm text-text-muted flex gap-2">
                                    <span
                                      className="text-gold/50 mt-0.5 flex-shrink-0"
                                      aria-hidden
                                    >
                                      ·
                                    </span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </li>
                        ))}
                      </ol>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 5. Excursions à la journée ────────────────────────── */}
        {exc.dayTrips && exc.dayTrips.length > 0 && (
          <section aria-labelledby="daytrips-title" className="section-y">
            <div className="container-luxury">
              <p className="text-eyebrow mb-4">Depuis {exc.category}</p>
              <h2 id="daytrips-title" className="text-display-md">
                Excursions à la journée
              </h2>
              <div className="grid lg:grid-cols-2 gap-8 mt-10">
                {exc.dayTrips.map((trip) => (
                  <article key={trip.title} className="surface p-6 border-gold-accent">
                    <h3 className="font-display text-xl">{trip.title}</h3>
                    {trip.duration && (
                      <span className="badge badge-gold mt-2 inline-flex">{trip.duration}</span>
                    )}
                    {trip.description && (
                      <p className="mt-4 text-sm text-text-muted text-pretty leading-relaxed">
                        {trip.description}
                      </p>
                    )}
                  </article>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── 6. Options ────────────────────────────────────────── */}
        {exc.options && exc.options.length > 0 && (
          <section aria-labelledby="options-title" className="section-y bg-parchment-gradient">
            <div className="container-luxury">
              <h2 id="options-title" className="text-display-md">
                Options disponibles
              </h2>
              <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 list-none p-0">
                {exc.options.map((opt) => (
                  <li key={opt.name} className="surface p-6 border-gold-accent">
                    <h3 className="font-display text-lg">{opt.name}</h3>
                    <p className="text-caption mt-3 text-sm leading-relaxed">{opt.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}

        {/* ── 7. Inclus / Non inclus ────────────────────────────── */}
        {(exc.included || exc.excluded) && (
          <section
            aria-labelledby="inclus-title"
            className={`section-y ${exc.options && exc.options.length > 0 ? '' : 'bg-parchment-gradient'}`}
          >
            <div className="container-luxury">
              <h2 id="inclus-title" className="text-display-md">
                Ce qui est inclus
              </h2>
              <div className="grid sm:grid-cols-2 gap-8 mt-8">
                {exc.included && exc.included.length > 0 && (
                  <div className="surface p-6 border-gold-accent">
                    <h3 className="font-display text-lg mb-4 flex items-center gap-2 text-emerald-700">
                      <CheckCircle size={20} aria-hidden />
                      Inclus dans le tarif
                    </h3>
                    <ul className="space-y-3 list-none p-0">
                      {exc.included.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm">
                          <CheckCircle
                            size={16}
                            className="text-emerald-600 flex-shrink-0 mt-0.5"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                {exc.excluded && exc.excluded.length > 0 && (
                  <div className="surface p-6">
                    <h3 className="font-display text-lg text-text-muted mb-4 flex items-center gap-2">
                      <XCircle size={20} aria-hidden />
                      Non inclus
                    </h3>
                    <ul className="space-y-3 list-none p-0">
                      {exc.excluded.map((item, i) => (
                        <li key={i} className="flex gap-3 text-sm text-text-muted">
                          <XCircle
                            size={16}
                            className="text-text-muted/50 flex-shrink-0 mt-0.5"
                            aria-hidden
                          />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* ── 8. FAQ ────────────────────────────────────────────── */}
        {faq.length > 0 && (
          <section aria-labelledby="faq-exc-title" className="section-y bg-parchment-gradient">
            <div className="container-narrow">
              <p className="text-eyebrow mb-4">Questions fréquentes</p>
              <h2 id="faq-exc-title" className="text-display-md">
                Tout savoir sur {exc.name}
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

        {/* ── 9. Avis clients ───────────────────────────────────── */}
        {reviews.length > 0 && (
          <section aria-labelledby="avis-exc-title" className="section-y">
            <div className="container-luxury">
              <p className="text-eyebrow mb-4">Témoignages</p>
              <h2 id="avis-exc-title" className="text-display-md">
                Ils nous font confiance
              </h2>
              <ul className="grid sm:grid-cols-3 gap-6 mt-8 list-none p-0">
                {reviews.slice(0, 3).map((review, i) => (
                  <li key={i} className="surface-elevated p-6">
                    <div
                      className="flex gap-0.5 mb-3"
                      aria-label={`${review.rating ?? 5} étoiles sur 5`}
                    >
                      {Array.from({ length: review.rating ?? 5 }).map((_, j) => (
                        <Star
                          key={j}
                          size={14}
                          className="text-gold fill-current"
                          aria-hidden
                        />
                      ))}
                    </div>
                    <blockquote className="text-sm text-pretty text-text-muted leading-relaxed">
                      &ldquo;{review.text}&rdquo;
                    </blockquote>
                    <footer className="mt-4 flex items-baseline gap-2">
                      <span className="font-medium text-sm">{review.author}</span>
                      {review.location && (
                        <span className="text-caption text-xs">— {review.location}</span>
                      )}
                    </footer>
                  </li>
                ))}
              </ul>
              <div className="mt-8 text-center">
                <Link
                  href="/avis"
                  className="text-gold hover:text-gold/80 text-sm font-medium transition-colors"
                >
                  Lire tous les avis →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── 10. CTA réservation ───────────────────────────────── */}
        <section aria-labelledby="cta-exc-title" className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 id="cta-exc-title" className="text-display-md text-white">
              Réserver — {exc.name}
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Programme sur mesure, devis gratuit sous 24 h. Guide francophone disponible toute
              l&apos;année.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis gratuit
              </Link>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                className="btn btn-outline-white"
                target="_blank"
                rel="noopener noreferrer"
              >
                Réserver par WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* ── 11. Maillage — destinations associées ─────────────── */}
        {relatedDestinations.length > 0 && (
          <section aria-labelledby="dest-assoc-title" className="section-y">
            <div className="container-luxury">
              <h2 id="dest-assoc-title" className="text-display-md">
                Destinations associées
              </h2>
              <ul className="flex flex-wrap gap-3 mt-6 list-none p-0">
                {relatedDestinations.map((d) => (
                  <li key={d.slug}>
                    <Link
                      href={DEST_HREFS[d.slug] ?? '#'}
                      className="badge badge-nil hover:text-gold hover:border-gold transition-colors duration-200"
                    >
                      {d.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
