import type { Metadata } from 'next';
import { generateMetadata as _gen } from '@/lib/seo';
import { getExcursion, getDestination, getReviews } from '@/lib/content';
import { ExcursionTemplate } from '@/components/ExcursionTemplate';

export async function generateMetadata(): Promise<Metadata> {
  const exc = await getExcursion('montgolfiere');
  return _gen({
    title: exc.seo.title,
    description: exc.seo.description,
    path: '/montgolfiere',
    ogImage: exc.hero.image,
  });
}

export default async function MontgolfiérePage() {
  const exc = await getExcursion('montgolfiere');

  const [relatedDestinations, reviews] = await Promise.all([
    Promise.all(
      (exc.relatedDestinations ?? []).map((slug) =>
        getDestination(slug).catch(() => null)
      )
    ).then((arr) => arr.filter(Boolean) as Awaited<ReturnType<typeof getDestination>>[]),
    getReviews(),
  ]);

  return (
    <ExcursionTemplate
      exc={exc}
      relatedDestinations={relatedDestinations}
      reviews={reviews}
      path="/montgolfiere"
      schemaDuration="PT1H"
    />
  );
}
