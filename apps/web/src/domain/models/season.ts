export interface Season {
  id: string; // unique identifier for the season
  slug: string; // unique human-readable identifier for the season
  path?: string; // full path to the season
  title: string;
  tagline?: string;
  description?: string;
  term?: number; // The location of the season in sequence of all seasons
}
