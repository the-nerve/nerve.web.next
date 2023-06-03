import React from 'react';
import { Smile } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'artist';
export const TITLE = 'Artists';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Smile />,
  fields: [
    defineField({
      name: 'firstName',
      title: 'First Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'middleName',
      title: 'Middle Name',
      type: 'string',
    }),
    defineField({
      name: 'lastName',
      title: 'Last name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'pronouns',
      title: 'Pronouns',
      type: 'string',
      options: {
        list: [
          { title: 'He/Him', value: 'he/him' },
          { title: 'She/Her', value: 'she/her' },
          { title: 'They/Them', value: 'they/them' },
          { title: 'She/They', value: 'she/they' },
          { title: 'He/They', value: 'he/they' },
        ],
      },
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Profile',
      type: 'url',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'headshot',
      title: 'Headshot',
      description: '750x750px',
      type: 'imageWithFullMeta',
    }),
  ],
  preview: {
    select: {
      firstName: 'firstName',
      lastName: 'lastName',
      pronouns: 'pronouns',
      media: 'headshot',
    },
    prepare({ firstName, lastName, pronouns, media }) {
      return {
        title: `${firstName} ${lastName}`,
        subtitle: pronouns,
        media,
      };
    },
  },
});
