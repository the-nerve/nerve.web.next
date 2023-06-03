import { defineField, defineType } from 'sanity';

export const ID = 'companyConfig';
export const TITLE = 'Company Config';

export const schema = defineType({
  name: ID,
  title: TITLE,
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legacyName',
      title: 'Legacy Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legalName',
      title: 'Legal Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'legacyLegalName',
      title: 'Legacy Legal Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'ein',
      title: 'EIN',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'foundingDate',
      title: 'Founding Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoOnLight',
      title: 'Logo » On Light',
      description: 'Company logo on a light background',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'logoOnDark',
      title: 'Logo » On Dark',
      description: 'Company logo on a dark background',
      type: 'imageWithAlt',
    }),
    defineField({
      name: 'website',
      title: 'Website',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'legacyWebsite',
      title: 'Legacy Website',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'emailGeneral',
      title: 'Email » General',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailTicketing',
      title: 'Email » Ticketing',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailAuditions',
      title: 'Email » Auditions',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailSponsorship',
      title: 'Email » Sponsorship',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'emailClasses',
      title: 'Email » Classes',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),

    defineField({
      name: 'city',
      title: 'City',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'state',
      title: 'State',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'stateCode',
      title: 'State Code',
      type: 'string',
      validation: (Rule) => Rule.required().max(2),
    }),
    defineField({
      name: 'zip',
      title: 'Zip Code',
      type: 'string',
      validation: (Rule) => Rule.required().min(5).max(5),
    }),
    defineField({
      name: 'spotify',
      title: 'Spotify Profile Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram Profile Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'instagramUsername',
      title: 'Instagram Username',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'tiktok',
      title: 'TikTok Profile Link',
      type: 'url',
      validation: (Rule) =>
        Rule.uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'youtube',
      title: 'Youtube Profile Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'youtubeShowTrailers',
      title: 'Youtube Show Trailers Playlist Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
    defineField({
      name: 'github',
      title: 'Github Profile Link',
      type: 'url',
      validation: (Rule) =>
        Rule.required().uri({
          scheme: ['https'],
        }),
    }),
  ],
});
