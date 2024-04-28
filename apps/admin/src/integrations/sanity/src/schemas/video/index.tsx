import { defineField, defineType } from 'sanity';

import * as videoObjects from './objects';

export const objects = videoObjects;

export const ID = 'video';
export const TITLE = 'Videos';

// add video type as season/show trailers
export const schema = defineType({
  title: TITLE,
  name: ID,
  type: 'object',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
    }),
    defineField({
      name: 'referenceId',
      title: 'Video Reference ID (from Host)',
      type: 'string',
    }),
    defineField({
      name: 'embedURL',
      title: 'Embed URL (from Host)',
      type: 'url',
    }),
    defineField({
      name: 'host',
      title: 'Host',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Vimeo', value: 'vimeo' },
          { title: 'Youtube', value: 'youtube' },
        ],
      },
    }),
    defineField({
      title: 'Credits',
      name: 'credits',
      description: 'People or organizations who worked on this video',
      type: 'array',
      of: [{ type: 'videoCredit' }],
    }),
  ],
});
