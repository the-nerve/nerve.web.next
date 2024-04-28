import React from 'react';
import { Edit2 } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'author';
export const TITLE = 'Authors';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Edit2 />,
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Post Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input: string): string => input.toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'brief',
      title: 'Brief',
      description: 'A short statement about who the author is.',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'avatar',
      title: 'Avatar',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brief',
      media: 'avatar',
    },
  },
});
