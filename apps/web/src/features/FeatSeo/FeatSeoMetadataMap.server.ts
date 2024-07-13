import 'server-only';

import { type Metadata } from 'next';

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

type OGImage = string | OGImageDescriptor | URL;
type OGImageDescriptor = {
  url: string | URL;
  secureUrl?: string | URL;
  alt?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
};

type OGAudio = string | OGAudioDescriptor | URL;
type OGAudioDescriptor = {
  url: string | URL;
  secureUrl?: string | URL;
  type?: string;
};

type OGVideo = string | OGVideoDescriptor | URL;
type OGVideoDescriptor = {
  url: string | URL;
  secureUrl?: string | URL;
  type?: string;
  width?: string | number;
  height?: string | number;
};

interface OpenGraphMetadataBase {
  audio?: Array<OGAudio>;
  videos?: Array<OGVideo>;
}

interface OpenGraphWebsiteType extends OpenGraphMetadataBase {
  type: 'website';
}

interface OpenGraphArticleType extends OpenGraphMetadataBase {
  type: 'article';
  publishedTime?: string;
  modifiedTime?: string;
  expirationTime?: string;
  authors?: string[];
  section?: string;
  tags?: string[];
}

interface OpenGraphMusicPlaylistType extends OpenGraphMetadataBase {
  type: 'music.playlist';
  songs?: string[];
  creators?: string[];
}

interface OpenGraphMusicProfileType extends OpenGraphMetadataBase {
  type: 'profile';
  firstName?: string;
  lastName?: string;
  username?: string;
}

interface FeatSeoMetadataMapParams {
  title: string;
  description: string;
  pageUrl: string;
  keywords?: string[];
  openGraphData?: OpenGraphWebsiteType | OpenGraphArticleType | OpenGraphMusicPlaylistType | OpenGraphMusicProfileType;
  primaryMetaImage?: {
    secureUrl: string;
    alt?: string;
  };
}

export const featSeoMetadataMap = ({
  title,
  description,
  pageUrl,
  openGraphData,
  keywords,
  primaryMetaImage,
}: FeatSeoMetadataMapParams): Metadata => {
  // TODO: make a utility function to handle this
  const metaImages: OGImage[] = primaryMetaImage
    ? [
        {
          url: primaryMetaImage.secureUrl,
          secureUrl: primaryMetaImage.secureUrl,
          width: 1200,
          height: 630,
          alt: primaryMetaImage.alt || title,
        },
      ]
    : [];

  const metadata: Metadata = {
    title,
    description,
    keywords,
    openGraph: {
      ...openGraphData,
      locale: 'en_US',
      url: pageUrl,
      title,
      description,
      images: metaImages,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      creator: '@nervetheatre',
      site: '@nervetheatre',
      images: metaImages,
    },
    alternates: {
      canonical: pageUrl,
    },
  };

  return metadata;
};
