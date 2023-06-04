import { defineField, defineType } from 'sanity';

export const ID = 'brandConfig';
export const TITLE = 'Brand Config';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  fields: [
    defineField({
      name: 'logoOnLight',
      title: 'Logo » On Light',
      description: 'Company logo on a light background',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'logoOnDark',
      title: 'Logo » On Dark',
      description: 'Company logo on a dark background',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'essence',
      title: 'Brand Essence',
      description: 'What we do in plain terms',
      rows: 4,
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'purpose',
      title: 'Purpose Statement (Mission)',
      rows: 4,
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'taglinePrimary',
      title: 'Primary Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'taglineSecondary',
      title: 'Secondary Tagline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'shortDescription',
      title: 'Short Description',
      description: 'Marketing pitch in one sentence',
      rows: 4,
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'longDescription',
      title: 'Long Description',
      description: 'Marketing pitch in one paragraph',
      type: 'text',
      validation: (Rule) => Rule.required(),
    }),
  ],
});
