export const sponsorObject = {
  name: 'sponsor',
  title: 'Sponsor',
  type: 'object',
  fields: [
    {
      name: 'sponsor',
      title: 'Sponsor',
      type: 'reference',
      to: [{ type: 'supporter' }],
    },
    {
      name: 'level',
      title: 'Level',
      type: 'reference',
      to: [{ type: 'sponsorshipLevel' }],
    },
  ],
  preview: {
    select: {
      title: 'sponsor.name',
      subtitle: 'level.hashtag',
      media: 'sponsor.image',
    },
  },
};
