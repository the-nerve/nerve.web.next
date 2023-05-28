import { defineField, defineType } from 'sanity';

export const detailItem = defineType({
  title: 'Detail Item',
  name: 'detailItem',
  type: 'object',
  fields: [
    defineField({
      title: 'Icon',
      name: 'icon',
      type: 'icon',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Title',
      name: 'title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Copy',
      name: 'copy',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Has Additional Info',
      name: 'hasAdditionalInfo',
      description: 'This item has additional information',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'See Additional Info Text',
      name: 'seeAdditionalInfoText',
      description: 'Prompt the user to see additional information',
      type: 'string',
    }),
    defineField({
      title: 'Additional Info Content',
      name: 'additionalInfoContent',
      type: 'contentBlock',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'copy',
    },
  },
});
