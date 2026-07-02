import type { Metadata } from 'next';
import { generateMetadata as _gen } from '@/lib/seo';
import { getDestination, getDestinations, getExcursion } from '@/lib/content';
import { DestinationTemplate } from '@/components/DestinationTemplate';

export async function generateMetadata(): Promise<Metadata> {
  const dest = await getDestination('caire');
  return _gen({
    title: dest.seo.title,
    description: dest.seo.description,
    path: '/caire',
    ogImage: dest.hero.image,
  });
}

export default async function CairePage() {
  const dest = await getDestination('caire');

  const [relatedExcursions, allDestinations] = await Promise.all([
    Promise.all(
      (dest.relatedExcursions ?? []).map((slug) =>
        getExcursion(slug).catch(() => null)
      )
    ).then((arr) => arr.filter(Boolean) as Awaited<ReturnType<typeof getExcursion>>[]),
    getDestinations(),
  ]);

  const otherDestinations = allDestinations.filter((d) => d.slug !== 'caire');

  return (
    <DestinationTemplate
      dest={dest}
      relatedExcursions={relatedExcursions}
      otherDestinations={otherDestinations}
      path="/caire"
    />
  );
}
