import { defineType } from 'sanity';

import { contentLinkObject, externalLinkObject } from './links';

export const contentBlockObject = defineType({
  name: 'contentBlock',
  title: 'Content Block',
  type: 'array',
  of: [
    // @ts-ignore
    {
      type: 'block',
      styles: [
        { title: 'Paragraph', value: 'normal' },
        { title: 'Heading 2', value: 'h2' },
        { title: 'Heading 3', value: 'h3' },
        { title: 'Heading 4', value: 'h4' },
        { title: 'Quote', value: 'blockquote' },
      ],
      lists: [
        { title: 'Bullet', value: 'bullet' },
        { title: 'Numbered', value: 'number' },
      ],
      marks: {
        decorators: [
          { title: 'Strong', value: 'strong' },
          { title: 'Emphasis', value: 'em' },
          { title: 'Underline', value: 'underline' },
        ],
        // @ts-ignore
        annotations: [externalLinkObject, contentLinkObject],
      },
    },
    { type: 'imageWithFullMeta' },
  ],
});
