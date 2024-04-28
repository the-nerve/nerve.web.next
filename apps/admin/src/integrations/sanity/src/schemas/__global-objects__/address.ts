import { defineField, defineType } from 'sanity';

export const addressObject = defineType({
  name: 'address',
  title: 'Address',
  type: 'object',
  fields: [
    defineField({
      name: 'street',
      title: 'Street',
      type: 'string',
    }),
    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
    }),
    defineField({
      name: 'stateCode',
      title: 'State Code',
      type: 'string',
    }),
    defineField({
      name: 'zipcode',
      title: 'Zipcode',
      type: 'string',
    }),
  ],
});
