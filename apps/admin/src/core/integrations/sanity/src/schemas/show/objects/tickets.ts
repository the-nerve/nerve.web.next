import { defineField, defineType } from 'sanity';

export const tickets = defineType({
  title: 'Tickets',
  name: 'tickets',
  type: 'object',
  fields: [
    defineField({
      name: 'type',
      title: 'Ticket Type',
      description: 'How are tickets being handled for this performance?',
      type: 'string',
      options: {
        layout: 'dropdown',
        list: [
          { title: 'External Ticketing Service', value: 'external' },
          { title: 'Tickets Available at the Door', value: 'door' },
        ],
      },
    }),
    defineField({
      name: 'externalLink',
      title: 'External Ticket Link',
      description: 'Provide a link where tickets can be purchased for this performance (only if "type" is "external")',
      type: 'url',
    }),
    defineField({
      name: 'price',
      title: 'Ticket Price',
      description: 'Price for one G.A. ticket (whole numbers only)',
      type: 'number',
      validation: (Rule) => Rule.integer().min(0),
    }),
  ],
  initialValue: {
    price: 20,
  },
});
