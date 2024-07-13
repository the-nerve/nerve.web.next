import 'server-only';
import { type FeatSeoInputBase } from './FeatSeo.types';

/**
 * Goal:
 * - Standardize metadata inputs
 * - Map metadata inputs to nextJS expected Metadata format for generateMetadata fn
 * - Map metadata inputs to JSON-LD format for generating dynamic JSON-LD
 * - Encapsulate all behavior for both Metadata and JSON-LD generation in atomic functions that can be composed together
 * - All components are SSR compatible and fetch their own data
 *
 * References:
 * - https://www.npmjs.com/package/schema-dts
 * - https://dminhvu.com/post/nextjs-jsonld
 * - https://dminhvu.com/post/nextjs-seo
 * - https://nextjs.org/docs/app/building-your-application/optimizing/metadata
 */

interface FeatSeoShowInput extends FeatSeoInputBase {}

export const featSeoShow = async ({}: FeatSeoShowInput) => {
  return { metadata, jsonLd };
};
