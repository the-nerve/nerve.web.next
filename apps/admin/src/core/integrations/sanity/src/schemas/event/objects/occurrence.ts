import { format } from 'date-fns';
import { defineField, defineType } from 'sanity';

export const occurrence = defineType({
  name: 'occurrence',
  title: 'Event Occurrence',
  description: 'A single event occurrence',
  type: 'object',

  fields: [
    defineField({
      name: 'datetime',
      title: 'Show date & time',
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
      name: 'status',
      title: 'Status',
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
    }),
    defineField({
      name: 'tickets',
      type: 'tickets',
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
      name: 'hasTalkback',
      title: 'Talkback After Performance',
      description: 'This performance has a talkback afterwards',
      type: 'boolean',
    }),
  ],
  initialValue: {
    isPreview: false,
    isPWYW: false,
    hasTalkback: false,
  },
  preview: {
    select: {
      title: 'datetime',
      tickets: 'tickets',
      isPWYW: 'isPWYW',
      hasTalkback: 'hasTalkback',
      isPreview: 'isPreview',
    },
    prepare(selection) {
      const { title, tickets, isPWYW, hasTalkback, isPreview } = selection;

      const showFeatures = [isPreview ? 'preview' : '', isPWYW ? 'pwyw' : '', hasTalkback ? 'talkback' : ''];

      const featuresDisplay = showFeatures.filter(Boolean).join(', ');
      const price = tickets.price ? `$${tickets.price}` : 'not set';

      const subtitle = `ticketing: ${tickets.type} • price: ${price} • features: ${featuresDisplay}`;

      return {
        title: format(new Date(title), 'cccc » MMM dd, yyyy @ h:mm a'),
        subtitle,
      };
    },
  },
});
