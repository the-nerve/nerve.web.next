import React from 'react';
import { Target } from 'react-feather';
import { defineField, defineType, type FieldGroupDefinition } from 'sanity';

import { slugify } from '@/common/utils';

import * as eventObjects from './objects';

export const objects = eventObjects;

export const ID = 'event';
export const TITLE = 'Events';

const GROUPS: Record<string, FieldGroupDefinition> = {
  SETTINGS: {
    name: 'settings',
    title: 'Settings',
    default: true,
  },
  MEDIA: {
    name: 'media',
    title: 'Media',
  },
  MESSAGING: {
    name: 'messaging',
    title: 'Messaging',
  },
  INFO: {
    name: 'info',
    title: 'Info',
  },
  PERFORMANCE: {
    name: 'performance',
    title: 'Performance',
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
  icon: () => <Target />,
  groups: Object.values(GROUPS),
  fields: [
    //  ------------------------ CORE SETTINGS ------------------------ //
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'slug',
      title: 'Event Slug',
      type: 'slug',
      readOnly: true,
      options: {
        source: 'title',
        slugify,
      },
      validation: (Rule) => Rule.required(),
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'season',
      title: 'Season',
      description: 'Which season is this event a part of?',
      type: 'reference',
      to: [{ type: 'season' }],
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'venue',
      title: 'Venue',
      description: 'Where will the event take place?',
      type: 'reference',
      to: [{ type: 'venue' }],
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'openDate',
      title: 'Opening Date',
      description: 'The date of the first event occurrence',
      type: 'datetime',
      readOnly: false,
      options: {
        dateFormat: 'ddd » MMM Do, yyyy',
        timeFormat: 'h:mm:a',
      },
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'closeDate',
      title: 'Closing Date',
      description: 'The date of the last event occurrence',
      type: 'datetime',
      readOnly: false,
      options: {
        dateFormat: 'ddd » MMM Do, yyyy',
        timeFormat: 'h:mm:a',
      },
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      name: 'author',
      title: 'Script Author',
      type: 'scriptAuthor',
      group: GROUPS.SETTINGS.name,
    }),
    // TOGGLES
    defineField({
      title: 'Toggle » hide from the website',
      name: 'isHidden',
      description: 'Toggling this on will prevent this event from being displayed on the frontend of the website.',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      title: 'Toggle » is a Collaboration',
      name: 'isCollaboration',
      description: 'Toggle on if this event is a collaborative effort with another company',
      type: 'boolean',
      validation: (Rule) => Rule.required(),
      group: GROUPS.SETTINGS.name,
    }),
    // SELECTORS
    defineField({
      title: 'Select » event type',
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
      group: GROUPS.SETTINGS.name,
    }),
    defineField({
      title: 'Select » event status',
      name: 'status',
      description: '',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { value: 'scheduled', title: 'Scheduled' },
          { value: 'rescheduled', title: 'Rescheduled' },
          { value: 'postponed', title: 'Postponed' },
          { value: 'cancelled', title: 'Cancelled' },
        ],
      },
      validation: (Rule) => Rule.required(),
      group: GROUPS.SETTINGS.name,
    }),
    //  ------------------------ MEDIA ------------------------ //
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      group: GROUPS.MEDIA.name,
    }),
    defineField({
      name: 'posterImage',
      title: 'Poster Image',
      type: 'imageWithAlt',
      group: GROUPS.MEDIA.name,
    }),
    defineField({
      name: 'cardImage',
      title: 'Card Image',
      type: 'imageWithAlt',
      group: GROUPS.MEDIA.name,
    }),
    defineField({
      name: 'thumbnailImage',
      title: 'Thumbnail Image',
      type: 'imageWithAlt',
      group: GROUPS.MEDIA.name,
    }),
    //  ------------------------ MESSAGING ------------------------ //
    defineField({
      name: 'teaser',
      title: 'Teaser',
      type: 'text',
      rows: 4,
      group: GROUPS.MESSAGING.name,
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'contentBlock',
      group: GROUPS.MESSAGING.name,
    }),
    //  ------------------------ ADDITIONAL INFO ------------------------ //
    defineField({
      name: 'durationHours',
      title: 'Runtime Hours',
      description: 'How many hours does the event last? (whole numbers only)',
      type: 'number',
      validation: (Rule) => Rule.integer().positive().lessThan(4),
      group: GROUPS.INFO.name,
    }),
    defineField({
      name: 'durationMinutes',
      title: 'Runtime Minutes',
      description: 'How many minutes does the event last? (whole numbers only)',
      type: 'number',
      validation: (Rule) => Rule.integer().positive().lessThan(60),
      group: GROUPS.INFO.name,
    }),
    defineField({
      name: 'additionalDetails',
      title: 'Additional Event Details',
      description: '',
      type: 'array',
      of: [{ type: 'detailItem' }],
      group: GROUPS.INFO.name,
    }),
    defineField({
      name: 'collaboration',
      title: 'Collaboration',
      description: 'If this event is a collaboration, add the details here',
      options: { collapsible: true, collapsed: true },
      type: 'object',
      fields: [
        defineField({
          name: 'with',
          title: 'What person/organization is the collaboration with?',
          type: 'reference',
          to: [{ type: 'supporter' }],
        }),
        defineField({
          name: 'details',
          title: 'Collaboration details',
          type: 'array',
          of: [{ type: 'block', styles: [] }],
        }),
      ],
      group: GROUPS.INFO.name,
    }),

    //  ------------------------ TICKETS & PERFORMANCE ------------------------ //
    defineField({
      name: 'generalTicketLink',
      title: 'General Ticket Link',
      description:
        'The link to the page where tickets can be selected/purchased for this event (not specific to event dates and times)',
      type: 'string',
      group: GROUPS.PERFORMANCE.name,
    }),

    defineField({
      name: 'artists',
      title: 'Artists',
      description: 'The squad of people who are working on this event',
      type: 'showArtists',
      group: GROUPS.PERFORMANCE.name,
    }),

    defineField({
      name: 'performances',
      title: 'Performances',
      description: 'Set up and configure event occurrences',
      type: 'array',
      validation: (Rule) => Rule.unique(),
      of: [{ type: 'performance' }],
      group: GROUPS.PERFORMANCE.name,
    }),

    //  ------------------------ SEO ------------------------ //
    defineField({
      name: 'seo',
      type: 'seo',
      group: GROUPS.SEO.name,
    }),
  ],

  initialValue: {
    isHiddenFromWebsite: false,
    isCollaboration: false,

    type: 'live',
    status: 'scheduled',
    series: 'nerve',

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
      title: 'Event Date, Newest to Oldest',
      name: 'eventDateDesc',
      by: [{ field: 'closeDate', direction: 'desc' }],
    },
  ],
});
