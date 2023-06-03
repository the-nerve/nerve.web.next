import * as artist from './schemas/artist';
import * as author from './schemas/author';
import * as globalObjects from './schemas/global-objects';
import * as organization from './schemas/organization';
// import * as performance from './performance';
import * as post from './schemas/post';
import * as season from './schemas/season';
import * as series from './schemas/series';
import * as show from './schemas/show';
import * as companyConfig from './schemas/singletons/companyConfig';
import * as seoConfig from './schemas/singletons/seoConfig';
import * as sponsor from './schemas/sponsor';
import * as supporter from './schemas/supporter';
import * as venue from './schemas/venue';

export const sanitySchemas = [
  // Objects
  ...Object.values(globalObjects),
  ...Object.values(show.objects),
  // Documents
  artist.schema,
  author.schema,
  companyConfig.schema,
  seoConfig.schema,
  organization.schema,
  post.schema,
  season.schema,
  series.schema,
  show.schema,
  sponsor.schema,
  supporter.schema,
  venue.schema,
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
  companyConfig: {
    id: companyConfig.ID,
    title: companyConfig.TITLE,
  },
  seoConfig: {
    id: seoConfig.ID,
    title: seoConfig.TITLE,
  },
  organization: {
    id: organization.ID,
    title: organization.TITLE,
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
  sponsor: {
    id: sponsor.ID,
    title: sponsor.TITLE,
  },
  supporter: {
    id: supporter.ID,
    title: supporter.TITLE,
  },
  venue: {
    id: venue.ID,
    title: venue.TITLE,
  },
} as const;

export const singletonDocumentIDs = new Set([companyConfig.ID, seoConfig.ID]);
