import { defineField, defineType } from 'sanity';

import { slugifyDateTime } from '$shared/utils';

export const ID = 'performance';
export const TITLE = 'Performance';

export const schema = defineType({
  title: TITLE,
  name: ID,
  type: 'document',
  fields: [
    defineField({
      name: 'datetime',
      title: 'Performance Date & Time',
      type: 'datetime',
      description: 'The starting date and time of the performance',
      validation: (Rule) => Rule.required(),
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'h:mm:a',
        timeStep: 30,
      },
    }),
    defineField({
      name: 'slug',
      type: 'slug',
      title: 'Slug',
      readOnly: true,
      validation: (rule) => rule.required(),
      options: {
        source: 'datetime',
        slugify: slugifyDateTime,
      },
    }),
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { value: 'active', title: 'Active' },
          { value: 'cancelled', title: 'Cancelled' },
        ],
      },
    }),
    defineField({
      name: 'isPreview',
      title: 'Preview Performance',
      description: 'This performance is a dress preview',
      type: 'boolean',
    }),
    defineField({
      name: 'isPWYW',
      title: 'Pay What You Want',
      description: 'This is a Pay What You Want (PWYW) performance',
      type: 'boolean',
    }),
    defineField({
      name: 'isIndustryNight',
      title: 'Industry Night',
      description: 'This is an Industry Night performance',
      type: 'boolean',
    }),
    defineField({
      name: 'hasTalkback',
      title: 'Talkback After Performance',
      description: 'This performance has a talkback afterwards',
      type: 'boolean',
    }),
  ],
  initialValue: {
    isPreview: false,
    isPWYW: false,
    isIndustryNight: false,
    hasTalkback: false,
  },
});
