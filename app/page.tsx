/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  GraduationCap,
  Award,
  ShieldCheck,
  Star,
  Users,
  ArrowRight,
  Phone,
  Mail,
  MessageCircle,
  CheckCircle,
} from 'lucide-react';
import { PhotoGallery } from '@/components/PhotoGallery';
import { JsonLd } from '@/components/JsonLd';
import { ScrollReveal } from '@/components/ScrollReveal';
import { ContactForm } from '@/components/ContactForm';
import { GoogleReviewsButton } from '@/components/GoogleReviewsButton';
import { GoogleTrustBadge } from '@/components/GoogleTrustBadge';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaWebPage, schemaAggregateRating, schemaFaqPage } from '@/lib/schema';
import { getSite, getExcursions, getReviews } from '@/lib/content';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Guide Francophone en Égypte — Hisham, Égyptologue Privé',
    description:
      'Hisham, guide égyptologue francophone diplômé à Louxor. Visites 100 % privées : Vallée des Rois, Karnak, Le Caire, Assouan, Mer Rouge. Devis gratuit sous 24 h.',
    path: '/',
    ogImage: '/images/legacy/FB_IMG_1534852849841-fi17948239x490-b8d51657.jpg',
  });
}

/* ── Photos Hisham avec clients ─────────────────────────────── */
const HISHAM_CLIENT_PHOTOS = [
  {
    src: '/images/hisham/optimized/hisham-clients-vallee-des-rois-800w.webp',
    alt: 'Hisham, guide francophone, avec des clients devant la Vallée des Rois',
    caption: 'Vallée des Rois',
  },
  {
    src: '/images/hisham/optimized/hisham-clients-temple-philae-800w.webp',
    alt: 'Hisham, guide francophone, avec une famille devant le temple de Philae',
    caption: 'Temple de Philae',
  },
  {
    src: '/images/hisham/optimized/hisham-clients-colosses-memnon-800w.webp',
    alt: 'Hisham, guide francophone, selfie avec des clients aux Colosses de Memnon',
    caption: 'Colosses de Memnon',
  },
  {
    src: '/images/hisham/optimized/hisham-clients-corniche-louxor-800w.webp',
    alt: 'Hisham, guide francophone, avec des clients sur la corniche de Louxor',
    caption: 'Corniche de Louxor',
  },
];

/* ── FAQ — requêtes longue traîne ───────────────────────────── */
const HOME_FAQ = [
  {
    question: 'Combien coûte un guide francophone privé en Égypte ?',
    answer:
      "Le tarif dépend de la durée et du programme : à titre indicatif, une demi-journée guidée à Louxor commence à partir de 60 € par personne, avec transport climatisé, entrées des sites principaux et guide égyptologue inclus. Chaque devis est gratuit, personnalisé et sans engagement — vous savez exactement ce qui est compris avant de réserver.",
    link: { label: 'Voir les programmes à Louxor', href: '/excursions/louxor' },
  },
  {
    question: 'Comment réserver une excursion avec un guide francophone à Louxor ?',
    answer:
      "Il suffit de me contacter par WhatsApp, par téléphone ou via le formulaire de contact. Je réponds personnellement sous 24 h avec un programme adapté à vos dates, votre rythme et votre budget. Aucun acompte n'est demandé pour un devis.",
    link: { label: 'Demander un devis gratuit', href: '/contact' },
  },
  {
    question: 'Est-il sûr de voyager en Égypte en 2026 ?',
    answer:
      "Oui. Les sites touristiques de Louxor, du Caire, d'Assouan et de la Mer Rouge sont sécurisés et accueillent des millions de visiteurs chaque année. En visite privée, vous êtes accompagné du premier au dernier jour : transferts, billets, itinéraires — je m'occupe de tout sur place.",
    link: { label: 'Lire mon guide sécurité 2026', href: '/blog/voyager-egypte-2026-securite' },
  },
  {
    question: "Quelle est la meilleure période pour visiter Louxor et l'Égypte ?",
    answer:
      "D'octobre à avril, les températures sont idéales pour visiter les temples et la Vallée des Rois. L'été est très chaud mais tout à fait envisageable en commençant les visites tôt le matin. Les croisières sur le Nil, elles, se font toute l'année.",
    link: { label: 'Découvrir la meilleure période', href: '/blog/meilleure-periode-egypte' },
  },
  {
    question: 'Proposez-vous des excursions depuis Hurghada et la Mer Rouge vers Louxor ?',
    answer:
      "Oui, j'organise des excursions privées d'une journée vers Louxor au départ d'Hurghada, Makadi Bay, Safaga, Soma Bay et Marsa Alam, ainsi que des excursions vers Le Caire et les pyramides. Prise en charge à votre hôtel, véhicule climatisé et guide francophone toute la journée.",
    link: { label: "Voir l'excursion Hurghada → Louxor", href: '/excursions/depuis-hurghada-vers-louxor' },
  },
  {
    question: 'Quelle est la différence entre une visite privée et une excursion en groupe ?',
    answer:
      "En groupe, vous suivez un horaire imposé avec 30 à 50 personnes. En privé, le programme est construit pour vous : vous choisissez les sites, le rythme et les pauses, et votre guide égyptologue répond à toutes vos questions en français. C'est la garantie d'une visite plus riche et sans stress.",
    link: { label: 'En savoir plus sur ma façon de guider', href: '/a-propos' },
  },
];

