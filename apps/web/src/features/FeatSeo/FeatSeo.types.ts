export interface FeatSeoInputBase {
  title: string;
  description: string;
  pageUrl: string;
  keywords?: string[];
  publishedTime?: string;
  modifiedTime?: string;
  primaryImage?: string;
  audio?: string;
  video?: string;
}

// METADATA TYPES
type MetaImageObject = {
  url: string | URL;
  secureUrl?: string | URL;
  alt?: string;
  type?: string;
  width?: string | number;
  height?: string | number;
};
export type MetaImage = string | MetaImageObject | URL;

type MetaAudioObject = {
  url: string | URL;
  secureUrl?: string | URL;
  type?: string;
};
export type MetaAudio = string | MetaAudioObject | URL;

type MetaVideoObject = {
  url: string | URL;
  secureUrl?: string | URL;
  type?: string;
  width?: string | number;
  height?: string | number;
};
export type MetaVideo = string | MetaVideoObject | URL;
