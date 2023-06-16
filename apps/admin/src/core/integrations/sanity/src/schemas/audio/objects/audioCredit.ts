import { defineField, defineType } from 'sanity';

export const audioCredit = defineType({
  name: 'audioCredit',
  title: 'Audio Credit',
  type: 'object',
  fields: [
    defineField({
      title: 'Role',
      name: 'role',
      description: 'What role/action did this supporter take in creating this audio?',
      type: 'string',
    }),
    defineField({
      title: 'Supporter',
      name: 'supporter',
      description: 'Who created or helped create this audio?',
      type: 'reference',
      to: [{ type: 'supporter' }],
    }),
  ],
});
