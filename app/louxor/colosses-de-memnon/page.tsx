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
    title: 'Colosses de Memnon à Louxor | Guide Francophone — Hisham',
    description:
      "Découvrez les Colosses de Memnon avec Hisham, guide égyptologue francophone. Ces statues de 18 m d'Amenhotep III ont traversé 33 siècles. Visite guidée privée sur la rive ouest de Louxor.",
    path: '/louxor/colosses-de-memnon',
    ogImage: '/images/destinations/louxor/colosses-memnon-louxor.webp',
  });
}

const schemaLD = {
  '@context': 'https://schema.org',
  '@type': 'TouristAttraction',
  name: 'Colosses de Memnon',
  description:
    "Deux statues colossales de 18 mètres représentant le pharaon Amenhotep III, érigées vers 1350 av. J.-C. sur la rive ouest de Louxor. Gardiens de son temple funéraire aujourd'hui disparu.",
  url: 'https://www.guidefrancophonelouxor.com/louxor/colosses-de-memnon',
  image: '/images/destinations/louxor/colosses-memnon-louxor.webp',
  touristType: 'Tourisme culturel et archéologique',
  geo: { '@type': 'GeoCoordinates', latitude: 25.7201, longitude: 32.6102 },
  containedInPlace: { '@type': 'City', name: 'Louxor', addressCountry: 'EG' },
};

const FAQ = [
  {
    question: "Pourquoi appelle-t-on ces statues les Colosses de 'Memnon' ?",
    answer:
      "Les Grecs et Romains de l'Antiquité les ont associés à Memnon, héros troyen tué par Achille dans la mythologie grecque. Les Grecs pensaient entendre la voix de Memnon saluer sa mère Aurore au lever du soleil — en réalité, c'était le son produit par l'évaporation de la rosée dans les fissures du grès, suite à un tremblement de terre au Ier siècle av. J.-C. Ce phénomène a cessé après une restauration romaine.",
  },
  {
    question: "Que représentent exactement ces deux statues ?",
    answer:
      "Les deux statues représentent le pharaon Amenhotep III (vers 1388-1350 av. J.-C.) assis sur son trône, les mains posées à plat sur les genoux, le regard tourné vers l'est et le Nil. Elles flanquaient l'entrée de son temple funéraire — le plus grand jamais construit en Égypte, aujourd'hui presque entièrement disparu sous les champs agricoles.",
  },
  {
    question: "Peut-on s'approcher des Colosses de Memnon ?",
    answer:
      "Oui, l'accès au pied des statues est libre et inclus dans votre billet de la rive ouest. Vous pouvez vous en approcher pour les photographier — c'est l'un des rares sites égyptiens où vous pouvez vous trouver si près de statues aussi monumentales. Je vous montre les détails souvent ignorés : les statues latérales de la mère et de l'épouse du pharaon, et les inscriptions des voyageurs gréco-romains gravées sur le socle.",
  },
  {
    question: "Combien de temps faut-il pour visiter les Colosses de Memnon ?",
    answer:
      "La visite en elle-même dure 20 à 30 minutes. Les Colosses sont presque toujours intégrés dans une demi-journée ou journée complète sur la rive ouest de Louxor, avec la Vallée des Rois et le temple d'Hatchepsout. Ils constituent un arrêt incontournable — photographique et historique — sur le chemin entre les deux grandes nécropoles.",
  },
];

