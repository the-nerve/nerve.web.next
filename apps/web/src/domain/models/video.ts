export interface VideoCredit {
  name: string;
  role: string;
  website?: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  description?: string;
}

export interface Video {
  id: string; // unique identifier for the video
  description?: string;
  link?: string; // link to the video
  platform: string; // platform where the video is hosted
  credits?: VideoCredit[];
}
