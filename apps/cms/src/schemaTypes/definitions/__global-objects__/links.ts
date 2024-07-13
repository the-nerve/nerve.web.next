import { defineField, defineType } from 'sanity';

export const contentLinkObject = defineType({
  name: 'contentLink',
  title: 'Internal Link',
  type: 'object',
  fields: [
    defineField({
      name: 'reference',
      type: 'reference',
      title: 'Reference',
      to: [{ type: 'post' }, { type: 'season' }, { type: 'show' }],
    }),
  ],
});

export const externalLinkObject = defineType({
  name: 'externalLink',
  title: 'External Link',
  type: 'object',
  fields: [
    defineField({
      title: 'URL',
      name: 'href',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          allowRelative: false,
          scheme: ['https', 'http', 'mailto', 'tel'],
        }),
    }),
  ],
});
