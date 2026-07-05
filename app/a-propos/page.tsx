/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { GraduationCap, Award, Globe, Users, Clock, Star } from 'lucide-react';
import { PhotoGallery } from '@/components/PhotoGallery';
import type { GalleryPhoto } from '@/components/PhotoGallery';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb, schemaWebPage, schemaPerson, schemaFaqPage } from '@/lib/schema';
import { getSite, getReviews } from '@/lib/content';
import { SITE_URL } from '@/lib/seo';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'À propos de Hisham — Guide égyptologue francophone depuis 15 ans',
    description:
      "Hisham, guide égyptologue francophone diplômé de l'Institut du Sinaï, vous accompagne en Égypte depuis plus de 15 ans. Découvrez son parcours, ses diplômes et sa philosophie du voyage.",
    path: '/a-propos',
  });
}

const CERTIFICATIONS = [
  {
    icon: GraduationCap,
    title: "Diplôme d’égyptologie",
    detail: "Licence universitaire — Institut d’Études Supérieures du Sinaï",
    description:
      "Formation académique rigoureuse couvrant l’histoire pharaonique, l’hiéroglyphique, l’archéologie et la religion égyptienne antique sur 4 000 ans de civilisation.",
  },
  {
    icon: Award,
    title: "Licence officielle de guide",
    detail: "Ministère du Tourisme et des Antiquités — Égypte",
    description:
      "Habilitation officielle délivrée par l’État égyptien permettant d’exercer légalement la profession de guide touristique agréé sur l’ensemble du territoire.",
  },
  {
    icon: Globe,
    title: "Trilingue confirmé",
    detail: "Français · Arabe · Anglais",
    description:
      "Hisham parle un français courant et idiomatique, acquis au contact de millions de visiteurs francophones. Les explications sont claires, précises et accessibles à tous les niveaux.",
  },
];

const BASE = '/images/hisham/optimized';

const MES_VOYAGEURS: GalleryPhoto[] = [
  {
    src: `${BASE}/hisham-clients-temple-karnak-01-800w.webp`,
    alt: 'Hisham, guide francophone, avec des clients devant le temple de Karnak',
    caption: 'Temple de Karnak',
  },
  {
    src: `${BASE}/hisham-guide-visite-temple-800w.webp`,
    alt: 'Hisham explique les hiéroglyphes à ses clients dans un temple égyptien',
    caption: 'Visite guidée en temple',
  },
  {
    src: `${BASE}/hisham-clients-vallee-des-rois-800w.webp`,
    alt: 'Hisham, guide francophone, avec des clients à la Vallée des Rois',
    caption: 'Vallée des Rois',
  },
  {
    src: `${BASE}/hisham-clients-cafe-louxor-800w.webp`,
    alt: 'Hisham et ses clients dans un café traditionnel de Louxor',
    caption: 'Pause café à Louxor',
  },
  {
    src: `${BASE}/hisham-clients-corniche-louxor-800w.webp`,
    alt: 'Hisham, guide francophone, avec des clients sur la corniche de Louxor',
    caption: 'Corniche de Louxor',
  },
  {
    src: `${BASE}/hisham-clients-temple-karnak-02-800w.webp`,
    alt: 'Hisham, guide francophone, avec des clients au temple de Karnak',
    caption: 'Temple de Karnak — intérieur',
  },
  {
    src: `${BASE}/hisham-groupe-temple-kom-ombo-800w.webp`,
    alt: 'Hisham avec un grand groupe de voyageurs devant le temple de Kom Ombo',
    caption: 'Temple de Kom Ombo',
  },
  {
    src: `${BASE}/hisham-clients-temple-philae-800w.webp`,
    alt: 'Hisham, guide francophone, avec une famille devant le temple de Philae',
    caption: 'Temple de Philae',
  },
  {
    src: `${BASE}/hisham-clients-colosses-memnon-800w.webp`,
    alt: 'Hisham et ses clients en selfie devant les Colosses de Memnon',
    caption: 'Colosses de Memnon',
  },
];

