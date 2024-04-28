import { Share2 } from 'react-feather';
import { defineField, defineType } from 'sanity';

import { slugify } from '../../../../shared/utils';

export const ID = 'series';
export const TITLE = 'Series';

export const schema = defineType({
  title: TITLE,
  name: ID,
  type: 'document',
  icon: () => <Share2 />,
  fields: [
    defineField({ name: 'title', type: 'string', title: 'Series Title', validation: (rule) => rule.required() }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Series Slug',
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
