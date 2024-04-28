import { seasonAggregate } from '@/domain/aggregates/season';
import { groq, IMAGE_FRAGMENT, sanityClient, SEASON_PATH_FRAGMENT, SHOW_PATH_FRAGMENT } from '@/integrations/sanity';

const QUERY = groq`*[_type == "season" && slug.current == $slug][0] {
  _type,
  "id": _id,
  title,
  tagline,
  hashtag,
  description,
  ${SEASON_PATH_FRAGMENT},
  // Sort shows by close date (newest to oldest)
  "shows": shows[]->{
    _type,
    "id": _id,
    title,
    openDate,
    closeDate,
    "author": author.name,
    "slug": slug.current,
    "images": {
      "card": cardImage {
        ${IMAGE_FRAGMENT}
      }
    },
    ${SHOW_PATH_FRAGMENT},
  } | order(closeDate desc),
  "slug": slug.current,
  "isHidden": doNotDisplay
}`;

// TODO: Consider throwing if season result isn't validated?
export const getSeason = async (slug: string) => {
  const dto = await sanityClient.fetch(QUERY, { slug });
  return seasonAggregate.parse(dto);
};
