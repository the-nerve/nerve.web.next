import React from 'react';
import { Cloud } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'ticketProvider';
export const TITLE = 'Ticket Providers';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Cloud />,
  fields: [
    defineField({
      name: 'name',
      title: 'Provider Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'Provider URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Box Office Phone Number',
      type: 'string',
    }),
  ],
});
