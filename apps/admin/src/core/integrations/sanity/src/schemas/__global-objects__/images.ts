import { defineField, defineType } from 'sanity';

export const imageWithAltObject = defineType({
  name: 'imageWithAlt',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for SEO and a11y.',
      validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
    }),
  ],
});

export const imageWithFullMetaObject = defineType({
  name: 'imageWithFullMeta',
  title: 'Image',
  type: 'image',
  fields: [
    defineField({
      name: 'alt',
      title: 'Alternative Text',
      type: 'string',
      description: 'Important for SEO and a11y.',
      validation: (Rule) => Rule.error('You have to fill out the alternative text.').required(),
    }),
    defineField({
      name: 'caption',
      type: 'string',
      title: 'Caption',
    }),
    defineField({
      title: 'Credit',
      name: 'credit',
      type: 'string',
    }),
  ],
  preview: {
    select: {
      imageUrl: 'asset.url',
      title: 'caption',
      subtitle: 'credit',
    },
  },
});
