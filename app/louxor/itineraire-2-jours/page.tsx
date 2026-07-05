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
    title: 'Louxor en 2 jours : itinéraire détaillé avec guide francophone | Hisham',
    description:
      "Programme complet pour visiter Louxor en 2 jours avec un guide égyptologue francophone. Jour 1 : rive ouest. Jour 2 : rive est et Nil. Hisham organise tout depuis votre hôtel.",
    path: '/louxor/itineraire-2-jours',
    ogImage: '/images/destinations/louxor/temple-karnak-colonnes-louxor.webp',
  });
}

const FAQ = [
  {
    question: "Louxor en 2 jours : est-ce suffisant pour tout voir ?",
    answer:
      "Deux jours permettent de voir les incontournables sans se précipiter : Vallée des Rois, temple d'Hatchepsout, Colosses de Memnon, Vallée des Reines (jour 1), puis Karnak, temple de Louxor, musée de Louxor et promenade en felouque (jour 2). En 2 jours, vous aurez le temps d'apprécier chaque site sans vous sentir épuisé. C'est la durée idéale pour découvrir l'essentiel.",
  },
  {
    question: "Quelle est la différence entre Louxor en 1 jour et Louxor en 2 jours ?",
    answer:
      "En 1 jour, on court et on voit les sites en surface. En 2 jours, on a le temps d'aller plus loin : on visite des tombes secondaires à la Vallée des Rois, on explore des quartiers hors sentiers battus à Louxor, on fait une promenade en felouque au coucher du soleil, on visite le musée de Louxor. La qualité de l'expérience est incomparablement supérieure.",
  },
  {
    question: "Peut-on ajouter une excursion vers Abydos ou Dendérah en 2 jours ?",
    answer:
      "Oui, Abydos et Dendérah sont à 2-3h de route depuis Louxor. Si cela vous intéresse, je vous recommande de leur dédier une demi-journée ou une journée entière et d'ajuster le programme de Louxor en conséquence. Ce sont deux sites extraordinaires que très peu de touristes visitent — et que j'adore y emmener les passionnés d'histoire.",
  },
  {
    question: "Où dormir à Louxor pour un séjour de 2 jours ?",
    answer:
      "Louxor dispose d'une large gamme d'hébergements, du ryad authentique aux hôtels 5 étoiles en bord de Nil. Je peux vous recommander des adresses selon votre budget et vos préférences — certains hôtels sur la rive est offrent des vues spectaculaires sur le Nil et les temples illuminés la nuit.",
  },
];

export default function ItinerairDeuxJoursPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaTouristTrip({
          name: 'Louxor en 2 jours — Itinéraire complet avec guide francophone',
          description:
            'Programme sur 2 jours à Louxor : rive ouest le premier jour (Vallée des Rois, Hatchepsout, Colosses, Vallée des Reines), rive est le deuxième (Karnak, Temple de Louxor, musée, felouque).',
          path: '/louxor/itineraire-2-jours',
          image: '/images/destinations/louxor/temple-karnak-colonnes-louxor.webp',
          duration: 'P2D',
        })}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: 'Louxor en 2 jours', path: '/louxor/itineraire-2-jours' },
        ])}
      />
      <JsonLd data={schemaFaqPage(FAQ)} />

      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/destinations/louxor/temple-karnak-colonnes-louxor.webp"
            alt="Temple de Karnak, Louxor — programme 2 jours avec guide francophone Hisham"
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
              <li aria-current="page" className="text-gold drop-shadow">Itinéraire 2 jours</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Itinéraire · 2 jours · Guide privé</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              Louxor en 2 jours
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              Le programme idéal pour explorer les deux rives du Nil sans se presser
            </p>
          </div>
        </section>

        {/* Intro */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-gold" /> 2 jours · 8h de visite par jour
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-gold" /> Rive est + rive ouest complètes
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Star size={14} className="text-gold fill-gold" /> À partir de 140 €/personne
              </span>
            </div>

            <div className="bg-parchment-gradient rounded-2xl p-6 border border-gold/20 mb-10">
              <p className="text-lg leading-relaxed font-medium text-balance">
                Louxor en 2 jours permet de visiter la totalité de la rive ouest (Vallée des Rois,
                temple d'Hatchepsout, Colosses de Memnon, Vallée des Reines) le premier jour, puis
                la rive est (Karnak, Avenue des Sphinx, Temple de Louxor, musée et Nil en felouque)
                le second. C'est la durée recommandée pour découvrir Louxor sans se précipiter.
              </p>
            </div>

            <h2 className="text-display-md text-balance">Programme jour par jour</h2>
          </div>
        </section>

        {/* Jour 1 */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-luxury">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full bg-gold text-ink font-bold flex items-center justify-center flex-shrink-0">1</span>
              <h2 className="text-display-md">Jour 1 — La rive ouest : la ville des morts</h2>
            </div>
            <ol className="space-y-6 list-none p-0">
              {[
                {
                  time: '06:00',
                  titre: 'Vallée des Rois',
                  desc: "Départ tôt — les tombes sont fraîches et vides. Avec 2 jours, nous pouvons visiter 4 à 5 tombes, dont des tombes moins fréquentées aux décors extraordinaires. Durée : 2h.",
                },
                {
                  time: '08:30',
                  titre: "Temple d'Hatchepsout",
                  desc: "La plus belle architecture de la rive ouest. Je vous raconte en détail l'expédition au Pays de Pount, la naissance divine et l'effacement d'Hatchepsout. Durée : 1h30.",
                },
                {
                  time: '10:30',
                  titre: 'Colosses de Memnon + Vallée des Reines',
                  desc: "Arrêt photos aux Colosses, puis direction la Vallée des Reines — souvent ignorée par manque de temps, mais qui abrite la tombe de Néfertari, l'une des plus belles d'Égypte. Durée : 1h30.",
                },
                {
                  time: '13:00',
                  titre: 'Déjeuner sur la rive ouest',
                  desc: "Restaurant local recommandé avec vue sur les champs et les falaises. Saveurs égyptiennes authentiques.",
                },
                {
                  time: '15:00',
                  titre: 'Sites optionnels rive ouest',
                  desc: "Temple de Séthi Ier à Qurna, temple de Médinet Habou (Ramsès III), ou Deir el-Medina — le village des artisans qui ont construit les tombes. Selon votre intérêt.",
                },
                {
                  time: '18:00',
                  titre: 'Coucher de soleil face au Nil',
                  desc: "Retour côté est pour regarder le soleil se coucher sur la rive ouest — un spectacle que vous n'oublierez jamais.",
                },
              ].map((etape) => (
                <li key={etape.time} className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="pt-1">
                    <span className="font-mono text-gold font-semibold text-sm">{etape.time}</span>
                  </div>
                  <div className="surface p-5 border-l-4 border-l-gold">
                    <h3 className="font-display text-xl">{etape.titre}</h3>
                    <p className="text-caption mt-2">{etape.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Jour 2 */}
        <section className="section-y">
          <div className="container-luxury">
            <div className="flex items-center gap-4 mb-8">
              <span className="w-10 h-10 rounded-full bg-gold text-ink font-bold flex items-center justify-center flex-shrink-0">2</span>
              <h2 className="text-display-md">Jour 2 — La rive est : la ville des vivants</h2>
            </div>
            <ol className="space-y-6 list-none p-0">
              {[
                {
                  time: '08:00',
                  titre: 'Temple de Karnak',
                  desc: "Avec le temps d'une matinée complète, nous explorons Karnak en profondeur : Grande Salle Hypostyle, sanctuaire d'Amon, lac sacré, obélisques de Thoutmosis Ier et Hatchepsout. Durée : 2h.",
                },
                {
                  time: '10:30',
                  titre: 'Musée de Louxor',
                  desc: "L'un des meilleurs musées d'Égypte, rarement visité par les touristes pressés. Des œuvres d'art majeures : statues d'Amenhotep III, momies royales, bijoux de la 17e dynastie. Durée : 1h.",
                },
                {
                  time: '12:00',
                  titre: 'Déjeuner face au Nil',
                  desc: "Restaurant avec terrasse sur le Nil — vue sur les bateaux, les felouques et la rive opposée baignée de lumière.",
                },
                {
                  time: '14:00',
                  titre: 'Souk et médina de Louxor',
                  desc: "Promenade dans les ruelles du vieux Louxor, souk d'épices et d'artisanat. Je vous emmène chez des artisans locaux authentiques — pas dans les boutiques à touristes.",
                },
                {
                  time: '16:00',
                  titre: 'Temple de Louxor',
                  desc: "La lumière de fin d'après-midi magnifie les colonnes et les statues de Ramsès II. Je vous explique le lien avec le Temple de Karnak et la Grande Fête d'Opet. Durée : 45 min.",
                },
                {
                  time: '17:30',
                  titre: 'Promenade en felouque sur le Nil',
                  desc: "Navigation traditionnelle sur le Nil au coucher du soleil. Les deux rives s'embrasent de rouge et d'or — un moment de pure magie pour clôturer votre séjour.",
                },
              ].map((etape) => (
                <li key={etape.time} className="grid grid-cols-[80px_1fr] gap-6">
                  <div className="pt-1">
                    <span className="font-mono text-gold font-semibold text-sm">{etape.time}</span>
                  </div>
                  <div className="surface p-5 border-l-4 border-l-blue-400">
                    <h3 className="font-display text-xl">{etape.titre}</h3>
                    <p className="text-caption mt-2">{etape.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
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
              Réserver votre séjour de 2 jours à Louxor
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Devis gratuit et personnalisé sous 24h. Je m'occupe de tout : programme, transport, billets, hébergements si besoin.
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
            <h2 className="text-display-md">Découvrir davantage</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Louxor en 1 jour', path: '/louxor/itineraire-1-jour' },
                { label: 'Louxor en 3 jours', path: '/louxor/itineraire-3-jours' },
                { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
                { label: "Temple d'Hatchepsout", path: '/louxor/temple-hatchepsout' },
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
