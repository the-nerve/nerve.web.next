import { defineField, defineType } from 'sanity';

export const sponsorOfficialReference = defineType({
  name: 'sponsorOfficialReference',
  title: 'Sponsor Reference',
  type: 'object',
  fields: [
    defineField({
      type: 'reference',
      name: 'sponsor',
      to: { type: 'sponsor' },
    }),
    defineField({
      name: 'level',
      type: 'string',
      options: {
        list: [
          { title: '#BeGritty', value: 'beGritty' },
          { title: '#BeBold', value: 'beBold' },
          { title: '#BeGutsy', value: 'beGutsy' },
          { title: '#BeAudacious', value: 'beAudacious' },
        ],
      },
    }),
    defineField({
      name: 'scope',
      title: 'Scope',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'Show', value: 'show' },
          { title: 'Season', value: 'season' },
        ],
      },
    }),
  ],
  preview: {
    select: {
      name: 'sponsor.name',
      level: 'level',
      image: 'sponsor.image',
    },
    prepare({ name, level, image }) {
      return {
        title: name,
        subtitle: level,
        media: image,
      };
    },
  },
});

export const sponsorHighlightReference = defineType({
  name: 'sponsorHighlightReference',
  title: 'Sponsor Highlight',
  type: 'object',
  fields: [
    defineField({
      type: 'reference',
      name: 'sponsor',
      to: { type: 'sponsor' },
    }),
    defineField({
      name: 'specialLink',
      title: 'Special Link',
      description: 'A link to use for this highlight other than the default sponsor website',
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
      name: 'sponsor.name',
      image: 'sponsor.image',
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
      title: 'Official Sponsors',
      description: 'Sponsors who committed to a specific level of sponsorship',
      type: 'array',
      of: [{ type: 'sponsorOfficialReference' }],
    }),
    defineField({
      name: 'highlight',
      title: 'Sponsor Highlight',
      description: 'Special callouts for sponsors we need to call extra attention to',
      type: 'array',
      of: [{ type: 'sponsorHighlightReference' }],
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
