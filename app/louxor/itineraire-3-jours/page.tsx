/* eslint-disable react/no-unescaped-entities */
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Star, MapPin } from 'lucide-react';
import { JsonLd } from '@/components/JsonLd';
import { generateMetadata as _gen } from '@/lib/seo';
import { schemaTravelAgency, schemaBreadcrumb, schemaFaqPage, schemaTouristTrip } from '@/lib/schema';

export async function generateMetadata(): Promise<Metadata> {
  return _gen({
    title: 'Louxor en 3 jours : programme complet avec guide | Hisham, égyptologue',
    description:
      "Itinéraire 3 jours à Louxor avec guide francophone : rive ouest, rive est, Abydos ou Dendérah, montgolfière, musée, Nil. Programme détaillé, horaires, conseils. Devis gratuit.",
    path: '/louxor/itineraire-3-jours',
    ogImage: '/images/destinations/louxor/montgolfiere-louxor-lever-soleil.webp',
  });
}

const FAQ = [
  {
    question: "3 jours à Louxor : que peut-on ajouter par rapport à 2 jours ?",
    answer:
      "Le troisième jour ouvre plusieurs possibilités : une excursion à Abydos (temple de Séti Ier, parmi les plus beaux d'Égypte) ou à Dendérah (temple de la déesse Hathor, exceptionnel), un vol en montgolfière au lever du soleil, une visite approfondie du musée de Louxor avec les momies royales, ou encore Deir el-Medina, le village des artisans qui ont construit les tombes. Trois jours donnent le temps d'explorer Louxor en profondeur.",
  },
  {
    question: "La montgolfière à Louxor mérite-t-elle d'être incluse dans un séjour de 3 jours ?",
    answer:
      "Absolument — c'est l'une des expériences les plus inoubliables d'Égypte. Survoler la rive ouest au lever du soleil, voir les temples et les nécropoles baignés dans la lumière dorée depuis 300 mètres d'altitude, c'est une émotion à part entière. Je recommande de programmer le vol le troisième matin, après avoir visité les sites au sol. Vous apprécierez encore davantage ce que vous voyez depuis les airs.",
  },
  {
    question: "Peut-on combiner Louxor et Assouan en 3 jours ?",
    answer:
      "Louxor-Assouan aller-retour en 3 jours est réalisable mais épuisant. Je recommande plutôt de dédier les 3 jours entièrement à Louxor, ou de prévoir 4-5 jours pour inclure Assouan. Assouan mérite au minimum 2 journées : temple de Philae, Haute Barrage, Kom Ombo, tombes des nobles — et idéalement Abou Simbel. Si votre séjour en Égypte le permet, contactez-moi pour un programme sur mesure.",
  },
  {
    question: "Quel budget prévoir pour 3 jours à Louxor avec guide privé ?",
    answer:
      "Un programme complet 3 jours avec guide égyptologue francophone privé, transport et billets d'entrée inclus se situe à partir de 200 € par personne pour un couple, moins encore pour un groupe. Le vol en montgolfière représente un supplément d'environ 90-120 €/personne. Je prépare un devis détaillé gratuit sur votre demande — en précisant le nombre de personnes, vos dates et vos préférences.",
  },
];

