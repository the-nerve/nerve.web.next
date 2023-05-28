import React from 'react';
import { Star } from 'react-feather';
import { defineField, defineType } from 'sanity';

import { slugify } from '$shared/utils';

import * as showObjects from './objects';

export const ID = 'show';
export const TITLE = 'Shows';

// Export all show-related schema objects (these object aren't used anywhere other than in the show schema)
export const objects = showObjects;

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <Star />,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
  ],
  fields: [
    defineField({
      name: 'title',
      title: 'Show Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Show Slug',
      type: 'slug',
      readOnly: true,
      options: {
        source: 'title',
        slugify,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'season',
      title: 'Season',
      description: 'Which season is this show a part of?',
      type: 'reference',
      to: [{ type: 'season' }],
    }),
    defineField({
      name: 'series',
      title: 'Series',
      description: 'Which series is this show a part of?',
      type: 'reference',
      to: [{ type: 'series' }],
    }),
    //  ------------------------ TOGGLES ------------------------ //
    defineField({
      title: 'Toggle » hide from the website',
      name: 'isHidden',
      description: 'Toggling this on will prevent this show from being displayed on the frontend of the website.',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Toggle » is a Collaboration',
      name: 'isCollaboration',
      description: 'Toggle on if this show is a collaborative effort with another company',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Toggle » has Digital Program',
      name: 'hasDigitalProgram',
      description: 'Toggle on if this show has a digital program',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
    }),
    //  ------------------------ SELECTORS ------------------------ //
    defineField({
      title: 'Select » show type',
      name: 'type',
      description: '',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'Live', value: 'live' },
          { title: 'Virtual', value: 'virtual' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      title: 'Select » show status',
      name: 'status',
      description: '',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { value: 'scheduled', title: 'Scheduled' },
          { value: 'rescheduled', title: 'Rescheduled' },
          { value: 'postponed', title: 'Postponed' },
          { value: 'cancelled', title: 'Cancelled' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    //  ------------------------ IMAGES ------------------------ //
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'imageWithAlt',
    }),
    //  ------------------------ MESSAGING ------------------------ //
    defineField({
      name: 'hashtag',
      title: 'Hashtag',
      type: 'string',
    }),
    defineField({
      name: 'tagline',
      title: 'Tagline',
      type: 'string',
    }),
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'license',
      title: 'License Agreement Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'contentBlock',
    }),
    defineField({
      name: 'directorsNote',
      title: "Director's Note",
      type: 'contentBlock',
    }),

    //  ------------------------ DATES ------------------------ //
    defineField({
      name: 'openDate',
      title: 'Opening Date',
      description: 'The date of the first performance',
      type: 'datetime',
      readOnly: false,
      options: {
        dateFormat: 'ddd » MMM Do, yyyy',
        timeFormat: 'h:mm:a',
      },
    }),
    defineField({
      name: 'closeDate',
      title: 'Closing Date',
      description: 'The date of the last performance',
      type: 'datetime',
      readOnly: false,
      options: {
        dateFormat: 'ddd » MMM Do, yyyy',
        timeFormat: 'h:mm:a',
      },
    }),

    //  ------------------------ DETAILS ------------------------ //
    defineField({
      name: 'runtimeHours',
      title: 'Runtime Hours',
      description: 'How many hours does the show run for (whole numbers only)',
      type: 'number',
      validation: (Rule) => Rule.integer().positive().lessThan(4),
    }),
    defineField({
      name: 'runtimeMinutes',
      title: 'Runtime Minutes',
      description: 'How many minutes does the show run for (whole numbers only)',
      type: 'number',
      validation: (Rule) => Rule.integer().positive().lessThan(60),
    }),
    defineField({
      name: 'intermissionCount',
      title: 'Number of Intermissions',
      description: 'How many intermissions does this show have?',
      type: 'number',
      validation: (Rule) => Rule.integer().positive().lessThan(3),
    }),
    defineField({
      name: 'location',
      title: 'Location',
      description: 'Where will the show take place?',
      type: 'reference',
      to: [{ type: 'location' }],
    }),
    defineField({
      name: 'rating',
      title: 'Rating',
      description: 'The age rating/appropriateness of this show.',
      type: 'string',
      options: {
        layout: 'radio',
        direction: 'horizontal',
        list: [
          { title: 'R', value: 'r' },
          { title: 'PG-13', value: 'pg-13' },
          { title: 'PG', value: 'pg' },
        ],
      },
    }),
    defineField({
      name: 'ticketProvider',
      title: 'Ticket Provider',
      type: 'reference',
      to: [{ type: 'ticketProvider' }],
    }),
    defineField({
      name: 'generalTicketLink',
      title: 'General Ticket Link',
      description:
        'The link to the page where tickets can be selected/purchased for this show (not specific to performance dates and times)',
      type: 'string',
    }),
    defineField({
      name: 'contentAdvisory',
      description:
        'Detailed content disclaimers and warnings with relevant info (why did the show receive the age rating it did?)',
      type: 'contentAdvisory',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'triggerWarning',
      title: 'Trigger Warning',
      description: 'Special content considerations that could trigger some patrons',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'effectsAdvisory',
      type: 'effectsAdvisory',
      description: 'Information about any dangerous or jarring effects used in the show',
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: 'additionalDetails',
      title: 'Additional Show Details',
      description: '',
      type: 'array',
      of: [{ type: 'detailItem' }],
    }),

    //  ------------------------ COLLABORATION ------------------------ //
    defineField({
      name: 'collaboration',
      title: 'Collaboration',
      description: 'If this show is a collaboration, add the details here',
      options: { collapsible: true, collapsed: true },
      type: 'object',
      fields: [
        defineField({
          name: 'with',
          title: 'What organization is the collaboration with?',
          type: 'reference',
          to: [{ type: 'organization' }],
        }),
        defineField({
          name: 'details',
          title: 'Collaboration details',
          type: 'array',
          of: [{ type: 'block', styles: [] }],
        }),
      ],
    }),

    //  ------------------------ ARTISTS ------------------------ //
    defineField({
      name: 'artists',
      title: 'Artists',
      description: 'The squad of people who are working on this show',
      type: 'showArtists',
    }),

    //  ------------------------ PROMO ------------------------ //
    defineField({
      name: 'promo',
      title: 'Promo',
      type: 'object',
      options: { collapsible: true, collapsed: true },
      description: 'Promo material for this show',
      fields: [
        {
          type: 'trailer',
          name: 'trailer',
        },
        {
          type: 'soundtrack',
          name: 'soundtrack',
        },
      ],
    }),

    //  ------------------------ SPONSORS ------------------------ //
    defineField({
      name: 'sponsors',
      title: 'Sponsors',
      type: 'showSponsors',
    }),

    //  ------------------------ PERFORMANCES ------------------------ //
    defineField({
      name: 'performances',
      title: 'Performances',
      description: 'Set up and configure performance occurrences',
      type: 'array',
      validation: (Rule) => Rule.unique(),
      of: [{ type: 'performance' }],
    }),

    //  ------------------------ SEO ------------------------ //
    defineField({
      name: 'seo',
      type: 'seo',
      group: 'seo',
    }),
  ],

  initialValue: {
    isHiddenFromWebsite: false,
    isCollaboration: false,

    type: 'live',
    status: 'scheduled',
    series: 'core',

    contentAdvisory: {
      hasAdditionalInfo: false,
    },
    effectsAdvisory: {
      hasAdditionalInfo: false,
    },
  },
  preview: {
    select: {
      title: 'title',
      seasonTitle: 'season.title',
      media: 'posterImage',
    },

    prepare({ title, seasonTitle, media }) {
      return {
        title,
        subtitle: seasonTitle,
        media,
      };
    },
  },

  orderings: [
    {
      title: 'Show Date, Newest to Oldest',
      name: 'showDateDesc',
      by: [{ field: 'closeDate', direction: 'desc' }],
    },
  ],
});
