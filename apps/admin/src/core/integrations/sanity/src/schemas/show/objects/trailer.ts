import { defineField, defineType } from 'sanity';

export const trailer = defineType({
  title: 'Trailer',
  name: 'trailer',
  type: 'object',
  fields: [
    defineField({
      name: 'videoID',
      title: 'Video ID',
      type: 'string',
    }),
    defineField({
      name: 'platform',
      title: 'Platform',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [{ title: 'Youtube', value: 'youtube' }],
      },
    }),
    defineField({
      title: 'Credit',
      name: 'credit',
      type: 'reference',
      to: [{ type: 'supporter' }],
    }),
    defineField({
      title: "Credit's Role",
      name: 'creditRole',
      description: 'How did the credited organization help?',
      type: 'string',
    }),
  ],
});
