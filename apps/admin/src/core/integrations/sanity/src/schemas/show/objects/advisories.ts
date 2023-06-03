import { defineField, defineType } from 'sanity';

export const contentAdvisory = defineType({
  title: 'Content Advisory',
  name: 'contentAdvisory',
  type: 'object',
  fields: [
    defineField({
      title: 'Copy',
      name: 'copy',
      type: 'text',
      rows: 2,
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
});

export const effectsAdvisory = defineType({
  title: 'Effects Advisory',
  name: 'effectsAdvisory',
  type: 'object',
  fields: [
    defineField({
      title: 'Copy',
      name: 'copy',
      type: 'text',
      rows: 2,
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
});
