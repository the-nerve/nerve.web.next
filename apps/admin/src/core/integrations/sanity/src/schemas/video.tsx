import { defineField, defineType } from 'sanity';

// TODO: add object for video
export const videoCredit = defineType({
  name: 'videoCredit',
  type: 'object',
  fields: [
    defineField({
      title: 'Role',
      name: 'role',
      description: 'What role/action did this supporter take in creating this video?',
      type: 'string',
    }),
    defineField({
      title: 'Supporter',
      name: 'supporter',
      description: 'Who created or helped create this video?',
      type: 'reference',
      to: [{ type: 'supporter' }],
    }),
  ],
});

export const ID = 'video';
export const TITLE = 'Videos';

// add video type as season/show trailers
export const schema = defineType({
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
