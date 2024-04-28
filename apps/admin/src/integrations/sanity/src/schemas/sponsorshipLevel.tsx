import React from 'react';
import { Heart } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'sponsorshipLevel';
export const TITLE = 'Sponsorship Levels';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  // @ts-ignore
  icon: () => <Heart />,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'hashtag',
      title: 'Hashtag',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'investment',
      title: 'Investment',
      type: 'number',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'perks',
      title: 'Perks',
      type: 'array',
      of: [{ type: 'string' }],
    }),
  ],
  preview: {
    select: {
      hashtag: 'hashtag',
      investment: 'investment',
    },
    prepare({ hashtag, investment }) {
      return {
        title: hashtag,
        subtitle: `$${investment.toLocaleString('en-US')}`,
      };
    },
  },
  orderings: [
    {
      title: 'Investment (asc)',
      name: 'investmentAsc',
      by: [{ field: 'investment', direction: 'asc' }],
    },
  ],
});
