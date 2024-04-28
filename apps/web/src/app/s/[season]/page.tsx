import { type Metadata } from 'next';
import Image from 'next/image';

import { getDocumentMeta } from '@/common/api/getDocumentMeta.server';
import { getSeason } from '@/common/api/getSeason.server';
import { getSeasonNeighbors } from '@/common/api/getSeasonNeighbors.server';
import { buildImageUrl } from '@/integrations/sanity';

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
      <p>
        Previous: {neighbors.previous?.title} ({neighbors.previous?.path})
      </p>
      <p>
        Next: {neighbors.next?.title} ({neighbors.next?.path})
      </p>
      ---
      <h2>Shows this season</h2>
      {season.shows?.map((show) => {
        const imageUrl = buildImageUrl(show.images?.card).url();

        return (
          <div key={show.id}>
            <p>{show.title}</p>
            <Image
              src={imageUrl}
              alt={show.images?.card?.altText || show.title}
              width={show.images?.card?.metadata?.dimensions.width}
              height={show.images?.card?.metadata?.dimensions.height}
            />
          </div>
        );
      })}
    </>
  );
};

export default Page;
