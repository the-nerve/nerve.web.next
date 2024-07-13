import { defineField, defineType } from 'sanity';

export const videoCredit = defineType({
  name: 'videoCredit',
  title: 'Video Credit',
  type: 'object',
  fields: [
    defineField({
      title: 'Role',
      name: 'role',
      description: 'What role/action did this supporter take in creating this video?',
      type: 'string',
    }),
    defineField({
      title: 'Supporter',
      name: 'supporter',
      description: 'Who created or helped create this video?',
      type: 'reference',
      to: [{ type: 'supporter' }],
    }),
  ],
});
