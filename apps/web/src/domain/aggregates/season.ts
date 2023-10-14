import { type Season } from '../models/season';
import { type Show } from '../models/show';
import { type Sponsor, type SPONSORSHIP_LEVEL, type SPONSORSHIP_SCOPE } from '../models/sponsor';
import { type Video } from '../models/video';

export interface SeasonStandardSponsor extends Sponsor {
  scope: SPONSORSHIP_SCOPE;
  level: SPONSORSHIP_LEVEL;
}

export interface SeasonHighlightSponsor extends Sponsor {
  scope: SPONSORSHIP_SCOPE;
  level: SPONSORSHIP_LEVEL;
  note: any;
}

export interface SeasonSponsors {
  standardSponsors?: SeasonStandardSponsor[];
  highlightedSponsors?: SeasonHighlightSponsor[];
  specialThanks?: any;
}

// MAIN AGGREGATE
export interface SeasonAggregate extends Season {
  shows: Show[];
  sponsors?: SeasonSponsors;
  promo: {
    trailer?: Video;
  };
}

// AGGREGATE FUNCTIONS
export const hasShowsInSeason = <T extends Show[]>(shows?: T) => !!(shows && shows.length > 0);