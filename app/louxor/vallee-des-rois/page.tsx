/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Star } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Vallée des Rois : visite privée, tombes et billets — Louxor',
    description:
      'Visite privée de la Vallée des Rois avec Hisham, égyptologue francophone : quelles tombes choisir parmi les 63, billets et suppléments, meilleur horaire. Dès 80 €/personne, devis gratuit.',
    path: '/louxor/vallee-des-rois',
    ogImage: '/images/destinations/louxor/vallee-des-rois-panorama.webp',
  });
}

const schemaLD = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Vallée des Rois',
  description:
    'Nécropole royale du Nouvel Empire égyptien sur la rive ouest de Louxor, abritant 63 tombes de pharaons dont Toutânkhamon.',
  url: 'https://www.guidefrancophonelouxor.com/louxor/vallee-des-rois',
  image: '/images/destinations/louxor/vallee-des-rois-panorama.webp',
  touristType: 'Tourisme culturel et archéologique',
  geo: { '@type': 'GeoCoordinates', latitude: 25.7402, longitude: 32.6012 },
  containedInPlace: { '@type': 'City', name: 'Louxor', addressCountry: 'EG' },
};

const FAQ = [
  {
    question: 'Combien de tombes peut-on visiter à la Vallée des Rois ?',
    answer:
      "Le billet standard donne accès à 3 tombes au choix. Des billets supplémentaires permettent de visiter des tombes spéciales comme celles de Toutânkhamon, Séthi Ier ou Ramsès VI. Avec moi, je vous guide vers les tombes les plus belles en fonction de vos intérêts et de l'affluence du jour.",
  },
  {
    question: 'Quelle est la meilleure période pour visiter la Vallée des Rois ?',
    answer:
      "La meilleure période est d'octobre à avril, quand les températures sont plus clémentes (20-25°C). En été, la chaleur dépasse souvent 45°C dans les tombes. Je recommande d'y aller tôt le matin (dès l'ouverture à 6h) pour éviter l'affluence.",
  },
  {
    question: 'Faut-il acheter les billets à l\'avance ?',
    answer:
      "Je m'occupe de tout. Billets, transport, planning — vous n'avez rien à préparer. Je connais les billets disponibles en temps réel et j'optimise votre visite pour vous faire voir l'essentiel sans attente.",
  },
  {
    question: 'Peut-on prendre des photos dans les tombes ?',
    answer:
      'La photographie est interdite dans la plupart des tombes. Un billet photo spécial existe pour certaines. Je vous expliquerai les règles sur place et vous proposerai une alternative : des guides visuels de qualité que vous pourrez emporter.',
  },
];

