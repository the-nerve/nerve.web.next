import React from 'react';
import { Edit2 } from 'react-feather';

import { type DocumentCollection } from '../../../types';

export const schema: DocumentCollection = {
  name: 'author',
  title: 'Authors',
  icon: <Edit2 />,
  disableSEO: true,
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Post Slug',
      type: 'slug',
      options: {
        source: 'name',
        slugify: (input: string): string => input.toLowerCase().replace(/\s+/g, '-').slice(0, 50),
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'brief',
      title: 'Brief',
      description: 'A short statement about who the author is.',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'avatar',
      title: 'Avatar',
      type: 'imageWithAlt',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
    {
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule: any) =>
        Rule.uri({
          scheme: ['https'],
        }),
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'brief',
      media: 'headshot',
    },
  },
};
