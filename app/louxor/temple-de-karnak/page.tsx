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
    title: 'Temple de Karnak à Louxor | Guide Francophone Privé — Hisham',
    description:
      "Découvrez le Temple de Karnak avec Hisham, guide égyptologue francophone. Le plus grand complexe religieux de l'Antiquité sur 30 hectares. Visite privée sur mesure.",
    path: '/louxor/temple-de-karnak',
    ogImage: '/images/destinations/louxor/temple-louxor-egypte.webp',
  });
}

const FAQ = [
  {
    question: 'Combien de temps faut-il pour visiter Karnak ?',
    answer:
      "Comptez au minimum 2 à 3 heures pour une visite complète. Avec moi, je consacre le temps qu'il faut à chaque zone — ni trop vite ni avec des explications interminables. Mon objectif : que vous repartiez avec des souvenirs imprimés, pas de la fatigue.",
  },
  {
    question: 'Peut-on visiter Karnak et le Temple de Louxor le même jour ?',
    answer:
      "Oui, ces deux sites sont distants d'environ 3 km. Je propose souvent de visiter Karnak le matin (lumière magnifique, moins de monde) puis le Temple de Louxor en fin d'après-midi ou en soirée pour le son et lumière.",
  },
  {
    question: 'Le spectacle son et lumière vaut-il le détour ?',
    answer:
      "C'est une expérience unique — le temple illuminé la nuit est spectaculaire. Mais pour vraiment comprendre ce que vous regardez, il faut l'avoir visité avec un guide le matin. Les deux se complètent parfaitement.",
  },
];

export default function TempleKarnakPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristAttraction',
          name: 'Temple de Karnak',
          description: 'Le plus grand complexe religieux jamais construit, dédié principalement au dieu Amon-Rê, à Louxor.',
          url: 'https://guide-francophone-louxor.com/louxor/temple-de-karnak',
          touristType: 'Tourisme culturel et archéologique',
          geo: { '@type': 'GeoCoordinates', latitude: 25.7188, longitude: 32.6573 },
        }}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: 'Temple de Karnak', path: '/louxor/temple-de-karnak' },
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
        <section aria-labelledby="page-title" className="relative overflow-hidden min-h-[320px]" style={{ aspectRatio: '21/9' }}>
          <Image
            src="/images/destinations/louxor/temple-karnak-colonnes-louxor.webp"
            alt="Temple de Karnak, Louxor — colonnes de la grande salle hypostyle"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/louxor" className="text-white/75 hover:text-white transition-colors drop-shadow">Louxor</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Temple de Karnak</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Est</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">
              Temple de Karnak
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              Le plus grand complexe religieux jamais construit — 30 hectares de colonnades, pylônes et sanctuaires
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-gold" /> Durée conseillée : 2 à 3 heures
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-gold" /> Rive est de Louxor
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Star size={14} className="text-gold fill-gold" /> À partir de 70€/personne
              </span>
            </div>

            <h2 className="text-display-md text-balance">
              La maison des dieux sur trente hectares
            </h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Karnak n'est pas un temple — c'est une ville sacrée. Construit et agrandi sur plus
                de 2 000 ans par des dizaines de pharaons successifs, ce complexe religieux est le
                plus vaste jamais érigé par l'humanité. Il s'étend sur 30 hectares et renferme des
                temples, des chapelles, des pylônes, des obélisques et le lac sacré.
              </p>
              <p>
                Son joyau est la Grande Salle Hypostyle : 134 colonnes colossales disposées en 16
                rangées, certaines atteignant 23 mètres de hauteur. Leurs chapiteaux en forme de
                fleurs de papyrus épanouies ou en bouton sont d'une beauté saisissante. C'est l'un
                des espaces architecturaux les plus impressionnants que j'aie jamais vus — et je le
                découvre chaque fois différemment, selon la lumière et la saison.
              </p>
              <p>
                Avec moi, vous naviguez dans Karnak avec une clarté que vous n'aurez pas en visitant
                seul. Je vous montre l'essentiel, je vous explique la stratification des époques et
                je vous fais voir des détails que même les guides classiques ignorent.
              </p>
            </div>
          </div>
        </section>

        {/* Points forts */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Les incontournables de Karnak</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {[
                { name: 'Grande Salle Hypostyle', desc: '134 colonnes monumentales décorées de scènes religieuses et militaires — la plus grande salle à colonnes du monde antique.' },
                { name: 'Obélisques de Hatchepsout', desc: "Deux obélisques de granit rose de 29 mètres érigés par la grande pharaonne femme, dont l'un est encore debout." },
                { name: 'Lac Sacré', desc: 'Lieu rituel de purification des prêtres, entouré de colonnes. Au coucher du soleil, le reflet des temples est inoubliable.' },
                { name: 'Pylône d\'entrée', desc: "Le plus grand pylône de l'Antiquité, large de 113 mètres, dont la construction ne fut jamais achevée." },
                { name: "Temple d'Opet", desc: "Sanctuaire ptolémaïque consacré à la déesse Opet, avec des reliefs d'une finesse exceptionnelle." },
                { name: 'Dromos des Sphinx', desc: "L'avenue processionnelle reliant Karnak au Temple de Louxor, bordée de sphinx criocéphales — à voir absolument." },
              ].map((item, i) => (
                <li key={item.name} className="surface p-6 border-gold-accent">
                  <span className="text-xs font-mono text-gold/60">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="font-display text-xl mt-1">{item.name}</h3>
                  <p className="text-caption mt-3">{item.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md">Questions fréquentes</h2>
            <dl className="mt-10">
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
            <h2 className="text-display-md text-white">Visiter Karnak avec moi</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Visite privée en français, transport inclus, guide diplômé en égyptologie. Devis gratuit sous 24h.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
              <a href="https://wa.me/201002086724" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">WhatsApp →</a>
            </div>
          </div>
        </section>

        {/* Maillage */}
        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">D'autres sites à Louxor</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
                { label: 'Temple de Louxor', path: '/louxor/temple-de-louxor' },
                { label: 'Rive Ouest', path: '/louxor/rive-ouest' },
                { label: 'Montgolfière', path: '/louxor/montgolfiere' },
              ].map((link) => (
                <li key={link.path}>
                  <Link href={link.path} className="flex items-center gap-2 surface p-4 rounded-xl hover:border-gold transition-colors group">
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
