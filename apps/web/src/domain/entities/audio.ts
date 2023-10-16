export interface AudioCredit {
  name: string;
  role: string;
  website?: string;
  instagram?: string;
  tiktok?: string;
  twitter?: string;
  description?: string;
}

export interface Audio {
  id: string; // unique identifier for the audio
  description?: string;
  link?: string; // link to the audio
  platform: string; // platform where the audio is hosted
  credits?: AudioCredit[];
}
