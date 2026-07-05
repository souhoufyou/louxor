/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb, schemaFaqPage } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: "Temple d'Hatchepsout à Louxor | Deir el-Bahari — Guide Francophone Hisham",
    description:
      "Visitez le temple de Deir el-Bahari avec Hisham, guide égyptologue francophone. Hatchepsout, la reine-pharaon, ses reliefs uniques et ses colonnades majestueuses. Visite privée depuis Louxor.",
    path: '/louxor/temple-hatchepsout',
    ogImage: '/images/destinations/louxor/temple-hatchepsout-louxor.webp',
  });
}

const schemaLD = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: "Temple d'Hatchepsout (Deir el-Bahari)",
  description:
    "Temple funéraire de la reine-pharaon Hatchepsout sur la rive ouest de Louxor, bâti vers 1470 av. J.-C. à Deir el-Bahari. Chef-d'œuvre de l'architecture du Nouvel Empire.",
  url: 'https://www.guidefrancophonelouxor.com/louxor/temple-hatchepsout',
  image: '/images/destinations/louxor/temple-hatchepsout-louxor.webp',
  touristType: 'Tourisme culturel et archéologique',
  geo: { '@type': 'GeoCoordinates', latitude: 25.7381, longitude: 32.6074 },
  containedInPlace: { '@type': 'City', name: 'Louxor', addressCountry: 'EG' },
};

const FAQ = [
  {
    question: "Pourquoi le temple d'Hatchepsout est-il si particulier ?",
    answer:
      "Hatchepsout est l'une des rares femmes à avoir régné comme pharaon en Égypte ancienne. Son temple, à trois terrasses superposées contre les falaises calcaires de Deir el-Bahari, est un chef-d'œuvre d'architecture unique en Égypte. Après sa mort, son successeur Thoutmosis III a fait marteler son nom et son image — c'est cette histoire fascinante que je vous raconte en détail sur place.",
  },
  {
    question: "Peut-on visiter le temple d'Hatchepsout en même temps que la Vallée des Rois ?",
    answer:
      "Absolument, c'est d'ailleurs l'itinéraire que je recommande. La rive ouest de Louxor concentre le temple d'Hatchepsout, la Vallée des Rois, les Colosses de Memnon et la Vallée des Reines. En démarrant tôt le matin, vous pouvez voir les sites essentiels en une demi-journée à une journée complète.",
  },
  {
    question: "Quelle est la durée idéale pour visiter Deir el-Bahari ?",
    answer:
      "Comptez 1h30 à 2h pour une visite à mon rythme. La montée jusqu'aux terrasses supérieures est progressive (rampes et escaliers) et les reliefs méritent qu'on s'y attarde. Je vous expliquerai les scènes de l'expédition au Pays de Pount, le mythe de la naissance divine d'Hatchepsout et les chapelles de Hathor et d'Anubis.",
  },
  {
    question: "Quel est le meilleur moment de la journée pour visiter Hatchepsout ?",
    answer:
      "Le matin dès l'ouverture (6h) est idéal : la lumière dorée éclaire les terrasses magnifiquement et les groupes de touristes ne sont pas encore arrivés. L'après-midi, le soleil tape directement sur les terrasses. Je vous emmène systématiquement à l'heure où la lumière et la fréquentation sont optimales.",
  },
  {
    question: "Faut-il payer un billet séparé pour le temple d'Hatchepsout ?",
    answer:
      "Oui, le temple d'Hatchepsout dispose d'un billet d'entrée séparé de la Vallée des Rois. Dans mes programmes, tous les billets d'entrée principaux sont inclus dans le devis — vous n'avez aucune surprise sur place. Je m'occupe de tout.",
  },
];

