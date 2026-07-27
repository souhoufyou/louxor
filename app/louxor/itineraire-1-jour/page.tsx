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
    title: 'Louxor en 1 jour : itinéraire complet avec guide francophone | Hisham',
    description:
      "Comment visiter Louxor en une seule journée ? Hisham, guide égyptologue, vous propose l'itinéraire parfait : Vallée des Rois, Hatchepsout, Karnak, Temple de Louxor. Programme, horaires et conseils.",
    path: '/louxor/itineraire-1-jour',
    ogImage: '/images/destinations/louxor/vallee-des-rois-panorama.webp',
  });
}

const FAQ = [
  {
    question: 'Est-il vraiment possible de visiter Louxor en une seule journée ?',
    answer:
      "Oui, c'est possible et c'est ce que font la majorité des touristes qui viennent en excursion depuis Hurghada ou la Mer Rouge. En démarrant à 6h-7h du matin et en rentrant vers 19h-20h, vous pouvez voir les sites essentiels de la rive ouest (Vallée des Rois + temple d'Hatchepsout + Colosses de Memnon) et de la rive est (Temple de Karnak + Temple de Louxor). Avec moi comme guide privé, vous évitez les files d'attente et gagnez un temps précieux.",
  },
  {
    question: "Dans quel ordre visiter les sites pour optimiser sa journée ?",
    answer:
      "Je recommande toujours de commencer par la rive ouest (Vallée des Rois en premier, dès 6h, quand il fait encore frais et les tombes sont vides). On enchaîne avec Hatchepsout, puis les Colosses de Memnon en partant. L'après-midi, direction rive est : Karnak puis Temple de Louxor au coucher du soleil. C'est le programme que j'optimise en temps réel selon l'affluence du jour.",
  },
  {
    question: "Quelle est la meilleure saison pour visiter Louxor en une journée ?",
    answer:
      "De novembre à mars, les températures sont idéales (15-25°C). En juillet-août, il fait facilement 45°C dans les tombes — la journée est épuisante. Si vous venez en été, réduisez le programme à la rive ouest le matin seulement, sieste à l'hôtel, et Karnak le soir. Je vous conseille sur le programme adapté à la saison de votre voyage.",
  },
  {
    question: "Combien coûte une journée à Louxor avec guide privé ?",
    answer:
      "Une journée complète à Louxor avec guide égyptologue francophone privé, transport en véhicule climatisé et billets d'entrée principaux inclus démarre à partir de 80 € par personne. Le prix par personne diminue à mesure que le groupe est grand (famille, couple, amis). Je prépare un devis personnalisé et gratuit sur votre demande.",
  },
  {
    question: "Que laisser de côté si j'ai seulement 6-7 heures à Louxor ?",
    answer:
      "Avec 6-7 heures seulement, concentrez-vous sur la Vallée des Rois (absolument incontournable) + Temple de Karnak. Si vous aimez l'histoire, ajoutez temple d'Hatchepsout. Si vous préférez les photos, ajoutez les Colosses de Memnon et le temple de Louxor au coucher du soleil. Je construis le programme en fonction de vos priorités — une simple conversation WhatsApp suffit.",
  },
];

