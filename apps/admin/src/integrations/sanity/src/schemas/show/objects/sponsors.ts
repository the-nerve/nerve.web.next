import { defineField, defineType } from 'sanity';

export const sponsorHighlightReference = defineType({
  name: 'supporterHighlight',
  title: 'Supporter Highlight',
  type: 'object',
  fields: [
    defineField({
      type: 'reference',
      name: 'supporter',
      to: { type: 'supporter' },
    }),
    defineField({
      name: 'specialLink',
      title: 'Special Link',
      description: 'A link to use for this highlight other than the default supporter website',
      type: 'url',
    }),
    defineField({
      name: 'specialLinkText',
      title: 'Special Link Text',
      type: 'string',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      description: 'A unique contribution this sponsor made (why are they being highlighted?)',
      type: 'contentBlock',
    }),
  ],
  preview: {
    select: {
      name: 'supporter.name',
      image: 'supporter.image',
    },
    prepare({ name, image }) {
      return {
        title: name,
        media: image,
      };
    },
  },
});

export const showSponsors = defineType({
  name: 'showSponsors',
  title: 'Sponsors',
  description: 'Sponsors and supporters of this show.',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'official',
      title: 'Official Show Sponsors',
      description: 'Sponsors who committed to a specific level of sponsorship for this show',
      type: 'array',
      of: [{ type: 'sponsor' }],
    }),
    defineField({
      name: 'highlight',
      title: 'Supporter Highlight',
      description: 'Special callouts for supporters we need to call extra attention to',
      type: 'array',
      of: [{ type: 'supporterHighlight' }],
    }),
    defineField({
      name: 'specialThanks',
      title: 'Special Thanks',
      description:
        'Special thanks for donations or assistance that don\'t fall into typical "sponsorship" levels or highlights.',
      type: 'contentBlock',
    }),
  ],
});
