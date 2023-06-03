import React from 'react';
import { Heart } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'sponsor';
export const TITLE = 'Sponsors';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Heart />,
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Name',
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
          { title: 'Company', value: 'company' },
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
      name: 'twitter',
      title: 'Twitter',
      type: 'string',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'contentBlock',
    }),
  ],
});
