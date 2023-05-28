import { defineField, defineType } from 'sanity';

export const ID = 'seoConfig';
export const TITLE = 'SEO Config';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  fields: [
    defineField({
      name: 'fallbackPageMetaImage',
      title: 'Fallback Meta Image » Page',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'fallbackSeasonMetaImage',
      title: 'Fallback Meta Image » Season',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'fallbackShowMetaImage',
      title: 'Fallback Meta Image » Show',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'fallbackPostMetaImage',
      title: 'Fallback Meta Image » Post',
      type: 'imageWithAlt',
    }),
  ],
});
