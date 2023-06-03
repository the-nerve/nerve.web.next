import { defineField, defineType } from 'sanity';

const ID = 'video';
const TITLE = 'Videos';

export const videoCredit = defineType({
  name: 'videoCredit',
  type: 'object',
  fields: [
    defineField({
      title: "Credit's Role",
      name: 'role',
      description: 'What role/action did this supporter take in creating this video?',
      type: 'string',
    }),
    defineField({
      title: 'By',
      name: 'by',
      description: 'Who created or helped create this video?',
      type: 'reference',
      to: [{ type: 'supporter' }],
    }),
  ],
});

// add video type as season/show trailers
export const video = defineType({
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
          { title: 'Mux', value: 'mux' },
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
