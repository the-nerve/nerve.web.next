import { groq, IMAGE, sanityFetch, SEASON_PATH, SHOW_PATH } from '$sanity';
import { seasonModel } from '@/domain/models/season';

const QUERY = groq`*[_type == "season" && slug.current == $slug][0] {
  _type,
  title,
  tagline,
  hashtag,
  description,
  ${SEASON_PATH},
  // Sort shows by close date (newest to oldest)
  "shows": shows[]->{
    _type,
    title,
    openDate,
    closeDate,
    "author": author.name,
    "slug": slug.current,
    "featuredImage": cardImage {
      ${IMAGE}
    },
    ${SHOW_PATH},
  } | order(closeDate desc),
  "slug": slug.current,
  "isHidden": doNotDisplay
}`;

// TODO: Consider throwing if season result isn't validated?
export const getSeason = async (slug: string) => {
  const dto = await sanityFetch(QUERY, { slug });
  return seasonModel.parse(dto);
};