const APROPOS_FAQ = [
  {
    question: "Hisham est-il un vrai guide officiel en Égypte ?",
    answer:
      "Oui. Hisham est titulaire d'une licence officielle de guide touristique délivrée par le Ministère du Tourisme et des Antiquités d'Égypte, ainsi que d'une licence universitaire en égyptologie de l'Institut d'Études Supérieures du Sinaï. Ce double diplôme lui permet d'exercer légalement et d'offrir des explications approfondies sur toute la civilisation pharaonique.",
  },
  {
    question: "Hisham parle-t-il vraiment bien français ?",
    answer:
      "Hisham parle un français courant et idiomatique, acquis au contact de centaines de familles francophones depuis plus de 15 ans. Il s'exprime avec clarté et précision, adapte son vocabulaire selon l'âge et le niveau de curiosité de ses clients — des enfants aux universitaires spécialisés en histoire ancienne.",
  },
  {
    question: "Hisham propose-t-il des visites pour les enfants ?",
    answer:
      "Absolument. Hisham est habitué à accompagner des familles avec enfants et adapte chaque explication selon l'âge. Pour les plus jeunes, il utilise des histoires, des comparaisons avec la culture contemporaine et des jeux de questions-réponses pour rendre les hiéroglyphes et les pharaons accessibles et passionnants. Les enfants en général adorent ces visites.",
  },
  {
    question: "Peut-on réserver Hisham à l'avance depuis la France ?",
    answer:
      "Oui, et c'est même recommandé. Hisham répond par WhatsApp et email depuis la France, la Belgique, la Suisse et tout pays francophone. Il prépare un programme détaillé et un devis gratuit sur simple demande. La plupart de ses clients réservent 2 à 6 semaines avant leur départ.",
  },
  {
    question: "Combien de temps à l'avance faut-il réserver Hisham ?",
    answer:
      "En basse saison (mai à septembre), une réservation une semaine à l'avance est généralement suffisante. En haute saison (octobre à avril) et surtout lors des vacances scolaires françaises, il est conseillé de réserver 3 à 6 semaines en avance pour être sûr d'obtenir les dates souhaitées. Contactez-le dès que vos dates sont confirmées.",
  },
];

const STRENGTHS = [
  {
    icon: Users,
    title: "15+ ans d’expérience",
    body: "Des centaines de familles, couples et groupes accompagnés à travers toute l’Égypte — de Louxor au Caire, du Sinaï à Assouan.",
  },
  {
    icon: Clock,
    title: "Disponible 7j/7",
    body: "Du premier contact à la fin du séjour, Hisham reste joignable par téléphone et WhatsApp. Votre tranquillité d’esprit est sa priorité.",
  },
  {
    icon: Star,
    title: "Avis clients 5 étoiles",
    body: "Plus d’une centaine d’avis positifs, tous authentiques, laissés par des voyageurs francophones reconnaissants.",
  },
];

