import React from 'react';
import { Heart } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'supporter';
export const TITLE = 'Supporters';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Heart />,
  fields: [
    defineField({
      name: 'name',
      title: 'Supporter Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'type',
      title: 'Type',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'Person', value: 'person' },
          { title: 'Business', value: 'business' },
        ],
      },
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'link',
      title: 'Link',
      type: 'url',
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'string',
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok',
      type: 'string',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      description: 'A brief description of this supporter. Who they are, what they do, etc.',
      type: 'contentBlock',
    }),
    defineField({
      name: 'relationship',
      title: 'Relationship',
      description: 'How do we know this supporter? Why do we love them?',
      type: 'contentBlock',
    }),
  ],
});