export default function ItinerairUnJourPage() {
  return (
    <>
      <JsonLd data={schemaTravelAgency()} />
      <JsonLd
        data={schemaTouristTrip({
          name: 'Louxor en 1 jour — Itinéraire complet avec guide francophone',
          description:
            'Programme complet pour visiter Louxor en une journée : Vallée des Rois, temple d\'Hatchepsout, Colosses de Memnon, Karnak et temple de Louxor.',
          path: '/louxor/itineraire-1-jour',
          image: '/images/destinations/louxor/vallee-des-rois-panorama.webp',
          duration: 'PT10H',
        })}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { name: 'Louxor', path: '/louxor' },
          { name: 'Louxor en 1 jour', path: '/louxor/itineraire-1-jour' },
        ])}
      />
      <JsonLd data={schemaFaqPage(FAQ)} />

      <main id="main-content">
        {/* Hero */}
        <section aria-labelledby="page-title" className="relative flex flex-col overflow-hidden min-h-[440px] md:min-h-[520px]">
          <Image
            src="/images/destinations/louxor/vallee-des-rois-panorama.webp"
            alt="Vallée des Rois à Louxor — programme journée complète avec guide francophone Hisham"
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
              <li aria-current="page" className="text-gold drop-shadow">Itinéraire 1 jour</li>
            </ol>
          </nav>
          <div className="relative z-10 mt-auto container-luxury pt-6 pb-12 flex flex-col items-start">
            <span className="badge badge-white mb-3 self-start">Itinéraire · Guide privé francophone</span>
            <h1 id="page-title" className="text-display-lg text-white text-balance">
              Louxor en 1 jour
            </h1>
            <p className="text-gold mt-3 text-xl max-w-2xl">
              L'itinéraire complet pour découvrir les incontournables en une journée
            </p>
          </div>
        </section>

        {/* Featured snippet */}
        <section className="section-y">
          <div className="container-narrow">
            <div className="flex flex-wrap gap-4 mb-8">
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Clock size={14} className="text-gold" /> 8 à 10 heures
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <MapPin size={14} className="text-gold" /> Rive est + rive ouest de Louxor
              </span>
              <span className="flex items-center gap-2 text-sm text-text-muted">
                <Star size={14} className="text-gold fill-gold" /> À partir de 80 €/personne
              </span>
            </div>

            <div className="bg-parchment-gradient rounded-2xl p-6 border border-gold/20 mb-10">
              <p className="text-lg leading-relaxed font-medium text-balance">
                Visiter Louxor en 1 jour est possible en commençant par la rive ouest (Vallée des
                Rois + temple d'Hatchepsout + Colosses de Memnon) le matin, puis la rive est
                (Temple de Karnak + Temple de Louxor) l'après-midi. Comptez 8 à 10 heures avec un
                guide privé francophone pour tout voir à votre rythme.
              </p>
            </div>

            <h2 className="text-display-md text-balance">Programme de la journée</h2>
            <p className="text-text-muted mt-4 text-lg">
              Voici l'itinéraire type que je propose. Je l'adapte en temps réel selon l'affluence,
              les préférences et l'énergie de chacun.
            </p>
          </div>
        </section>

        {/* Timeline */}
        <section className="section-y bg-parchment-gradient">
          <div className="container-narrow">
            <h2 className="text-display-md mb-10">Déroulé heure par heure</h2>
            <ol className="space-y-0 list-none p-0">
              {[
                {
                  time: '06:00',
                  titre: 'Prise en charge à votre hôtel',
                  desc: "Départ matinal depuis votre hôtel en véhicule climatisé. Le Nil, le désert, la magie du lever du soleil sur Louxor — c'est notre bienvenue avant même le premier site.",
                  cote: 'rive-ouest',
                },
                {
                  time: '06:30',
                  titre: 'Vallée des Rois',
                  desc: "Arrivée tôt quand les tombes sont fraîches et vides. Je vous emmène vers les 3 tombes les plus fascinantes selon votre profil : Toutânkhamon, Ramsès VI, Séthi Ier, Ramsès IV... Durée : 1h30.",
                  cote: 'rive-ouest',
                },
                {
                  time: '08:30',
                  titre: "Temple d'Hatchepsout",
                  desc: "L'architecture la plus unique d'Égypte, au pied des falaises de Deir el-Bahari. Je vous raconte l'histoire de la reine-pharaon et les traces de son effacement. Durée : 1h.",
                  cote: 'rive-ouest',
                },
                {
                  time: '10:00',
                  titre: 'Colosses de Memnon',
                  desc: "Arrêt photos incontournable : ces deux statues de 18 mètres sur fond de montagne dorée offrent l'une des images les plus emblématiques d'Égypte. Je vous explique le mythe du « chant de Memnon ». Durée : 30 min.",
                  cote: 'rive-ouest',
                },
                {
                  time: '10:30',
                  titre: 'Déjeuner + pause',
                  desc: "Restaurant traditionnel recommandé sur la rive est : mezze égyptiens, jus de canne fraîche, ombre et repos. Vous reprenez de l'énergie pour l'après-midi.",
                  cote: 'pause',
                },
                {
                  time: '13:00',
                  titre: 'Temple de Karnak',
                  desc: "Le plus grand complexe religieux de l'Antiquité. Grande Salle Hypostyle aux 134 colonnes géantes, sanctuaire d'Amon, lac sacré, obélisques... Je vous explique 2 000 ans de construction. Durée : 1h30 à 2h.",
                  cote: 'rive-est',
                },
                {
                  time: '15:30',
                  titre: 'Avenue des Sphinx',
                  desc: "Courte pause sur cette allée mythique de 3 km qui relie Karnak au Temple de Louxor — restaurée récemment, elle est spectaculaire.",
                  cote: 'rive-est',
                },
                {
                  time: '16:00',
                  titre: 'Temple de Louxor',
                  desc: "En fin d'après-midi, la lumière dorée transforme ce temple en décor irréel. Statues de Ramsès II, obélisque, colonnade d'Amenhotep III. Durée : 45 min à 1h.",
                  cote: 'rive-est',
                },
                {
                  time: '17:30',
                  titre: 'Corniche du Nil',
                  desc: "Promenade optionnelle sur la corniche face au Nil. Moment de calme et de contemplation avant de rentrer.",
                  cote: 'optionnel',
                },
                {
                  time: '18:00',
                  titre: 'Retour à votre hôtel',
                  desc: "Fin de cette journée inoubliable. Je vous dépose à votre hôtel ou bateau de croisière avec, en plus des souvenirs, une compréhension profonde de 4 000 ans d'histoire égyptienne.",
                  cote: 'retour',
                },
              ].map((etape) => (
                <li key={etape.time} className="grid grid-cols-[80px_1fr] gap-6 pb-8">
                  <div className="pt-1">
                    <span className="font-mono text-gold font-semibold text-sm">{etape.time}</span>
                  </div>
                  <div className={`surface p-5 border-l-4 ${
                    etape.cote === 'rive-ouest' ? 'border-l-gold' :
                    etape.cote === 'rive-est' ? 'border-l-blue-400' :
                    etape.cote === 'pause' ? 'border-l-green-400' :
                    'border-l-white/20'
                  }`}>
                    <h3 className="font-display text-xl">{etape.titre}</h3>
                    <p className="text-caption mt-2">{etape.desc}</p>
                    {etape.cote === 'rive-ouest' && <span className="text-xs text-gold/60 font-medium mt-2 inline-block">Rive ouest</span>}
                    {etape.cote === 'rive-est' && <span className="text-xs text-blue-400/80 font-medium mt-2 inline-block">Rive est</span>}
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Ce qui est inclus */}
        <section className="section-y">
          <div className="container-luxury">
            <h2 className="text-display-md">Ce qui est inclus</h2>
            <div className="grid md:grid-cols-2 gap-8 mt-10">
              <div>
                <h3 className="font-display text-xl text-green-500 mb-4">✅ Inclus</h3>
                <ul className="space-y-2 list-none p-0 text-text-muted">
                  {[
                    'Guide égyptologue francophone privé toute la journée',
                    'Transport en véhicule climatisé avec chauffeur',
                    'Prise en charge et retour à votre hôtel',
                    'Billets d\'entrée des sites principaux du programme',
                    'Eau minérale pendant la journée',
                    'Flexibilité totale du programme',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-green-500 flex-shrink-0">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-display text-xl text-text-muted mb-4">À votre charge</h3>
                <ul className="space-y-2 list-none p-0 text-text-muted">
                  {[
                    'Repas et boissons (hors eau minérale)',
                    'Entrées optionnelles (tombe de Toutânkhamon, etc.)',
                    'Pourboires, laissés à votre appréciation',
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <span className="text-text-muted flex-shrink-0">○</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
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
              Réserver votre journée à Louxor
            </h2>
            <p className="text-gold-muted mt-4 max-w-xl mx-auto">
              Devis gratuit et personnalisé sous 24h. Dites-moi vos dates, votre lieu de départ et votre groupe — je prépare le programme idéal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link href="/contact" className="btn btn-primary">Demander un devis gratuit</Link>
              <a
                href="https://wa.me/201002086724?text=Bonjour%20Hisham%2C%20je%20souhaite%20visiter%20Louxor%20en%201%20jour."
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
            <h2 className="text-display-md">Vous avez plus de temps ? Explorez davantage</h2>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8 list-none p-0">
              {[
                { label: 'Louxor en 2 jours', path: '/louxor/itineraire-2-jours' },
                { label: 'Louxor en 3 jours', path: '/louxor/itineraire-3-jours' },
                { label: 'Vallée des Rois', path: '/louxor/vallee-des-rois' },
                { label: 'Temple de Karnak', path: '/louxor/temple-de-karnak' },
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