export default async function AProposPage() {
  const site = await getSite();
  const reviews = await getReviews();
  const topReviews = reviews.slice(0, 3);

  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaPerson({
          name: site.guide.name,
          jobTitle: site.guide.role,
          description: site.guide.bio,
          url: `${SITE_URL}/a-propos`,
          languages: site.languages,
          knowsAbout: [
            'Égyptologie',
            'Archéologie égyptienne',
            'Hiéroglyphes',
            'Histoire des pharaons',
            'Tourisme culturel',
            'Croisières sur le Nil',
            'Vallée des Rois',
            'Karnak',
          ],
        })}
      />
      <JsonLd
        data={schemaWebPage({
          name: 'À propos de Hisham — Guide égyptologue francophone',
          description:
            "Hisham, guide égyptologue francophone diplômé, vous accompagne dans toute l'Égypte depuis plus de 15 ans.",
          path: '/a-propos',
        })}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'À propos', path: '/a-propos' }])} />
      <JsonLd data={schemaFaqPage(APROPOS_FAQ)} />

      <main id="main-content">
        {/* ── Hero ────────────────────────────────────────────── */}
        <section aria-labelledby="guide-title" className="pt-16 pb-16 bg-parchment-gradient">
          <div className="container-luxury">
            <nav aria-label="Fil d'Ariane" className="mb-8">
              <ol className="flex gap-2 text-caption list-none p-0">
                <li><Link href="/" className="hover:text-gold transition-colors">Accueil</Link></li>
                <li aria-hidden="true">›</li>
                <li aria-current="page" className="text-gold">À propos</li>
              </ol>
            </nav>
            <div className="grid lg:grid-cols-[1fr_380px] gap-12 items-center">
              <div>
                <span className="text-eyebrow">Votre guide</span>
                <h1 id="guide-title" className="text-display-xl mt-3 text-balance">
                  {site.guide.name}
                </h1>
                <p className="text-gold-accessible font-medium mt-2 text-xl">{site.guide.role}</p>
                <p className="text-text-muted mt-6 text-lg leading-relaxed max-w-xl">
                  Égyptologue diplômé, guide officiel agréé, francophone depuis plus de 15 ans —
                  Hisham transforme chaque voyage en Égypte en une expérience inoubliable.
                </p>
                <div className="flex flex-wrap gap-3 mt-8">
                  <Link href="/contact" className="btn btn-primary">
                    Organiser mon voyage
                  </Link>
                  <Link href="/avis" className="btn btn-outline">
                    Lire les avis (100+)
                  </Link>
                </div>
              </div>

              {/* Photo du guide — portrait principal */}
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gold/20">
                <Image
                  src="/images/hisham/optimized/hisham-guide-francophone-louxor-1200w.webp"
                  alt="Hisham, guide égyptologue francophone à Louxor, Égypte"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 380px"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex gap-2 flex-wrap">
                    <span className="badge badge-gold">Égyptologue diplômé</span>
                    <span className="badge badge-gold">Guide officiel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Mon histoire ──────────────────────────────────────── */}
        <section aria-labelledby="histoire-title" className="section-y">
          <div className="container-narrow">
            <span className="text-eyebrow">Mon parcours</span>
            <h2 id="histoire-title" className="text-display-md mt-3">
              Mon histoire
            </h2>
            <div className="prose prose-lg mt-8 space-y-5 text-pretty">
              <p className="text-lg leading-relaxed">
                Tout a commencé par une fascination d'enfant pour les hiéroglyphes gravés dans les
                murs de Karnak — ce labyrinthe de colonnes dont les ombres, au crépuscule, semblent
                faire revivre les prêtres d'Amon. Né à Louxor, berceau de la civilisation
                pharaonique, j'ai grandi au rythme du Nil, entre les temples de la rive est et les
                nécropoles de la rive ouest.
              </p>
              <p className="text-lg leading-relaxed">
                Après mes études à l'Institut d'Études Supérieures du Sinaï, où j'ai obtenu ma
                licence en égyptologie et en sciences de l'éducation, j'ai passé ma licence
                officielle de guide touristique auprès du Ministère du Tourisme égyptien. Ce
                parcours académique m'a donné les fondations solides pour aller au-delà des
                anecdotes superficielles et offrir à mes visiteurs une compréhension profonde et
                vivante de la civilisation égyptienne.
              </p>
              <p className="text-lg leading-relaxed">
                Depuis plus de 15 ans, j'accompagne des centaines de familles, couples et groupes
                francophones à travers toute l'Égypte. De la Vallée des Rois aux pyramides de
                Gizeh, des temples d'Abou Simbel aux souks du Caire, j'ai tissé un réseau de
                confiance avec des chauffeurs, hôteliers et prestataires locaux dont je peux
                garantir le sérieux et la qualité.
              </p>
              <p className="text-lg leading-relaxed">
                Ce qui me passionne dans ce métier ? Le moment exact où je vois un voyageur, qui
                regardait une peinture funéraire comme un simple décor, réaliser soudain qu'il est
                en train de lire une scène du Livre des Morts vieille de 3 400 ans. Ce déclic —
                cette connexion entre un humain du XXIe siècle et la pensée d'un artisan du Nouvel
                Empire — c'est pour cela que je travaille.
              </p>
            </div>
          </div>
        </section>

        {/* ── Diplômes & Certifications ──────────────────────────── */}
        <section aria-labelledby="certif-title" className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <span className="text-eyebrow">Expertise certifiée</span>
            <h2 id="certif-title" className="text-display-md mt-3">
              Diplômes & certifications
            </h2>
            <ul className="grid md:grid-cols-3 gap-6 mt-10 list-none p-0">
              {CERTIFICATIONS.map((cert) => (
                <li key={cert.title} className="surface p-6 border-gold-accent">
                  <cert.icon size={28} className="text-gold mb-4" aria-hidden="true" />
                  <h3 className="font-display text-xl">{cert.title}</h3>
                  <p className="text-gold-accessible text-sm font-medium mt-1">{cert.detail}</p>
                  <p className="text-caption mt-3 leading-relaxed">{cert.description}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Philosophie du voyage ─────────────────────────────── */}
        <section aria-labelledby="philosophie-title" className="section-y">
          <div className="container-narrow">
            <span className="text-eyebrow">Ma vision</span>
            <h2 id="philosophie-title" className="text-display-md mt-3">
              Ma philosophie du voyage
            </h2>
            <div className="mt-8 space-y-5 text-pretty">
              <p className="text-lg leading-relaxed">
                Je refuse la logique du tourisme de masse. Pas de groupes de 30 personnes alignés
                derrière un parapluie. Pas d'explication bâclée sur le parvis d'un temple bondé.
                Chaque voyage que j'organise est construit sur mesure, autour de <em>vos</em>{' '}
                envies, de votre rythme, de vos curiosités.
              </p>
              <p className="text-lg leading-relaxed">
                Si vous adorez l'archéologie, nous irons au-delà des circuits standard pour
                explorer des tombes rarement visitées. Si vous préférez la culture vivante, je vous
                emmènerai dans des marchés locaux, des maisons de thé centenaires, des familles
                qui perpétuent des artisanats ancestraux. Si vous venez avec des enfants, j'adapte
                chaque explication pour qu'ils repartent avec des étoiles dans les yeux.
              </p>
              <p className="text-lg leading-relaxed">
                L'Égypte n'est pas un musée figé. C'est un pays vivant, complexe, spirituel et
                contemporain à la fois. Mon rôle est de vous faire ressentir cette profondeur —
                pas seulement de vous faire regarder des pierres.
              </p>
            </div>

            <blockquote className="mt-10 border-l-4 border-gold pl-6 italic text-lg text-text-muted">
              « Parce que j'aime mon pays, mon métier et le contact avec les gens, je propose à
              mes clients des découvertes passionnantes à travers toute l'Égypte. »
              <footer className="mt-2 not-italic text-sm font-medium text-gold-accessible">
                — {site.guide.name}, guide égyptologue
              </footer>
            </blockquote>
          </div>
        </section>

        {/* ── Points forts ─────────────────────────────────────── */}
        <section aria-labelledby="strengths-title" className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 id="strengths-title" className="text-display-md text-center">
              Pourquoi choisir Hisham ?
            </h2>
            <ul className="grid sm:grid-cols-3 gap-6 mt-10 list-none p-0">
              {STRENGTHS.map((s) => (
                <li key={s.title} className="surface p-6 text-center">
                  <s.icon size={32} className="text-gold mx-auto mb-4" aria-hidden="true" />
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="text-caption mt-3 leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Galerie "Mes voyageurs" ───────────────────────────── */}
        <section aria-labelledby="voyageurs-title" className="section-y">
          <div className="container-luxury">
            <span className="text-eyebrow">En images</span>
            <h2 id="voyageurs-title" className="text-display-md mt-3">
              Ils ont voyagé avec moi
            </h2>
            <span className="divider-gold mt-4" />
            <p className="text-text-muted mt-5 max-w-xl">
              Des moments partagés avec mes clients à travers toute l&apos;Égypte — temples, désert,
              Nil. Chaque voyage laisse une trace.
            </p>
            <PhotoGallery
              photos={MES_VOYAGEURS}
              columns={3}
              className="mt-10"
            />
          </div>
        </section>

        {/* ── Témoignages ──────────────────────────────────────── */}
        {topReviews.length > 0 && (
          <section aria-labelledby="temoignages-title" className="section-y">
            <div className="container-luxury">
              <span className="text-eyebrow">Ce qu'ils disent</span>
              <h2 id="temoignages-title" className="text-display-md mt-3">
                Témoignages de voyageurs
              </h2>
              <ul className="grid md:grid-cols-3 gap-6 mt-10 list-none p-0">
                {topReviews.map((review) => (
                  <li key={review.author} className="surface p-6 border-gold-accent flex flex-col">
                    <div className="flex gap-0.5 mb-4" aria-label={`Note : ${review.rating ?? 5} sur 5`}>
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className={i < (review.rating ?? 5) ? 'text-gold fill-gold' : 'text-gray-300'}
                          aria-hidden="true"
                        />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed text-text-muted flex-1 italic">
                      &ldquo;{review.text.slice(0, 220)}
                      {review.text.length > 220 ? '…' : ''}&rdquo;
                    </blockquote>
                    <footer className="mt-4 pt-4 border-t border-border">
                      <cite className="not-italic font-medium text-sm">{review.author}</cite>
                      {review.location && (
                        <span className="text-caption ml-2">— {review.location}</span>
                      )}
                    </footer>
                  </li>
                ))}
              </ul>
              <div className="text-center mt-8">
                <Link href="/avis" className="btn btn-outline">
                  Voir tous les avis clients →
                </Link>
              </div>
            </div>
          </section>
        )}

        {/* ── FAQ ─────────────────────────────────────────────── */}
        <section aria-labelledby="faq-apropos-title" className="section-y bg-parchment-gradient">
          <div className="container-narrow">
            <h2 id="faq-apropos-title" className="text-display-md">Questions fréquentes sur Hisham</h2>
            <dl className="mt-10 space-y-0">
              {APROPOS_FAQ.map((item, i) => (
                <div key={item.question} className={`py-6 ${i > 0 ? 'border-t border-[var(--parchment)]' : ''}`}>
                  <dt className="font-display text-xl font-medium">{item.question}</dt>
                  <dd className="mt-3 text-text-muted leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* ── CTA ─────────────────────────────────────────────── */}
        <section aria-labelledby="cta-apropos" className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 id="cta-apropos" className="text-display-md text-white">
              Voyagez avec Hisham
            </h2>
            <p className="text-gold-muted mt-4 max-w-lg mx-auto">
              Un guide, un ami, un passeur de culture. Contactez Hisham pour construire votre
              voyage en Égypte ensemble — sur mesure, en français, sans stress.
            </p>
            <div className="flex gap-4 justify-center flex-wrap mt-8">
              <Link href="/contact" className="btn btn-primary">
                Demander un devis
              </Link>
              <Link href="/avis" className="btn btn-outline-white">
                Lire les avis clients
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
