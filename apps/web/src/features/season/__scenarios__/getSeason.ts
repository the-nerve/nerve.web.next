import { groq, sanityFetch } from '$sanity';

const seasonQuery = groq`*[_type == "season" && slug.current == $slug][0] {
  "title": title,
  "slug": slug.current,
  "description": description,
  "term": term,
  "tagline": tagline,
  "images": {
      "card": images.card.asset->url,
      "hero": images.hero.asset->url,
  }
  "shows": *[_type == "show" && references(^._id)] {
    "id": _id,
    "slug": slug.current,
    "title": title,
    "tagline": tagline,
    "description": description,
    "term": term,
    "images": {
      "card": images.card.asset->url,
      "hero": images.hero.asset->url,
    }
  }
}`;
