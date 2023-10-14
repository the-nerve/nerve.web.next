import { type Metadata } from 'next';
import Image from 'next/image';

import { buildImageUrl } from '$sanity';
import { getSeason } from '@/features/season/__scenarios__/getSeason.server';
import { getSeasonNeighbors } from '@/features/season/__scenarios__/getSeasonNeighbors..server';
import { getDocumentMeta } from '@/features/seo/__scenarios__/getDocumentMeta';

interface PageProps {
  params: {
    season: string;
  };
}

export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const metadata = await getDocumentMeta('season', params.season);

  return {
    title: metadata.title,
    description: metadata.description,
    robots: metadata.hide ? 'noindex, nofollow' : 'index, follow',
  };
};

const Page = async ({ params }: PageProps) => {
  const season = await getSeason(params.season);
  const neighbors = await getSeasonNeighbors(params.season);

  return (
    <>
      <h1>Season: {season.title}</h1>
      <p>Previous: {neighbors.previous?.title}</p>
      <p>Next: {neighbors.next?.title}</p>
      ---
      <h2>Shows this season</h2>
      {season.shows?.map((show) => {
        const imageUrl = buildImageUrl(show.featuredImage!).url();

        return (
          <>
            <p key={show.title}>{show.title}</p>
            <Image
              src={imageUrl}
              alt={show.featuredImage?.altText || show.title}
              width={show.featuredImage?.metadata?.dimensions.width}
              height={show.featuredImage?.metadata?.dimensions.height}
            />
          </>
        );
      })}
    </>
  );
};

export default Page;