export default function TempleHatchepsoutPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaLD} />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: "Temple d'Hatchepsout", path: '/louxor/temple-hatchepsout' },
        ])}
      />
      <JsonLd data={schemaFaqPage(FAQ)} />

      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/destinations/louxor/temple-hatchepsout-louxor.webp"
            alt="Temple d'Hatchepsout à Deir el-Bahari, Louxor — visite guidée francophone avec Hisham"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="relative z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/louxor" className="text-white/75 hover:text-white transition-colors drop-shadow">Louxor</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Temple d'Hatchepsout</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Ouest · Deir el-Bahari</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              Temple d'Hatchepsout
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              Le temple de la reine-pharaon, niché au pied des falaises de Deir el-Bahari
            </p>
          </div>
        </section>

        {/* Featured snippet */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-gold" /> Durée conseillée : 1h30 à 2h
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-gold" /> Deir el-Bahari, rive ouest de Louxor
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Star size={14} className="text-gold fill-gold" /> Inclus dans les programmes rive ouest
              </span>
            </div>

            <h2 className="text-display-md text-balance">
              Un chef-d'œuvre de l'architecture pharaonique
            </h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Le temple d'Hatchepsout est un chef-d'œuvre de l'architecture égyptienne bâti vers
                1470 av. J.-C. par la reine-pharaon Hatchepsout. Niché au pied des falaises
                calcaires de Deir el-Bahari, ce temple à trois terrasses recèle des reliefs parmi
                les mieux conservés d'Égypte et l'histoire unique d'une femme qui régna comme
                pharaon pendant plus de vingt ans.
              </p>
              <p>
                Officiellement dénommé Djeser-Djéserou — « la Sainte des Saintes » — ce temple
                funéraire est dédié à la fois à Amon-Rê, à Hathor et à Anubis. Son architecture
                à colonnade, qui rompt radicalement avec les temples traditionnels de son époque,
                était si révolutionnaire que certains historiens de l'art la qualifient de
                précurseur de l'architecture classique grecque.
              </p>
              <p>
                Ce qui rend ce site particulièrement fascinant pour moi, c'est l'histoire humaine
                derrière les pierres : après la mort d'Hatchepsout, son successeur Thoutmosis III
                a ordonné que son nom, ses images et ses cartouches soient systématiquement
                martelés sur l'ensemble du temple. Pendant 3 000 ans, l'histoire d'Hatchepsout a
                été effacée — avant que les archéologues modernes ne la restituent. Je vous
                emmène devant ces traces d'effacement et vous raconte pourquoi.
              </p>
            </div>
          </div>
        </section>

        {/* Sections du temple */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md text-balance">
              Les trois terrasses du temple
            </h2>
            <p className="text-text-muted mt-4 max-w-xl">
              Chaque niveau du temple révèle une histoire différente — je vous guide à travers chaque reliefs et chapelle.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {[
                {
                  num: '1er niveau',
                  name: "Grande cour inférieure",
                  desc: "L'entrée du temple, autrefois bordée de sphinx criocéphales. Une longue rampe monte vers les terrasses supérieures, encadrée par des jardins de sycomores et de tamaris.",
                },
                {
                  num: '2e niveau',
                  name: "Portique central",
                  desc: "Les reliefs de l'expédition au Pays de Pount — la légendaire mission commerciale d'Hatchepsout vers la côte africaine. Arbres, animaux exotiques et échanges représentés avec une précision étonnante.",
                },
                {
                  num: 'Chapelle Hathor',
                  name: "Déesse de la féminité",
                  desc: "Chapelle dédiée à Hathor, déesse de la joie et du divin féminin. Les colonnes hathoriques — à visage de déesse — sont parmi les plus belles de tout l'Égypte.",
                },
                {
                  num: 'Chapelle Anubis',
                  name: "Gardien des morts",
                  desc: "Chapelle du dieu des embaumeurs, ornée de peintures aux couleurs encore vives. L'une des mieux conservées du temple.",
                },
                {
                  num: '3e niveau',
                  name: "Sanctuaire d'Amon",
                  desc: "Le cœur du temple — taillé dans la falaise elle-même. Les reliefs de naissance divine d'Hatchepsout y représentent sa conception miraculeuse par le dieu Amon.",
                },
                {
                  num: 'Traces de l\'histoire',
                  name: "Les cartouches martelés",
                  desc: "Partout dans le temple, vous pouvez voir les traces du marteau de Thoutmosis III : noms effacés, visages grattés. Une leçon de politique et de pouvoir vieille de 3 400 ans.",
                },
              ].map((section) => (
                <li key={section.num} className="surface p-6 border-gold-accent">
                  <span className="text-xs font-mono text-gold/60 font-medium">{section.num}</span>
                  <h3 className="font-display text-xl mt-1">{section.name}</h3>
                  <p className="text-caption mt-3">{section.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ce que j'apporte */}
        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md">Hatchepsout avec moi : comprendre, pas seulement voir</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed">
              <p>
                La plupart des visiteurs passent devant Deir el-Bahari sans comprendre ce qu'ils
                regardent : des colonnes blanches, des reliefs en partie effacés, une architecture
                étrange dans le désert. Mon travail est de transformer cette succession de pierres
                en une histoire vivante et bouleversante.
              </p>
              <ul className="space-y-3 list-none p-0">
                {[
                  "Je vous raconte l'histoire d'Hatchepsout — la femme qui s'est représentée comme pharaon masculin",
                  'Je déchiffre les cartouches martelés et les reliefs effacés par Thoutmosis III',
                  "J'explique les scènes de l'expédition au Pays de Pount dans leur contexte historique",
                  'Je vous montre les détails architecturaux qui ont inspiré les archéologues du XIXe siècle',
                  "Je vous guide vers les angles photos les plus saisissants avec les falaises en arrière-plan",
                ].map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <Star size={14} className="text-gold fill-gold flex-shrink-0 mt-1.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-narrow">
            <h2 className="text-display-md">Questions fréquentes sur le temple d'Hatchepsout</h2>
            <dl className="mt-10 space-y-0">
              {FAQ.map((item, i) => (
                <div key={item.question} className={`py-6 ${i > 0 ? 'border-t border-[var(--parchment)]' : ''}`}>
                  <dt className="font-display text-xl font-medium">{item.question}</dt>
                  <dd className="mt-3 text-text-muted leading-relaxed">{item.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">
              Visiter le temple d'Hatchepsout avec moi
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Visite privée sur la rive ouest de Louxor, transport inclus, guide égyptologue francophone. Deiz gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
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

        {/* Maillage interne */}
        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">Autres sites de la rive ouest</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
                { label: 'Colosses de Memnon', path: '/louxor/colosses-de-memnon' },
                { label: 'Vallée des Reines', path: '/louxor/vallee-des-reines' },
                { label: 'Rive Ouest — vue d\'ensemble', path: '/louxor/rive-ouest' },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="flex items-center gap-2 surface p-4 rounded-xl hover:border-gold transition-colors group"
                  >
                    <ArrowRight size={14} className="text-gold flex-shrink-0" />
                    <span className="group-hover:text-gold transition-colors">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6">
              <Link href="/louxor/itineraire-1-jour" className="text-gold hover:underline text-sm">
                → Voir l'itinéraire Louxor en 1 jour
              </Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
