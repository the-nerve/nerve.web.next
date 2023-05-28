import { defineField, defineType } from 'sanity';

export const postReferenceObject = defineType({
  name: 'postReference',
  title: 'Post Link',
  type: 'object',
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'post' }],
    }),
  ],
});

export const seasonReferenceObject = defineType({
  name: 'seasonReference',
  title: 'Season Reference',
  type: 'object',
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'season' }],
    }),
  ],
});

export const showReferenceObject = defineType({
  name: 'showReference',
  title: 'Show Reference',
  type: 'object',
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'show' }],
    }),
  ],
});
