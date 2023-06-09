import React from 'react';
import { MapPin } from 'react-feather';
import { defineField, defineType } from 'sanity';

export const ID = 'venue';
export const TITLE = 'Venues';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  icon: () => <MapPin />,
  fields: [
    defineField({
      name: 'title',
      title: 'Venue Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
    }),
    defineField({
      name: 'googleTitle',
      title: 'Venue Google Title',
      description:
        'The name of the venue as it appears in Google Maps. This helps improve user experience when opening directions links by providing a "named" destination instead of just an address. IMPORTANT NOTE: This must be a valid business name and match what Google has on file for this business. Leave empty if at all unsure.',
      type: 'string',
    }),
    defineField({
      name: 'address',
      title: 'Address',
      type: 'address',
    }),
    defineField({
      name: 'geolocation',
      title: 'Geolocation',
      type: 'geopoint',
    }),
    defineField({
      name: 'indigenousLandAcknowledgement',
      title: 'Indigenous Land Acknowledgement',
      type: 'text',
      rows: 4,
    }),
    {
      name: 'directions',
      title: 'Directions',
      type: 'array',
      of: [{ type: 'block', styles: [] }],
    },
    defineField({
      name: 'parking',
      title: 'Parking',
      type: 'array',
      of: [{ type: 'block', styles: [] }],
    }),
  ],
  preview: {
    select: {
      title: 'title',
      address: 'address',
    },
    prepare({ title, address }) {
      return {
        title,
        subtitle: `${address.street} ${address.city}, ${address.state}`,
      };
    },
  },
});
