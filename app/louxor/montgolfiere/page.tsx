/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Star } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Montgolfière à Louxor au Lever du Soleil | Guide Francophone — Hisham',
    description:
      'Survolez la Vallée des Rois en montgolfière avec Hisham. Vol privatif au lever du soleil, vue panoramique sur Louxor et le Nil. Réservation avec guide francophone.',
    path: '/louxor/montgolfiere',
    ogImage: '/images/destinations/louxor/montgolfiere-louxor-lever-soleil.webp',
  });
}

const FAQ = [
  {
    question: 'À quelle heure se fait le vol en montgolfière ?',
    answer:
      "Le vol a lieu au lever du soleil, généralement entre 5h30 et 7h selon la saison. Le départ se fait depuis la rive ouest. Je vous organise le transport depuis votre hôtel pour que vous arriviez sans stress.",
  },
  {
    question: 'Le vol est-il sûr ?',
    answer:
      "Louxor est l'une des villes où l'activité montgolfière est la plus encadrée au monde. Je travaille uniquement avec des opérateurs certifiés que je connais personnellement. La sécurité est ma priorité absolue.",
  },
  {
    question: 'Peut-on combiner le vol avec une visite guidée ?',
    answer:
      "C'est même ce que je recommande ! Un vol au lever du soleil suivi d'une visite de la Vallée des Rois dans la matinée — c'est la journée parfaite à Louxor. Je vous organise les deux pour un programme fluide.",
  },
  {
    question: 'Quelle durée pour le vol ?',
    answer:
      "Le vol dure environ 45 minutes à 1 heure selon les conditions météo. Le soleil qui se lève sur les falaises de la rive ouest pendant que vous survolez les temples — c'est un moment que mes clients décrivent toujours comme magique.",
  },
];

export default function MontgoflierePage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'TouristTrip',
          name: 'Vol en montgolfière au lever du soleil à Louxor',
          description: 'Survol en montgolfière de la Vallée des Rois et du Nil au lever du soleil depuis Louxor.',
          url: 'https://guide-francophone-louxor.com/louxor/montgolfiere',
          image: '/images/destinations/louxor/montgolfiere-louxor-lever-soleil.webp',
        }}
      />
      <JsonLd data={schemaBreadcrumb([{ name: 'Louxor', path: '/louxor' }, { name: 'Montgolfière', path: '/louxor/montgolfiere' }])} />
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: FAQ.map((f) => ({ '@type': 'Question', name: f.question, acceptedAnswer: { '@type': 'Answer', text: f.answer } })),
        }}
      />

      <main id="main-content">
        <section aria-labelledby="page-title" className="relative overflow-hidden min-h-[320px]" style={{ aspectRatio: '21/9' }}>
          <Image src="/images/destinations/louxor/montgolfiere-louxor-lever-soleil.webp" alt="Montgolfière au-dessus de la Vallée des Rois, Louxor au lever du soleil" fill priority sizes="100vw" className="object-cover" />
          <div className="overlay-nil absolute inset-0" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-transparent pointer-events-none" />
          <nav aria-label="Fil d'Ariane" className="absolute top-0 left-0 right-0 z-10 pt-20">
            <ol className="flex gap-2 text-caption container-luxury py-3 list-none flex-wrap">
              <li><Link href="/" className="text-white/75 hover:text-white transition-colors drop-shadow">Accueil</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li><Link href="/louxor" className="text-white/75 hover:text-white transition-colors drop-shadow">Louxor</Link></li>
              <li aria-hidden="true" className="text-white/40">›</li>
              <li aria-current="page" className="text-gold drop-shadow">Montgolfière</li>
            </ol>
          </nav>
          <div className="absolute inset-0 flex flex-col justify-end container-luxury pb-12">
            <span className="badge badge-white mb-3 self-start">Louxor · Expérience unique</span>
            <h1 id="page-title" className="text-display-xl text-white text-balance">Montgolfière au lever du soleil</h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">Survolez la Vallée des Rois et le Nil au moment magique de l'aube</p>
          </div>
        </section>

        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted"><Clock size={14} className="text-gold" /> Durée du vol : ~1 heure</span>
              <span className="flex items-center gap-2 text-sm text-text-muted"><Star size={14} className="text-gold fill-gold" /> À partir de 120€/personne</span>
            </div>
            <h2 className="text-display-md text-balance">Louxor vue du ciel</h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Il y a des expériences qui marquent une vie. Le vol en montgolfière au-dessus de la
                Vallée des Rois en est une. À 300 mètres d'altitude, dans le silence absolu du petit
                matin, vous voyez s'étirer sous vous le Nil d'or, les temples endormis, les falaises
                ocre de la rive ouest — et le soleil qui commence à peindre le ciel.
              </p>
              <p>
                Louxor est la capitale mondiale de la montgolfière : plus de 50 000 vols sont effectués
                chaque année au-dessus de la ville. Je travaille avec des opérateurs sérieux que je
                connais personnellement, dont j'ai vérifié les certifications et les pratiques de sécurité.
              </p>
              <p>
                Je m'occupe de tout : réservation du vol, transport depuis votre hôtel à 5h du matin,
                accompagnement jusqu'au site de décollage. Après le vol, si vous le souhaitez, nous
                enchaînons avec une visite de la Vallée des Rois — la journée parfaite à Louxor.
              </p>
            </div>
          </div>
        </section>

        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md">Ce que vous survolez</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {[
                { name: 'Vallée des Rois', desc: 'Vue aérienne de la nécropole royale et de ses gorges sculptées par les millénaires.' },
                { name: 'Temple de Deir el-Bahari', desc: 'Le temple de la reine Hatchepsout apparaît dans toute sa géométrie parfaite depuis les airs.' },
                { name: 'Le Nil', desc: 'La ligne verte de la végétation qui borde le Nil, tranchant avec le désert, est saisissante.' },
                { name: 'Champs et villages', desc: "La vie agricole de la rive ouest, les palmiers, les canaux — l'Égypte éternelle." },
                { name: 'Temple de Médinet Habou', desc: 'Le temple funéraire de Ramsès III vu du ciel révèle son plan parfait.' },
                { name: 'Colosses de Memnon', desc: 'Les deux statues colossales surgissent de la plaine comme des sentinelles silencieuses.' },
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
            <h2 className="text-display-md text-white">Réserver votre vol en montgolfière</h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">Je m'occupe de la réservation, du transport et de la logistique. Devis gratuit sous 24h.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
              <a href="https://wa.me/201002086724" className="btn btn-outline-white" target="_blank" rel="noopener noreferrer">WhatsApp →</a>
            </div>
          </div>
        </section>

        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">D'autres expériences à Louxor</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
                { label: 'Temple de Karnak', path: '/louxor/temple-de-karnak' },
                { label: 'Rive Ouest', path: '/louxor/rive-ouest' },
                { label: 'Croisière sur le Nil', path: '/croisieres-en-egypte-sur-le-nil' },
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
