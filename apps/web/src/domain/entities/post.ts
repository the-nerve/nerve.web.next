export interface PostAuthor {
  name: string;
  byline?: string;
  image?: any;
  pronouns?: string;
  twitter?: string;
  website?: string;
  instagram?: string;
  tiktok?: string;
}

export interface Post {
  slug: string;
  title: string;
  heroImage?: any;
  teaser?: string;
  publishedAt: string;
  lastUpdatedAt: string;
  content: any;
  publishedBy: PostAuthor[];
}
