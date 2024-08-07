import * as globalObjects from './definitions/__global-objects__';
import * as artist from './definitions/artist';
import * as audio from './definitions/audio';
import * as author from './definitions/author';
import * as event from './definitions/event';
import * as page from './definitions/page';
import * as post from './definitions/post';
import * as season from './definitions/season';
import * as series from './definitions/series';
import * as show from './definitions/show';
import * as brandConfig from './definitions/singletons/brandConfig';
import * as companyConfig from './definitions/singletons/companyConfig';
import * as seoConfig from './definitions/singletons/seoConfig';
import * as sponsorshipLevel from './definitions/sponsorshipLevel';
import * as supporter from './definitions/supporter';
import * as venue from './definitions/venue';
import * as video from './definitions/video';

export const schemaTypes = [
  // Objects
  ...Object.values(globalObjects),
  ...Object.values(audio.objects),
  ...Object.values(event.objects),
  ...Object.values(page.objects),
  ...Object.values(show.objects),
  ...Object.values(video.objects),
  // Documents
  artist.schema,
  audio.schema,
  author.schema,
  brandConfig.schema,
  companyConfig.schema,
  event.schema,
  seoConfig.schema,
  page.schema,
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
 * We need ID and TITLE information from each schema to build our Structure. For now, we'll manually map it.
 */
export const schemaMetaData = {
  artist: {
    id: artist.ID,
    title: artist.TITLE,
  },
  audio: {
    id: audio.ID,
    title: audio.TITLE,
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
  event: {
    id: event.ID,
    title: event.TITLE,
  },
  page: {
    id: page.ID,
    title: page.TITLE,
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
