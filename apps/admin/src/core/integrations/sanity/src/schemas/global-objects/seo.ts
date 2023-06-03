import { defineField, defineType } from 'sanity';

/**
 * An object for managing SEO at a page level.
 *
 * Allows you to set meta title, description, image, etc.
 */
export const seoObject = defineType({
  name: 'seo',
  title: 'SEO',
  description: 'Optimize this document for search engines',
  type: 'object',
  fields: [
    defineField({
      name: 'hide',
      title: 'Hide Document?',
      description: 'Do you want to hide this document from search engines?',
      type: 'boolean',
    }),
    defineField({
      name: 'title',
      title: 'Meta Title',
      type: 'string',
      validation: (Rule) => Rule.required().min(25).max(70),
    }),
    defineField({
      name: 'description',
      title: 'Meta Description',
      type: 'text',
      rows: 3,
      validation: (Rule) => Rule.required().min(50).max(200),
    }),
    defineField({
      name: 'image',
      title: 'Meta Image',
      type: 'imageWithAlt',
      options: {
        accept: '.jpg',
      },
    }),
    defineField({
      name: 'publishedAt',
      title: 'Published At',
      description: 'Set a date and time to use for the original creation date of this document.',
      type: 'datetime',
      options: {
        dateFormat: 'MM-DD-YYYY',
        timeFormat: 'h:mm:a',
        timeStep: 30,
      },
    }),
  ],
});