export default function ValleDesRoisPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaLD} />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
        ])}
      />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({
            '@type': 'Question',
            name: f.question,
            acceptedAnswer: { '@type': 'Answer', text: f.answer },
          })),
        }}
      />

      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/destinations/louxor/vallee-des-rois-panorama.webp"
            alt="Vallée des Rois, Louxor — visite guidée francophone avec Hisham"
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
              <li aria-current="page" className="text-gold drop-shadow">Vallée des Rois</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Ouest</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              Vallée des Rois
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              63 tombes royales du Nouvel Empire, gardées par les falaises de la rive ouest du Nil
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-gold" /> Durée conseillée : 3 à 4 heures
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-gold" /> Rive ouest de Louxor
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Star size={14} className="text-gold fill-gold" /> À partir de 80€/personne
              </span>
            </div>

            <h2 className="text-display-md text-balance">
              La nécropole des pharaons du Nouvel Empire
            </h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Nichée dans un vallon naturel de la rive ouest du Nil, la Vallée des Rois est l'une
                des découvertes archéologiques les plus fascinantes de l'humanité. Pendant près de
                500 ans — du XVIe au XIe siècle avant notre ère — les pharaons du Nouvel Empire y
                ont fait creuser leurs tombes secrètes, ornées de peintures et d'inscriptions
                magiques destinées à guider leur âme dans l'au-delà.
              </p>
              <p>
                63 tombes royales ont été découvertes, dont celle de Toutânkhamon en 1922 par Howard
                Carter — le plus grand trésor archéologique jamais mis au jour. Chaque tombe est un
                chef-d'œuvre de l'art funéraire égyptien, avec ses couloirs ornés de scènes tirées
                du Livre des Morts, de l'Amdouat et des Litanies de Rê.
              </p>
              <p>
                Avec moi, vous ne vous contentez pas de regarder des hiéroglyphes. Je vous explique
                ce qu'ils signifient : chaque scène, chaque dieu, chaque formule magique raconte
                l'histoire d'une croyance vieille de 3 400 ans. Vous repartez avec une
                compréhension profonde de la pensée religieuse égyptienne antique.
              </p>
            </div>
          </div>
        </section>

        {/* Ce qu'on y voit */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md text-balance">
              Les tombes à ne pas manquer
            </h2>
            <p className="text-text-muted mt-4 max-w-xl">
              Je sélectionne les tombes en fonction de vos intérêts et de l'ouverture du jour.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {[
                {
                  num: 'KV 62',
                  name: 'Toutânkhamon',
                  desc: "La tombe la plus célèbre du monde. Petit mais chargé d'émotion — vous pouvez y voir la momie royale.",
                },
                {
                  num: 'KV 17',
                  name: 'Séthi Ier',
                  desc: "La plus longue et la plus belle de la Vallée. Ses peintures sont d'une finesse absolument extraordinaire.",
                },
                {
                  num: 'KV 9',
                  name: 'Ramsès VI',
                  desc: 'Un double plafond astronomique représentant le voyage du soleil et de la lune — spectaculaire.',
                },
                {
                  num: 'KV 11',
                  name: 'Ramsès III',
                  desc: 'Unique par ses salles latérales peintes de scènes de la vie quotidienne, rarissimes dans une tombe royale.',
                },
                {
                  num: 'KV 2',
                  name: 'Ramsès IV',
                  desc: 'Accessible et bien conservée, idéale pour commencer la visite. Son sarcophage de granite rose est magnifique.',
                },
                {
                  num: 'KV 34',
                  name: 'Thoutmosis III',
                  desc: "La plus ancienne tombe accessible, au fond d'un puits escarpé. Ses décors en style linéaire sont uniques.",
                },
              ].map((tomb) => (
                <li key={tomb.num} className="surface p-6 border-gold-accent">
                  <span className="text-xs font-mono text-gold/60 font-medium">{tomb.num}</span>
                  <h3 className="font-display text-xl mt-1">{tomb.name}</h3>
                  <p className="text-caption mt-3">{tomb.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ce que j'apporte */}
        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md">Ce que j'apporte en tant que guide</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed">
              <p>
                La Vallée des Rois peut vite devenir une suite de couloirs identiques si vous n'avez
                pas les clés de lecture. Mon rôle est de vous donner ces clés.
              </p>
              <ul className="space-y-3 list-none p-0">
                {[
                  'Je déchiffre les hiéroglyphes et vous explique leur sens religieux',
                  "Je sélectionne les tombes en évitant les files d'attente",
                  'Je vous raconte la vie du pharaon enterré devant vous',
                  'Je réponds à toutes vos questions, même les plus pointues',
                  'Je vous donne des anecdotes que vous ne trouverez dans aucun guide papier',
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
            <h2 className="text-display-md">Questions fréquentes</h2>
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
              Visiter la Vallée des Rois avec moi
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Visite privée, transport inclus, guide égyptologue francophone diplômé. Devis gratuit sous 24h.
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
            <h2 className="text-display-md">D'autres sites à Louxor</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Temple de Karnak', path: '/louxor/temple-de-karnak' },
                { label: 'Temple de Louxor', path: '/louxor/temple-de-louxor' },
                { label: 'Vallée des Reines', path: '/louxor/vallee-des-reines' },
                { label: 'Montgolfière', path: '/louxor/montgolfiere' },
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
          </div>
        </section>
      </main>
    </>
  );
}
