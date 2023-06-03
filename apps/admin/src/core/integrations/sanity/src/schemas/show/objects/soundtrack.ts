import { defineField, defineType } from 'sanity';

export const soundtrack = defineType({
  title: 'Soundtrack',
  name: 'soundtrack',
  type: 'object',
  fields: [
    defineField({
      name: 'provider',
      title: 'Provider',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [{ title: 'Spotify', value: 'spotify' }],
      },
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'credit',
      title: 'Credit',
      type: 'string',
    }),
  ],
});
