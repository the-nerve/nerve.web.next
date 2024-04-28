import { defineField, defineType } from 'sanity';

import * as audioObjects from './objects';

export const objects = audioObjects;

export const ID = 'audio';
export const TITLE = 'Audio';

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
      name: 'id',
      title: 'Audio ID',
      type: 'string',
    }),
    defineField({
      name: 'url',
      title: 'Embed URL',
      type: 'url',
    }),
    defineField({
      name: 'host',
      title: 'Audio Host',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'Spotify', value: 'spotify' },
          { title: 'Soundcloud', value: 'soundcloud' },
          { title: 'GDrive', value: 'gdrive' },
        ],
      },
    }),
    defineField({
      title: 'Credits',
      name: 'credits',
      description: 'People or organizations who worked on this audio',
      type: 'array',
      of: [{ type: 'audioCredit' }],
    }),
  ],
});
