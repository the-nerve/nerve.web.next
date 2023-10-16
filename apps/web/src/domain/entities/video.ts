export interface VideoCredit {
  description?: string;
  instagram?: string;
  name: string;
  role: string;
  tiktok?: string;
  twitter?: string;
  website?: string;
}

export interface Video {
  credits?: VideoCredit[];
  description?: string;
  id: string; // unique identifier for the video
  link?: string; // link to the video
  platform: string; // platform where the video is host
  previewImage?: unknown;
}
