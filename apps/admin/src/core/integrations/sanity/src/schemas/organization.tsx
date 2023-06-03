import React from 'react';
import { Briefcase } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'organization';
export const TITLE = 'Organizations';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Briefcase />,
  fields: [
    defineField({
      name: 'title',
      title: 'Organization Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Organization Description',
      type: 'text',
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
  ],
});
