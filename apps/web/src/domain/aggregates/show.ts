import { type Artist, type ARTIST_GROUP } from '../models/artist';
import { type Audio } from '../models/audio';
import { type Location } from '../models/location';
import { type Performance } from '../models/performance';
import { type Season } from '../models/season';
import { type Series } from '../models/series';
import { type Show } from '../models/show';
import { type Sponsor, type SPONSORSHIP_LEVEL, type SPONSORSHIP_SCOPE } from '../models/sponsor';
import { type Ticketing } from '../models/ticketing';
import { type Video } from '../models/video';

export interface ShowStandardSponsor extends Sponsor {
  scope: SPONSORSHIP_SCOPE;
  level: SPONSORSHIP_LEVEL;
}

export interface ShowHighlightSponsor extends Sponsor {
  scope: SPONSORSHIP_SCOPE;
  level: SPONSORSHIP_LEVEL;
  note?: any;
}

export interface ShowSponsors {
  sponsors?: ShowStandardSponsor[];
  highlightedSponsors?: ShowHighlightSponsor[];
  specialThanks?: any;
}

export interface ShowPerformance extends Performance {
  tickets?: Ticketing;
}

export interface ShowArtist extends Artist {
  role?: string;
  group?: ARTIST_GROUP;
  bio?: string;
}

export interface ShowArtists {
  [ARTIST_GROUP.ACTOR]?: ShowArtist[];
  [ARTIST_GROUP.DIRECTOR]?: ShowArtist[];
  [ARTIST_GROUP.DESIGNER]?: ShowArtist[];
  [ARTIST_GROUP.WRITER]?: ShowArtist[];
  [ARTIST_GROUP.CREW]?: ShowArtist[];
  [ARTIST_GROUP.SHADOW]?: ShowArtist[];
  [ARTIST_GROUP.ASSISTANT]?: ShowArtist[];
}

// MAIN AGGREGATE
export interface ShowAggregate extends Show {
  artists?: ShowArtists;
  location: Location;
  sponsors?: Sponsor[];
  season?: Season;
  performances?: ShowPerformance[];
  series?: Series;
  promo?: {
    trailer?: Video;
    soundtrack?: Audio;
  };
}