/* ── Données ────────────────────────────────────────────────── */

const EXCURSIONS_GRID = [
  {
    slug: 'vallee-des-rois',
    name: 'Vallée des Rois',
    tagline: 'Le secret des pharaons dévoilé',
    image: '/images/legacy/FB_IMG_1567543997433-fi18282470x490-c5462238.jpg',
    path: '/louxor/vallee-des-rois',
    big: true,
  },
  {
    slug: 'mer-rouge',
    name: 'Mer Rouge',
    tagline: 'Excursions, plongée & désert',
    image: '/images/legacy/470419455_mg-exterior-3-fi3510029x479-c2d93bfd.jpg',
    path: '/mer-rouge',
    big: true,
  },
  {
    slug: 'croisiere-nil',
    name: 'Croisière sur le Nil',
    tagline: 'De Louxor à Assouan en dahabiya',
    image: '/images/legacy/nil2-fi3487452x2000-30684d8d.jpg',
    path: '/croisieres-en-egypte-sur-le-nil',
    big: true,
  },
  {
    slug: 'caire',
    name: 'Le Caire & Pyramides',
    tagline: 'Les seules Merveilles encore debout',
    image: '/images/legacy/FB_IMG_1566081137371-fi20116767x550-8b286d11.jpg',
    path: '/caire',
    big: false,
  },
  {
    slug: 'assouan',
    name: 'Assouan & Abou Simbel',
    tagline: 'Aux portes de la Nubie',
    image: '/images/legacy/FB_IMG_1534852846907-fi20116508x540-5496e9c6.jpg',
    path: '/assouan',
    big: false,
  },
  {
    slug: 'montgolfiere',
    name: 'Montgolfière',
    tagline: 'Louxor vue du ciel au lever du soleil',
    image: '/images/legacy/IMG_0445-20-2-fi11908021x500-5c17ea9d.jpg',
    path: '/louxor/montgolfiere',
    big: false,
  },
];

/* ── Page ──────────────────────────────────────────────────── */

