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
      name: 'isPWYW',
      title: 'Pay What You Want',
      description: 'This is a Pay What You Want (PWYW) performance',
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
    },
    prepare(selection) {
      const { title, tickets, isPWYW } = selection;

      const eventFeatures = [isPWYW ? 'pwyw' : ''];

      const featuresDisplay = eventFeatures.filter(Boolean).join(', ');
      const price = tickets.price ? `$${tickets.price}` : 'not set';

      const subtitle = `ticketing: ${tickets.type} • price: ${price} • features: ${featuresDisplay}`;

      return {
        title: format(new Date(title), 'cccc » MMM dd, yyyy @ h:mm a'),
        subtitle,
      };
    },
  },
});