export default function ItineraireTroisJoursPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaTouristTrip({
          name: 'Louxor en 3 jours — Programme complet avec guide francophone',
          description:
            'Itinéraire 3 jours à Louxor : rive ouest, rive est, excursion Abydos ou Dendérah, montgolfière au lever du soleil.',
          path: '/louxor/itineraire-3-jours',
          image: '/images/destinations/louxor/montgolfiere-louxor-lever-soleil.webp',
          duration: 'P3D',
        })}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: 'Louxor en 3 jours', path: '/louxor/itineraire-3-jours' },
        ])}
      />
      <JsonLd data={schemaFaqPage(FAQ)} />

      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/destinations/louxor/montgolfiere-louxor-lever-soleil.webp"
            alt="Montgolfière à Louxor au lever du soleil — programme 3 jours avec guide francophone Hisham"
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
              <li aria-current="page" className="text-gold drop-shadow">Itinéraire 3 jours</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Itinéraire · 3 jours · Guide privé</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              Louxor en 3 jours
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              Le programme ultime pour vivre Louxor en profondeur — y compris la montgolfière
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-gold" /> 3 jours complets
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-gold" /> Louxor + excursion Abydos/Dendérah
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Star size={14} className="text-gold fill-gold" /> À partir de 200 €/personne
              </span>
            </div>

            <div className="bg-parchment-gradient rounded-2xl p-6 border border-gold/20 mb-10">
              <p className="text-lg leading-relaxed font-medium text-balance">
                Louxor en 3 jours est la formule idéale : rive ouest complète le premier jour,
                rive est approfondie le deuxième, et une excursion vers Abydos ou Dendérah (ou
                une matinée en montgolfière) le troisième. C'est le programme qui permet de
                vraiment comprendre et ressentir cette ville-musée à ciel ouvert, sans rien
                sacrifier.
              </p>
            </div>

            <h2 className="text-display-md text-balance">Programme sur 3 jours</h2>
          </div>
        </section>

        {/* Les 3 jours */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <div className="space-y-16">
              {[
                {
                  jour: 1,
                  titre: 'Rive ouest — La cité des morts',
                  sites: [
                    { time: '06:00', name: 'Vallée des Rois', detail: '4-5 tombes dont des moins connues, sans précipitation' },
                    { time: '09:00', name: "Temple d'Hatchepsout", detail: 'Visite approfondie avec toutes les chapelles' },
                    { time: '11:00', name: 'Colosses de Memnon', detail: 'Photos et contexte historique' },
                    { time: '11:30', name: 'Vallée des Reines', detail: 'Dont la tombe de Néfertari si disponible' },
                    { time: '14:00', name: 'Médinet Habou', detail: 'Temple funéraire de Ramsès III — extraordinaire et peu fréquenté' },
                    { time: '17:00', name: 'Coucher de soleil sur le Nil', detail: 'Face aux falaises rougissantes de la rive ouest' },
                  ],
                },
                {
                  jour: 2,
                  titre: 'Rive est — La cité des vivants',
                  sites: [
                    { time: '08:00', name: 'Temple de Karnak', detail: 'Visite complète de 2h avec chapelles secondaires' },
                    { time: '10:30', name: 'Musée de Louxor', detail: 'Momies royales, statues, bijoux — une heure de pur bonheur' },
                    { time: '12:30', name: 'Déjeuner', detail: 'Restaurant local recommandé' },
                    { time: '14:30', name: 'Souk de Louxor', detail: 'Artisans locaux, épices, papyrus authentiques' },
                    { time: '16:00', name: 'Temple de Louxor', detail: 'Au soleil couchant, lumière spectaculaire' },
                    { time: '18:00', name: 'Felouque sur le Nil', detail: 'Navigation traditionnelle au crépuscule' },
                  ],
                },
                {
                  jour: 3,
                  titre: 'Excursion ou montgolfière — Au-delà de Louxor',
                  sites: [
                    { time: '05:00', name: 'Montgolfière (optionnel)', detail: 'Vol au lever du soleil sur la rive ouest — 1h de pure magie' },
                    { time: '07:00', name: 'Départ vers Abydos ou Dendérah', detail: '2-3h de route selon la destination choisie' },
                    { time: '10:00', name: 'Visite Abydos', detail: "Temple de Séti Ier avec les listes royales d'Abydos et le pèlerinage à Osiris" },
                    { time: '10:00', name: 'Ou visite Dendérah', detail: "Temple de la déesse Hathor avec le Zodiaque de Dendérah — époque ptolémaïque" },
                    { time: '14:00', name: 'Déjeuner et retour', detail: "Repas local en route, retour sur Louxor en fin d'après-midi" },
                    { time: '18:00', name: 'Temps libre', detail: "Dernière promenade sur la corniche du Nil, shopping souvenir" },
                  ],
                },
              ].map((programme) => (
                <div key={programme.jour}>
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-10 h-10 rounded-full bg-gold text-ink font-bold flex items-center justify-center flex-shrink-0">{programme.jour}</span>
                    <h2 className="text-display-md">{programme.titre}</h2>
                  </div>
                  <ul className="space-y-4 list-none p-0">
                    {programme.sites.map((site) => (
                      <li key={`${site.time}-${site.name}`} className="grid grid-cols-[70px_1fr] gap-4 items-start">
                        <span className="font-mono text-gold font-semibold text-sm pt-1">{site.time}</span>
                        <div className="surface p-4">
                          <span className="font-display text-lg">{site.name}</span>
                          <p className="text-caption mt-1 text-sm">{site.detail}</p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="section-y">
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
              Réserver votre séjour de 3 jours à Louxor
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Je prépare votre programme sur mesure : sites, horaires, hébergements, montgolfière. Devis gratuit sous 24h.
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
            <h2 className="text-display-md">Explorer chaque site en détail</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Louxor en 1 jour', path: '/louxor/itineraire-1-jour' },
                { label: 'Louxor en 2 jours', path: '/louxor/itineraire-2-jours' },
                { label: 'Montgolfière à Louxor', path: '/louxor/montgolfiere' },
                { label: 'Croisière sur le Nil', path: '/croisieres-en-egypte-sur-le-nil' },
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
