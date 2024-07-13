import { format } from 'date-fns';
import React from 'react';
import { FileText } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'post';
export const TITLE = 'Posts';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <FileText />,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Post Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Post Slug',
      type: 'slug',
      options: {
        source: 'title',
        slugify: (input: string): string => input.toLowerCase().replace(/\s+/g, '-').slice(0, 200),
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'doNotDisplay',
      title: 'Do not display on website',
      description: 'Toggling this on will prevent this post from being displayed on the frontend of the website.',
      type: 'boolean',
    }),
    defineField({
      name: 'authors',
      title: 'Authors',
      type: 'array',
      of: [{ type: 'reference', to: { type: 'author' } }],
    }),
    defineField({
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'contentBlock',
      validation: (Rule) => Rule.required(),
    }),
    //  ------------------------ SEO ------------------------ //
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],
  initialValue: {
    doNotDisplay: false,
    seo: {
      publishedAt: new Date().toISOString(),
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
