import React from 'react';
import { Hexagon } from 'react-feather';
import { defineField, defineType } from 'sanity';

import { slugify } from '../../../../../shared/utils';

export const ID = 'season';
export const TITLE = 'Seasons';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Hexagon />,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Season Title',
      type: 'string',
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
    }),
    defineField({
      name: 'doNotDisplay',
      title: 'Do not display on website',
      description: 'Toggling this on will prevent this season from being displayed on the frontend of the website.',
      type: 'boolean',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'hashtag',
      title: 'Hashtag',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'shows',
      title: 'Shows',
      description: 'The shows that were a part of this season',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'show' } }],
    }),
    //  ------------------------ SEO ------------------------ //
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
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
