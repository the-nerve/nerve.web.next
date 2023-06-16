import { defineField, defineType } from 'sanity';

export const heroSection = defineType({
  name: 'heroSection',
  title: 'Hero Section',
  type: 'object',
  fields: [
    defineField({
      title: 'Heading',
      name: 'heading',
      type: 'string',
    }),
    defineField({
      title: 'Sub-heading',
      name: 'subHeading',
      type: 'string',
    }),
    defineField({
      title: 'Copy',
      name: 'copy',
      type: 'text',
    }),
    defineField({
      title: 'Image',
      name: 'image',
      type: 'imageWithAlt',
    }),
  ],
});
