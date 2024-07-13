import { defineField, defineType } from 'sanity';

export const scriptAuthor = defineType({
  name: 'scriptAuthor',
  title: 'Author',
  description: 'Information about the person who wrote the show',
  type: 'object',
  options: {
    collapsible: true,
    collapsed: true,
  },
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bioLink',
      title: 'Bio Link',
      type: 'url',
    }),
    defineField({
      name: 'scriptLink',
      title: 'Script Link',
      type: 'url',
    }),
  ],
});
