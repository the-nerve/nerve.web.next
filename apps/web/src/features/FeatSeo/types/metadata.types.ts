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
