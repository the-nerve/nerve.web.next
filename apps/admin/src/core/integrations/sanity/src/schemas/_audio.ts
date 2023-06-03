import { defineField, defineType } from 'sanity';

export const soundtrackCredit = defineType({
  name: 'soundtrackCredit',
  type: 'object',
  fields: [
    defineField({
      title: "Credit's Role",
      name: 'role',
      description: 'What role/action did this supporter take in creating this soundtrack?',
      type: 'string',
    }),
    defineField({
      title: 'By',
      name: 'by',
      description: 'Who created or helped create this soundtrack?',
      type: 'reference',
      to: [{ type: 'supporter' }],
    }),
  ],
});

const ID = 'audio';
const TITLE = 'Audio';

// add video type as season/show trailers
export const audio = defineType({
  title: ID,
  name: TITLE,
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
      of: [{ type: 'videoCredit' }],
    }),
  ],
});
