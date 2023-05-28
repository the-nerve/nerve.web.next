import { defineField, defineType } from 'sanity';

import { slugify } from '$shared/utils';

export const ID = 'series';
export const TITLE = 'Series';

export const schema = defineType({
  title: TITLE,
  name: ID,
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Series Title', validation: (rule) => rule.required() }),
    defineField({
      name: 'identifier',
      type: 'slug',
      title: 'Series ID',
      readOnly: true,
      validation: (rule) => rule.required(),
      options: {
        source: 'title',
        slugify,
      },
    }),
    defineField({
      title: 'Series Description',
      name: 'description',
      type: 'text',
    }),
  ],
});