export default function ColossesMemnonPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd data={schemaLD} />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: 'Colosses de Memnon', path: '/louxor/colosses-de-memnon' },
        ])}
      />
      <JsonLd data={schemaFaqPage(FAQ)} />

      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/destinations/louxor/colosses-memnon-louxor.webp"
            alt="Colosses de Memnon sur la rive ouest de Louxor — visite guidée francophone avec Hisham"
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
              <li aria-current="page" className="text-gold drop-shadow">Colosses de Memnon</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Louxor · Rive Ouest</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              Colosses de Memnon
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              Deux statues de 18 mètres qui gardent la rive des morts depuis 33 siècles
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-gold" /> Durée de visite : 20 à 30 min
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-gold" /> Rive ouest de Louxor, route de la Vallée des Rois
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Star size={14} className="text-gold fill-gold" /> Inclus dans les programmes rive ouest
              </span>
            </div>

            <h2 className="text-display-md text-balance">
              Les gardiens de la rive des morts
            </h2>
            <div className="mt-6 space-y-4 text-lg text-text-muted leading-relaxed text-pretty">
              <p>
                Les Colosses de Memnon sont deux statues monumentales de 18 mètres de haut
                représentant le pharaon Amenhotep III, érigées vers 1350 av. J.-C. sur la rive
                ouest de Louxor. Gardiens de son temple funéraire — le plus grand jamais construit
                en Égypte, aujourd'hui presque entièrement disparu —, ils constituent l'une des
                images les plus emblématiques de toute l'Égypte.
              </p>
              <p>
                Ces deux statues colossales, taillées dans des blocs de grès amenés depuis
                Héliopolis (près du Caire actuel) sur une distance de 700 kilomètres, pèsent
                chacune environ 720 tonnes. Pendant des siècles, elles ont fasciné voyageurs
                grecs, romains, médiévaux et modernes qui venaient observer ce qu'ils croyaient
                être un miracle : les statues qui "parlaient" au lever du soleil.
              </p>
              <p>
                En réalité, ce phénomène sonore — décrit par des dizaines d'auteurs de l'Antiquité
                — était produit par l'évaporation de la rosée dans les fissures créées par un
                tremblement de terre. Les empereurs romains eux-mêmes vinrent en pèlerinage pour
                entendre ces colosses "chanter". J'adore raconter cette histoire à mes clients —
                elle illustre parfaitement comment l'Égypte ancienne a toujours su fasciner et
                mystifier le monde entier.
              </p>
            </div>
          </div>
        </section>

        {/* Détails historiques */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <h2 className="text-display-md text-balance">
              Ce que vous ne verrez pas seul
            </h2>
            <p className="text-text-muted mt-4 max-w-xl">
              Au-delà de la photo, les Colosses de Memnon recèlent des détails que j'aime vous montrer en personne.
            </p>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 list-none p-0">
              {[
                {
                  titre: 'Les statues latérales',
                  desc: "À l'extérieur de chaque trône se trouvent deux petites statues : la mère du pharaon (Moutemouia) et son épouse principale (Tiyi). Des détails que la plupart des visiteurs ne remarquent pas.",
                },
                {
                  titre: 'Les inscriptions romaines',
                  desc: "Sur le socle de la statue nord, des inscriptions en grec et en latin gravées par des visiteurs de l'Antiquité — dont certaines mentionnent le son mystérieux entendu à l'aube. Un livre d'or vieux de 2 000 ans.",
                },
                {
                  titre: 'Le temple disparu',
                  desc: "Derrière les statues s'étendait le temple funéraire d'Amenhotep III — plus grand que Karnak. Aujourd'hui presque totalement disparu sous les champs, il est en cours de fouilles depuis les années 1990.",
                },
                {
                  titre: "L'orientation astronomique",
                  desc: "Les colosses regardent vers l'est — le Nil et le soleil levant. Pendant les équinoxes, le soleil se lève exactement en face d'eux. Une mise en scène astronomique vieille de 33 siècles.",
                },
                {
                  titre: 'La couleur originale',
                  desc: "À l'époque du Nouvel Empire, les statues étaient peintes en rouge-ocre vif. Le blanc du grès que vous voyez aujourd'hui n'est que l'os de ce qu'elles étaient dans leur splendeur initiale.",
                },
                {
                  titre: 'Le tremblement de terre',
                  desc: "En 27 av. J.-C., un violent séisme fissure la statue nord — créant les fissures qui feront chanter Memnon. En 199 apr. J.-C., l'empereur Septime Sévère la fait restaurer : le chant cesse pour toujours.",
                },
              ].map((detail) => (
                <li key={detail.titre} className="surface p-6 border-gold-accent">
                  <h3 className="font-display text-xl">{detail.titre}</h3>
                  <p className="text-caption mt-3">{detail.desc}</p>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y">
          <div className="container-narrow">
            <h2 className="text-display-md">Questions fréquentes sur les Colosses de Memnon</h2>
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
              Visiter la rive ouest de Louxor avec moi
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Colosses de Memnon, Vallée des Rois, temple d'Hatchepsout — une demi-journée inoubliable avec guide égyptologue francophone.
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
                { label: "Temple d'Hatchepsout", path: '/louxor/temple-hatchepsout' },
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
          </div>
        </section>
      </main>
    </>
  );
}