export default async function HomePage() {
  const [site, excursions, reviews] = await Promise.all([
    getSite(),
    getExcursions(),
    getReviews(),
  ]);

  const featuredReviews = reviews.slice(0, 3);
  const ratedReviews = reviews
    .filter((r) => r.rating)
    .map((r) => ({ author: r.author, rating: r.rating!, text: r.text, date: r.date }));

  // Note moyenne et volume pour le badge de confiance dans le hero
  const avgRating = ratedReviews.length
    ? ratedReviews.reduce((s, r) => s + r.rating, 0) / ratedReviews.length
    : 5;

  void excursions; // utilisé pour le comptage SEO si besoin

  return (
    <>
      {/* ── Schema.org ──────────────────────────────────────── */}
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaWebPage({
          name: `${site.name} — Guide Francophone Privé en Égypte`,
          description: site.description,
          path: '/',
        })}
      />
      {ratedReviews.length > 0 && <JsonLd data={schemaAggregateRating(ratedReviews)} />}
      <JsonLd data={schemaFaqPage(HOME_FAQ.map(({ question, answer }) => ({ question, answer })))} />

      <main id="main-content">

        {/* ══════════════════════════════════════════════════════
            1. HERO — Identité personnelle immédiate
        ══════════════════════════════════════════════════════ */}
        <section className="hero-section" aria-labelledby="hero-title">
          <div className="hero-bg">
            {/* Photo — montgolfière au lever du soleil, lumineuse et iconique de Louxor */}
            <Image
              src="/images/destinations/louxor/temple-louxor-nuit-illumine.webp"
              alt="Statue monumentale d'un pharaon entre les colonnes massives du temple à Louxor"
              fill
              priority
              fetchPriority="high"
              sizes="100vw"
              className="object-cover object-center"
              quality={90}
            />

            {/* Voile gauche — lisibilité du texte sans assombrir la photo */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(100deg, rgba(12,18,28,0.62) 0%, rgba(12,18,28,0.32) 38%, rgba(12,18,28,0.05) 60%, transparent 75%)' }}
              aria-hidden="true"
            />

            {/* Gradient bas — transition douce vers la section suivante */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to top, rgba(12,18,28,0.42) 0%, transparent 26%)' }}
              aria-hidden="true"
            />

            {/* Gradient haut — lisibilité navbar */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(12,18,28,0.35) 0%, transparent 20%)' }}
              aria-hidden="true"
            />
          </div>

          <div className="hero-content container-luxury">
            <div className="max-w-2xl">
              <div className="animate-fade-in">
                <span className="inline-flex items-center gap-2 rounded-full border border-gold/60 bg-black/30 backdrop-blur-sm px-4 py-2 text-[0.7rem] font-medium uppercase tracking-[0.18em] text-gold-muted">
                  <ShieldCheck size={13} className="text-gold" aria-hidden="true" />
                  Guide officiel francophone · Égyptologue diplômé
                </span>
              </div>

              <h1
                id="hero-title"
                className="text-display-lg text-white mt-5 text-balance leading-[1.05] animate-fade-up delay-100"
                style={{ textShadow: '0 2px 24px rgba(0,0,0,0.35)' }}
              >
                Votre{' '}
                <span className="text-gold-light italic">guide francophone privé</span>{' '}
                en Égypte
              </h1>

              <p
                className="text-white/90 text-lg sm:text-xl mt-6 max-w-xl leading-relaxed text-pretty animate-fade-up delay-200"
                style={{ textShadow: '0 1px 12px rgba(0,0,0,0.35)' }}
              >
                Je m'appelle <strong className="text-white">Hisham</strong>, égyptologue installé à
                Louxor depuis plus de 15 ans. Je vous fais découvrir l'Égypte en privé, en
                français, à votre rythme.
              </p>

              <div className="mt-7 animate-fade-up delay-250">
                <GoogleTrustBadge rating={avgRating} theme="light" />
              </div>

              <div className="flex flex-wrap gap-4 mt-7 animate-fade-up delay-300">
                <Link
                  href="/contact"
                  className="btn btn-primary px-8 py-4 text-sm flex items-center gap-2 shadow-lg"
                >
                  Demander mon devis gratuit
                </Link>
                <Link
                  href="/excursions"
                  className="btn btn-outline-white px-8 py-4 text-sm backdrop-blur-sm bg-black/15"
                >
                  Voir les excursions
                </Link>
              </div>

            </div>
          </div>

          <div className="scroll-indicator" aria-hidden="true">
            <span className="scroll-indicator-line" />
          </div>
        </section>

        {/* ── Barre de confiance chevauchante ─────────────────── */}
        <div className="container-luxury relative z-10 -mt-16">
          <ul
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-6 bg-white rounded-2xl px-6 py-7 list-none m-0 shadow-[0_24px_64px_rgba(15,26,36,0.18),0_8px_24px_rgba(15,26,36,0.08)]"
            aria-label="Pourquoi me faire confiance"
          >
            {[
              { icon: <Star size={22} className="text-gold fill-gold" />, value: '5/5', label: 'Avis clients vérifiés' },
              { icon: <Users size={22} className="text-gold" />, value: 'Des centaines', label: 'de voyageurs accompagnés' },
              { icon: <Award size={22} className="text-gold" />, value: '15 ans', label: "d'expérience en Égypte" },
              { icon: <ShieldCheck size={22} className="text-gold" />, value: 'Guide officiel', label: 'certifié & diplômé' },
              { icon: <CheckCircle size={22} className="text-gold" />, value: '100 % privé', label: 'sur mesure, sans groupe' },
            ].map((item) => (
              <li key={item.value} className="flex items-center gap-3 px-2 lg:px-4">
                <span className="flex-shrink-0 w-11 h-11 flex items-center justify-center rounded-full bg-gold/10">
                  {item.icon}
                </span>
                <span className="leading-snug">
                  <span className="block font-semibold text-ink text-[0.95rem]">{item.value}</span>
                  <span className="block text-text-muted text-xs">{item.label}</span>
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* ══════════════════════════════════════════════════════
            2. PRÉSENTATION DU GUIDE
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="guide-title" className="section-y-lg bg-parchment-gradient">
          <div className="container-luxury">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

              {/* Photo portrait */}
              <ScrollReveal direction="left">
                <div className="relative mx-auto lg:mx-0 max-w-sm">
                  {/* Accent doré décalé */}
                  <div
                    className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl"
                    style={{ background: 'var(--gold)', opacity: 0.15 }}
                  />
                  {/* Cadre photo */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '4/5' }}>
                    <Image
                      src="/images/hisham/optimized/hisham-guide-francophone-louxor-full.webp"
                      alt="Hisham, guide égyptologue francophone à Louxor, Égypte"
                      fill
                      sizes="(max-width: 1024px) 90vw, 420px"
                      quality={95}
                      className="object-cover object-top"
                      loading="lazy"
                    />
                    <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />
                    {/* Nom en bas */}
                    <div className="absolute bottom-0 inset-x-0 p-6">
                      <p className="font-display text-2xl text-white leading-tight drop-shadow-md">Hisham</p>
                      <p className="text-gold text-sm mt-0.5 drop-shadow-md">Guide Égyptologue · Louxor</p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>

              {/* Texte */}
              <ScrollReveal direction="right">
                <span className="text-eyebrow">Qui suis-je ?</span>
                <h2
                  id="guide-title"
                  className="text-display-md mt-3 text-balance"
                >
                  Hisham, votre guide à Louxor
                </h2>
                <span className="divider-gold mt-5" />

                <p className="mt-6 text-pretty leading-relaxed text-lg">
                  {site.guide.bio}
                </p>
                <p className="mt-4 text-text-muted text-pretty leading-relaxed">
                  {site.guide.approach}
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-3 mt-6">
                  <span className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm font-medium text-gold-accessible">
                    <GraduationCap size={14} className="text-gold" />
                    Diplômé en égyptologie
                  </span>
                  <span className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm font-medium text-gold-accessible">
                    <Award size={14} className="text-gold" />
                    15 ans d'expérience
                  </span>
                  <span className="flex items-center gap-2 bg-gold/10 border border-gold/30 rounded-full px-4 py-1.5 text-sm font-medium text-gold-accessible">
                    <ShieldCheck size={14} className="text-gold" />
                    Guide officiel certifié
                  </span>
                </div>

                <blockquote className="mt-6 border-l-4 border-gold pl-5 italic text-text-muted">
                  « Parce que j'aime mon pays, mon métier et le contact avec les gens, je propose à
                  mes clients des découvertes passionnantes à travers toute l'Égypte. »
                </blockquote>

                <Link href="/a-propos" className="btn btn-outline mt-8 inline-flex items-center gap-2">
                  En savoir plus sur moi <ArrowRight size={14} />
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            3. DIFFÉRENCE VS AGENCE — 3 colonnes
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="difference-title" className="section-y">
          <div className="container-luxury">
            <ScrollReveal className="text-center">
              <span className="text-eyebrow">Pourquoi choisir un guide privé ?</span>
              <h2 id="difference-title" className="text-display-md mt-3 text-balance">
                Avec moi, vous ne serez jamais<br className="hidden sm:block" /> un numéro dans un groupe.
              </h2>
              <span className="divider-gold-center mt-4" />
            </ScrollReveal>

            <ul className="grid sm:grid-cols-3 gap-8 mt-14 list-none p-0">
              {[
                {
                  icon: <Users size={36} className="text-gold" />,
                  title: 'Visites 100% privées',
                  body: "Jamais en groupe. Avec moi, vous avez toute mon attention. Votre famille, votre couple, vos amis — et personne d'autre.",
                  delay: 0,
                },
                {
                  icon: <ShieldCheck size={36} className="text-gold" />,
                  title: 'Sur mesure',
                  body: "Votre programme est créé spécialement pour vous : votre rythme, vos intérêts, vos envies. Je m'adapte à chaque visiteur.",
                  delay: 120,
                },
                {
                  icon: <CheckCircle size={36} className="text-gold" />,
                  title: 'Sans intermédiaire',
                  body: "Vous réservez directement avec moi. Pas d'agence, pas de commission cachée. Un devis transparent, une relation directe.",
                  delay: 240,
                },
              ].map((item) => (
                <li key={item.title}>
                  <ScrollReveal delay={item.delay} direction="up">
                    <div className="surface-elevated p-8 h-full text-center rounded-xl hover-lift">
                      <div className="w-16 h-16 mx-auto flex items-center justify-center bg-gold/10 rounded-2xl mb-6">
                        {item.icon}
                      </div>
                      <h3 className="font-display text-2xl">{item.title}</h3>
                      <p className="text-text-muted mt-4 leading-relaxed text-pretty">
                        {item.body}
                      </p>
                    </div>
                  </ScrollReveal>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            4. MES EXCURSIONS — Grille asymétrique
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="excursions-title" className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <ScrollReveal className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
              <div>
                <span className="text-eyebrow">Ce que je propose</span>
                <h2 id="excursions-title" className="text-display-md mt-3 text-balance">
                  Les expériences que je propose
                </h2>
                <span className="divider-gold mt-4" />
              </div>
              <Link href="/excursions" className="btn btn-outline flex-shrink-0">
                Voir toutes mes excursions
              </Link>
            </ScrollReveal>

            {/* Grille 3 grandes + 3 petites */}
            <div className="mt-10 grid gap-5">
              {/* Rangée 1 : 3 grandes cards */}
              <ul className="grid sm:grid-cols-3 gap-5 list-none p-0">
                {EXCURSIONS_GRID.filter((e) => e.big).map((exc, i) => (
                  <li key={exc.slug}>
                    <ScrollReveal delay={i * 80}>
                      <article className="card-luxury group h-full">
                        <Link href={exc.path} className="block h-full">
                          <div className="relative aspect-[4/3] img-zoom overflow-hidden">
                            <Image
                              src={exc.image}
                              alt={exc.name}
                              fill
                              sizes="(max-width:640px) 100vw, 33vw"
                              className="object-cover object-center"
                              loading={i === 0 ? 'eager' : 'lazy'}
                            />
                            <div className="absolute inset-0 overlay-nil" />
                            <div className="absolute bottom-0 left-0 p-5">
                              <h3 className="font-display text-white text-2xl">{exc.name}</h3>
                              <p className="text-white/70 text-sm mt-1">{exc.tagline}</p>
                              <span className="inline-flex items-center gap-1.5 text-gold text-xs font-medium tracking-wide uppercase mt-3 group-hover:gap-2.5 transition-all">
                                Voir avec moi <ArrowRight size={11} />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>
              {/* Rangée 2 : 3 petites cards */}
              <ul className="grid sm:grid-cols-3 gap-5 list-none p-0">
                {EXCURSIONS_GRID.filter((e) => !e.big).map((exc, i) => (
                  <li key={exc.slug}>
                    <ScrollReveal delay={i * 80 + 240}>
                      <article className="card-luxury group h-full">
                        <Link href={exc.path} className="block h-full">
                          <div className="relative aspect-video img-zoom overflow-hidden">
                            <Image
                              src={exc.image}
                              alt={exc.name}
                              fill
                              sizes="(max-width:640px) 100vw, 33vw"
                              className="object-cover object-center"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 overlay-nil" />
                            <div className="absolute bottom-0 left-0 p-4">
                              <h3 className="font-display text-white text-xl">{exc.name}</h3>
                              <p className="text-white/70 text-xs mt-1">{exc.tagline}</p>
                              <span className="inline-flex items-center gap-1.5 text-gold text-xs font-medium tracking-wide uppercase mt-2 group-hover:gap-2.5 transition-all">
                                Voir avec moi <ArrowRight size={10} />
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    </ScrollReveal>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            5. TÉMOIGNAGES CLIENTS
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="avis-title" className="section-y bg-luxury-gradient">
          <div className="container-luxury">
            <ScrollReveal className="text-center">
              <span className="text-eyebrow text-gold">Ce que disent mes clients</span>
              <h2 id="avis-title" className="text-display-md text-white mt-3 text-balance">
                Ils sont venus, ils en parlent
              </h2>
              <div className="flex items-center justify-center gap-2 mt-4">
                <span className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={18} className="text-gold fill-gold" />
                  ))}
                </span>
                <span className="text-gold font-semibold">5/5</span>
                <span className="text-white/50 text-sm">— {reviews.length} avis authentiques</span>
              </div>
            </ScrollReveal>

            <div className="mt-10">
              <PhotoGallery
                photos={HISHAM_CLIENT_PHOTOS}
                columns={4}
                className="mb-2"
              />
            </div>

            <ul className="grid sm:grid-cols-3 gap-6 mt-12 list-none p-0">
              {featuredReviews.map((review, i) => (
                <li key={i}>
                  <ScrollReveal delay={i * 100}>
                    <blockquote
                      className="glass h-full flex flex-col p-7 rounded-xl"
                      itemScope
                      itemType="https://schema.org/Review"
                    >
                      <div className="flex gap-0.5 mb-4" aria-label={`${review.rating} étoiles sur 5`}>
                        {[...Array(review.rating ?? 5)].map((_, j) => (
                          <Star key={j} size={14} className="text-gold fill-gold" />
                        ))}
                      </div>
                      <p
                        className="text-white/85 leading-relaxed flex-1 text-sm sm:text-base text-pretty"
                        itemProp="reviewBody"
                      >
                        « {review.text} »
                      </p>
                      <footer className="mt-5 pt-4 border-t border-white/10">
                        <cite
                          className="not-italic font-semibold text-white text-sm"
                          itemProp="author"
                          itemScope
                          itemType="https://schema.org/Person"
                        >
                          <span itemProp="name">{review.author}</span>
                        </cite>
                        {review.location && (
                          <span className="text-white/45 text-xs ml-2">— {review.location}</span>
                        )}
                      </footer>
                    </blockquote>
                  </ScrollReveal>
                </li>
              ))}
            </ul>

            <ScrollReveal className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link href="/avis" className="btn btn-outline-white">
                Voir tous mes avis →
              </Link>
              <GoogleReviewsButton variant="outline-white">Voir sur Google</GoogleReviewsButton>
            </ScrollReveal>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            6. FAQ — Questions fréquentes (SEO longue traîne)
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="faq-title" className="section-y bg-parchment-gradient">
          <div className="container-narrow">
            <ScrollReveal className="text-center">
              <span className="text-eyebrow">Questions fréquentes</span>
              <h2 id="faq-title" className="text-display-md mt-3 text-balance">
                Tout savoir avant votre voyage en Égypte
              </h2>
              <span className="divider-gold-center mt-4" />
            </ScrollReveal>

            <div className="mt-10 space-y-4">
              {HOME_FAQ.map((faq, i) => (
                <ScrollReveal key={faq.question} delay={i * 60}>
                  <details className="surface-elevated rounded-xl group">
                    <summary className="flex items-center justify-between gap-4 cursor-pointer list-none p-6 font-display text-lg sm:text-xl">
                      {faq.question}
                      <span
                        className="flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gold/10 text-gold-accessible text-xl leading-none transition-transform duration-300 group-open:rotate-45"
                        aria-hidden="true"
                      >
                        +
                      </span>
                    </summary>
                    <div className="px-6 pb-6 -mt-1">
                      <p className="text-text-muted leading-relaxed text-pretty">{faq.answer}</p>
                      <Link
                        href={faq.link.href}
                        className="inline-flex items-center gap-1.5 mt-3 text-sm font-medium text-gold-accessible hover:text-gold-dark transition-colors"
                      >
                        {faq.link.label} <ArrowRight size={13} />
                      </Link>
                    </div>
                  </details>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════
            7. CONTACT HUMAIN ET DIRECT
        ══════════════════════════════════════════════════════ */}
        <section aria-labelledby="contact-title" className="section-y-lg bg-luxury-gradient relative overflow-hidden">
          <div className="container-luxury relative">
            <ScrollReveal className="text-center mb-12">
              <span className="text-eyebrow text-gold">Planifions votre voyage</span>
              <h2 id="contact-title" className="text-display-md text-white mt-3 text-balance">
                Planifions votre voyage ensemble
              </h2>
              <p className="text-white/65 mt-4 max-w-xl mx-auto">
                Je réponds personnellement à chaque message sous 24h.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
              {/* Formulaire */}
              <ScrollReveal direction="left">
                <div className="glass-dark rounded-2xl p-6 sm:p-8">
                  <h3 className="font-display text-2xl text-white mb-6">
                    Décrivez votre projet
                  </h3>
                  <ContactForm />
                </div>
              </ScrollReveal>

              {/* Contact direct */}
              <ScrollReveal direction="right" delay={150}>
                <div className="flex flex-col gap-6">
                  <a
                    href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20organiser%20un%20voyage%20en%20%C3%89gypte."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#1aad56] text-white rounded-xl p-5 text-lg font-semibold transition-colors shadow-lg"
                  >
                    <MessageCircle size={24} />
                    Écrire sur WhatsApp
                  </a>

                  <div className="glass-dark rounded-xl p-6 flex flex-col gap-4">
                    <a
                      href="tel:+201002086724"
                      className="flex items-center gap-3 text-white hover:text-gold transition-colors"
                    >
                      <Phone size={18} className="text-gold flex-shrink-0" />
                      <span>+20 100 208 6724</span>
                    </a>
                    <a
                      href="mailto:guidefrancophonelouxor@gmail.com"
                      className="flex items-center gap-3 text-white hover:text-gold transition-colors"
                    >
                      <Mail size={18} className="text-gold flex-shrink-0" />
                      <span className="break-all">guidefrancophonelouxor@gmail.com</span>
                    </a>
                  </div>

                  <ul className="space-y-3 list-none p-0">
                    {[
                      'Je réponds personnellement à chaque message',
                      'Aucun acompte à la demande de devis',
                      'Programme ajustable jusqu\'à votre départ',
                      'Assistance 7j/7 pendant le séjour',
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-white/70 text-sm">
                        <Star size={14} className="text-gold fill-gold flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

      </main>
    </>
  );
}
