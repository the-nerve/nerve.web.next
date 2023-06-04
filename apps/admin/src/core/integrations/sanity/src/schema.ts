import * as artist from './schemas/artist';
import * as author from './schemas/author';
import * as globalObjects from './schemas/global-objects';
// import * as performance from './performance';
import * as post from './schemas/post';
import * as season from './schemas/season';
import * as series from './schemas/series';
import * as show from './schemas/show';
import * as brandConfig from './schemas/singletons/brandConfig';
import * as companyConfig from './schemas/singletons/companyConfig';
import * as seoConfig from './schemas/singletons/seoConfig';
import * as sponsorshipLevel from './schemas/sponsorshipLevel';
import * as supporter from './schemas/supporter';
import * as venue from './schemas/venue';
import * as video from './schemas/video';

export const sanitySchemas = [
  // Objects
  ...Object.values(globalObjects),
  ...Object.values(show.objects),
  // Documents
  artist.schema,
  author.schema,
  brandConfig.schema,
  companyConfig.schema,
  seoConfig.schema,
  post.schema,
  season.schema,
  series.schema,
  show.schema,
  sponsorshipLevel.schema,
  supporter.schema,
  venue.schema,
  video.schema,
];

/**
 * We need ID and TITLE information from each schema to build our Desk Structure. For now, we'll manually map it.
 */
export const schemaMetaData = {
  artist: {
    id: artist.ID,
    title: artist.TITLE,
  },
  author: {
    id: author.ID,
    title: author.TITLE,
  },
  brandConfig: {
    id: brandConfig.ID,
    title: brandConfig.TITLE,
  },
  companyConfig: {
    id: companyConfig.ID,
    title: companyConfig.TITLE,
  },
  seoConfig: {
    id: seoConfig.ID,
    title: seoConfig.TITLE,
  },
  post: {
    id: post.ID,
    title: post.TITLE,
  },
  season: {
    id: season.ID,
    title: season.TITLE,
  },
  series: {
    id: series.ID,
    title: series.TITLE,
  },
  show: {
    id: show.ID,
    title: show.TITLE,
  },
  sponsorshipLevel: {
    id: sponsorshipLevel.ID,
    title: sponsorshipLevel.TITLE,
  },
  supporter: {
    id: supporter.ID,
    title: supporter.TITLE,
  },
  venue: {
    id: venue.ID,
    title: venue.TITLE,
  },
  video: {
    id: video.ID,
    title: video.TITLE,
  },
} as const;

export const singletonDocumentIDs = new Set([companyConfig.ID, brandConfig.ID, seoConfig.ID]);
