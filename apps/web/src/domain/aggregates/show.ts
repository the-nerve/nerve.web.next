import { z } from 'zod';

import { ARTIST_GROUP, artistModel } from '../models/artist';
import { audioModel } from '../models/audio';
import { eventTicketingModel } from '../models/eventTicketing';
import { imageModel } from '../models/image';
import { locationModel } from '../models/location';
import { performanceModel } from '../models/performance';
import { seasonModel } from '../models/season';
import { seriesModel } from '../models/series';
import { showModel } from '../models/show';
import { sponsorModel, SPONSORSHIP_LEVEL, SPONSORSHIP_SCOPE } from '../models/sponsor';
import { videoModel } from '../models/video';

// ============== AGGREGATE ENUMS ============== //

export interface ShowArtists {
  [ARTIST_GROUP.ACTOR]?: ShowArtist[];
  [ARTIST_GROUP.DIRECTOR]?: ShowArtist[];
  [ARTIST_GROUP.DESIGNER]?: ShowArtist[];
  [ARTIST_GROUP.WRITER]?: ShowArtist[];
  [ARTIST_GROUP.CREW]?: ShowArtist[];
  [ARTIST_GROUP.SHADOW]?: ShowArtist[];
  [ARTIST_GROUP.ASSISTANT]?: ShowArtist[];
}

// ============== AGGREGATE DEFS ============== //

const showStandardSponsorAggregate = sponsorModel.extend({
  scope: z.nativeEnum(SPONSORSHIP_SCOPE),
  level: z.nativeEnum(SPONSORSHIP_LEVEL),
});

const showHighlightSponsorAggregate = sponsorModel.extend({
  scope: z.nativeEnum(SPONSORSHIP_SCOPE),
  level: z.nativeEnum(SPONSORSHIP_LEVEL),
  note: z.unknown(),
});

const showSponsorsAggregate = z.object({
  standardSponsors: z.array(showStandardSponsorAggregate),
  highlightedSponsors: z.array(showHighlightSponsorAggregate),
  specialThanks: z.unknown(),
});

export const showPerformanceAggregate = performanceModel.extend({
  tickets: eventTicketingModel.optional(),
});

export const showArtistAggregate = artistModel.extend({
  role: z.string(),
  group: z.nativeEnum(ARTIST_GROUP),
  bio: z.string().optional(),
});

export const showAggregate = showModel.extend({
  artists: showArtistAggregate.optional(),
  location: locationModel,
  performances: z.array(showPerformanceAggregate).optional(),
  promo: z
    .object({
      trailer: videoModel.optional(),
      soundtrack: audioModel.optional(),
    })
    .optional(),
  season: seasonModel.optional(),
  series: seriesModel.optional(),
  sponsors: showSponsorsAggregate.optional(),
  tickets: eventTicketingModel.optional(),
  images: z
    .object({
      poster: imageModel.optional(),
      card: imageModel.optional(),
      thumbnail: imageModel.optional(),
    })
    .optional(),
});

export type ShowArtist = z.infer<typeof showArtistAggregate>;
export type ShowStandardSponsor = z.infer<typeof showStandardSponsorAggregate>;
export type ShowHighlightSponsor = z.infer<typeof showHighlightSponsorAggregate>;
export type ShowSponsors = z.infer<typeof showSponsorsAggregate>;
export type ShowPerformance = z.infer<typeof showPerformanceAggregate>;

export type ShowAggregate = z.infer<typeof showAggregate>;
