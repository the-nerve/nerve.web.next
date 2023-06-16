import React from 'react';
import { Hexagon } from 'react-feather';
import { defineField, defineType } from 'sanity';
import { type FieldGroupDefinition } from 'sanity';

import { slugify } from '../../../../../shared/utils';

export const ID = 'season';
export const TITLE = 'Seasons';

const GROUPS: Record<string, FieldGroupDefinition> = {
  SETTINGS: {
    name: 'settings',
    title: 'Settings',
    default: true,
  },
  CONTENT: {
    name: 'content',
    title: 'Content',
  },
  MEDIA: {
    name: 'media',
    title: 'Media',
  },
  SEO: {
    name: 'seo',
    title: 'SEO',
  },
};

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Hexagon />,
  groups: Object.values(GROUPS),
  fields: [
    defineField({
      name: 'title',
      title: 'Season Title',
      type: 'string',
      group: GROUPS.SETTINGS.name,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Season Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify,
      },
      validation: (Rule) => Rule.required(),
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'doNotDisplay',
      title: 'Do not display on website',
      description: 'Toggling this on will prevent this season from being displayed on the frontend of the website.',
      type: 'boolean',
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'shows',
      title: 'Shows',
      description: 'The shows that were a part of this season',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'show' } }],
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      description: 'People or organizations that sponsored the entire season',
      type: 'array',
      of: [{ type: 'sponsor' }],
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
      group: GROUPS.CONTENT.name,
    }),
    defineField({
      name: 'hashtag',
      title: 'Hashtag',
      type: 'string',
      group: GROUPS.CONTENT.name,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      group: GROUPS.CONTENT.name,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: GROUPS.MEDIA.name,
    }),
    defineField({
      name: 'trailer',
      title: 'Trailer',
      description: 'The trailer for this season',
      type: 'reference',
      to: [{ type: 'video' }],
      group: GROUPS.MEDIA.name,
    }),
    defineField({
      name: 'seo',
      type: 'seo',
      group: GROUPS.SEO.name,
    }),
  ],
  orderings: [
    {
      title: 'Season, Newest to Oldest',
      name: 'title',
      by: [{ field: 'title', direction: 'desc' }],
    },
  ],
  initialValue: {
    doNotDisplay: false,
  },
  preview: {
    select: {
      title: 'title',
      subtitle: 'tagline',
      media: 'seo.image',
    },
  },
});
