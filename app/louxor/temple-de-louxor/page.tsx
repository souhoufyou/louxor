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
    title: 'Temple de Louxor | Guide Francophone Privé — Hisham',
    description:
      "Visitez le Temple de Louxor avec Hisham, guide égyptologue francophone. Sanctuaire d'Amon, obélisque de Ramsès II, sphinx. Visite de jour ou en soirée, privée et sur mesure.",
    path: '/louxor/temple-de-louxor',
    ogImage: '/images/destinations/louxor/temple-louxor-egypte.webp',
  });
}

const FAQ = [
  {
    question: 'Vaut-il mieux visiter le Temple de Louxor de jour ou de nuit ?',
    answer:
      "Les deux ont leur charme. De jour, vous profitez de la lumière pour voir les détails des bas-reliefs. La nuit, le temple est illuminé et l'atmosphère est magique. Je recommande souvent une courte visite en soirée après Karnak visité le matin.",
  },
  {
    question: 'Où est le second obélisque de Ramsès II ?',
    answer:
      "À Paris ! L'obélisque ouest a été offert à la France en 1830 et trône aujourd'hui place de la Concorde. Je montre toujours l'emplacement vide à mes visiteurs français — cela crée un lien inattendu entre Louxor et Paris.",
  },
  {
    question: 'Peut-on combiner la visite avec la Vallée des Rois ?',
    answer:
      "Oui, c'est même la combinaison que je recommande le plus souvent : Vallée des Rois le matin (rive ouest), déjeuner, puis Temple de Louxor en fin d'après-midi ou en soirée (rive est). Une journée complète mémorable.",
  },
];

export default function TempleLouxorPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristAttraction',
          name: 'Temple de Louxor',
          description: 'Temple dédié au dieu Amon construit par Amenhotep III et Ramsès II, au cœur de la ville de Louxor.',
          url: 'https://guide-francophone-louxor.com/louxor/temple-de-louxor',
          geo: { '@type': 'GeoCoordinates', latitude: 25.6996, longitude: 32.6392 },
        }}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: 'Temple de Louxor', path: '/louxor/temple-de-louxor' },
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
        <section aria-labelledby="page-title" className="relative overflow-hidden min-h-[320px]" style={{ aspectRatio: '21/9' }}>
          <Image
            src="/images/destinations/louxor/temple-louxor-facade-principale.webp"
            alt="Temple de Louxor illuminé au bord du Nil — visite guidée avec Hisham"
            fill priority sizes="100vw" className="object-cover"
          />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/louxor" className="text-white/75 hover:text-white transition-colors drop-shadow">Louxor</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Temple de Louxor</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Est · Centre-ville</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">Temple de Louxor</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Le sanctuaire d'Amon au cœur de la ville, magnifique de jour comme de nuit</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> Durée : 1h30 à 2 heures</span>
              <span className="flex items-center gap-2 text-sm text-text-muted"><MapPin size={14} className="text-gold" /> Centre de Louxor, rive est</span>
              <span className="flex items-center gap-2 text-sm text-text-muted"><Star size={14} className="text-gold fill-gold" /> À partir de 60€/personne</span>
            </div>
            <h2 className="text-display-md text-balance">Le temple du dieu caché</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Construit principalement par Amenhotep III au XVe siècle avant notre ère, puis complété et agrandi
                par Ramsès II deux siècles plus tard, le Temple de Louxor est l'un des plus beaux exemples de
                l'architecture religieuse du Nouvel Empire. Il était dédié à la triade thébaine : Amon, Mout et Khonsou.
              </p>
              <p>
                Contrairement à Karnak qui s'étend sur 30 hectares, le Temple de Louxor est plus compact mais
                d'une cohérence remarquable. Son grand pylône d'entrée est orné des scènes de la bataille de
                Qadesh, le récit épique du duel entre Ramsès II et les Hittites. Devant lui se dressent deux
                obélisques — mais l'un d'eux est à Paris depuis 1836.
              </p>
              <p>
                Ce que j'aime particulièrement dans ce temple, c'est sa situation au cœur de la ville moderne.
                Il est entouré de cafés, de marchés et de vie quotidienne — un contraste saisissant entre
                l'Antiquité et le XXIe siècle. Le voir illuminé la nuit, avec le Nil qui coule à quelques mètres,
                est une expérience que mes clients décrivent souvent comme l'un de leurs plus beaux souvenirs.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">À ne pas manquer</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {[
                { name: 'Grand Pylône de Ramsès II', desc: "Orné des scènes de la bataille de Qadesh. Devant lui se trouvaient 6 colosses et 2 obélisques — l'un est à Paris." },
                { name: "Cour d'Amenhotep III", desc: "Entourée de 74 colonnes papyriformes, cette cour est l'une des plus gracieuses de l'architecture pharaonique." },
                { name: "Chapelle d'Alexandre le Grand", desc: 'Le conquérant macédonien se fit représenter en pharaon ici — une curiosité historique fascinante.' },
                { name: 'Salle des Colonnes', desc: '32 colonnes lotiformes qui conduisent au sanctuaire intérieur où se déroulaient les rites secrets.' },
                { name: 'Dromos des Sphinx', desc: "Avenue reliant Louxor à Karnak sur 3 km, bordée de sphinx — un projet pharaonique qui vient d'être partiellement restauré." },
                { name: "L'obélisque solitaire", desc: 'Le seul des deux obélisques restants. Son jumeau se trouve place de la Concorde à Paris depuis 1836.' },
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

        <section className="section-y bg-luxury-gradient">
          <div className="container-narrow text-center">
            <h2 className="text-display-md text-white">Visiter le Temple de Louxor avec moi</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Visite privée, guide diplômé, transport inclus. Devis gratuit sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
              <a href="https://wa.me/201002086724" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">WhatsApp →</a>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">D'autres sites à Louxor</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
                { label: 'Temple de Karnak', path: '/louxor/temple-de-karnak' },
                { label: 'Vallée des Reines', path: '/louxor/vallee-des-reines' },
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
