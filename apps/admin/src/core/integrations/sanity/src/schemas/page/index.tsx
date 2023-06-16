import { format } from 'date-fns';
import React from 'react';
import { Layout } from 'react-feather';
import { defineField, defineType, type FieldGroupDefinition } from 'sanity';

import { slugify } from '@/shared/utils';

import * as pageObjects from './objects';

export const objects = pageObjects;
export const ID = 'page';
export const TITLE = 'Web Pages';

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
  SEO: {
    name: 'seo',
    title: 'SEO',
  },
};

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Layout />,
  groups: Object.values(GROUPS),
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'slug',
      title: 'Page Slug',
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
      description: 'Toggling this on will prevent this page from being displayed on the frontend of the website.',
      type: 'boolean',
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'hero',
      title: 'Hero Section',
      type: 'heroSection',
      group: GROUPS.CONTENT.name,
    }),
    //  ------------------------ SEO ------------------------ //
    defineField({
      name: 'seo',
      type: 'seo',
      group: GROUPS.SEO.name,
    }),
  ],
  initialValue: {
    doNotDisplay: false,
    seo: {
      publishedAt: new Date().toISOString(),
      hide: false,
    },
  },
  preview: {
    select: {
      title: 'title',
      subtitle: 'seo.publishedAt',
      media: 'featuredImage',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `Published on: ${format(new Date(subtitle), 'MMM do, yyyy')}`,
        media,
      };
    },
  },
});
