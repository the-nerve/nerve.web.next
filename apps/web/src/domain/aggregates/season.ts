import { z } from 'zod';

import { imageModel } from '../models/image';
import { seasonModel } from '../models/season';
import { type Show, showModel } from '../models/show';
import { sponsorModel, SPONSORSHIP_LEVEL, SPONSORSHIP_SCOPE } from '../models/sponsor';
import { videoModel } from '../models/video';

// ============== AGGREGATE DEFS ============== //

const seasonStandardSponsorAggregate = sponsorModel.extend({
  scope: z.nativeEnum(SPONSORSHIP_SCOPE),
  level: z.nativeEnum(SPONSORSHIP_LEVEL),
});

const seasonHighlightSponsorAggregate = sponsorModel.extend({
  scope: z.nativeEnum(SPONSORSHIP_SCOPE),
  level: z.nativeEnum(SPONSORSHIP_LEVEL),
  note: z.unknown(),
});

const seasonSponsorsAggregate = z.object({
  standardSponsors: z.array(seasonStandardSponsorAggregate),
  highlightedSponsors: z.array(seasonHighlightSponsorAggregate),
  specialThanks: z.unknown(),
});

export const seasonShowAggregate = showModel.extend({
  images: z
    .object({
      poster: imageModel.optional(),
      card: imageModel.optional(),
      thumbnail: imageModel.optional(),
    })
    .optional(),
});

export const seasonAggregate = seasonModel.extend({
  shows: z.array(seasonShowAggregate).optional(),
  sponsors: seasonSponsorsAggregate.optional(),
  promo: z
    .object({
      trailer: videoModel.optional(),
    })
    .optional(),

  images: z
    .object({
      card: imageModel.optional(),
      hero: imageModel.optional(),
      thumbnail: imageModel.optional(),
      poster: imageModel.optional(),
    })
    .optional(),
});

export type SeasonStandardSponsor = z.infer<typeof seasonStandardSponsorAggregate>;
export type SeasonHighlightSponsor = z.infer<typeof seasonHighlightSponsorAggregate>;
export type SeasonSponsors = z.infer<typeof seasonSponsorsAggregate>;
export type SeasonShow = z.infer<typeof seasonShowAggregate>;

export type SeasonAggregate = z.infer<typeof seasonAggregate>;

// ============== AGGREGATE FUNCTIONS ============== //
export const hasShowsInSeason = <T extends Show[]>(shows?: T): shows is T => !!(shows && shows.length > 0);
