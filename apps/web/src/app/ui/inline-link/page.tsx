import { type Metadata } from 'next';

import { Headline, InlineLink, Text } from '@nerve/ui';

export const metadata: Metadata = {
  title: 'InlineLink | Nerve Design System',
  description: 'A modern design system library for The Nerve',
  robots: 'noindex, nofollow',
};

const Page = () => {
  return (
    <section className="p-9">
      <Headline transform="lowercase" size="md">
        Inline Link
      </Headline>
      <Text className="mt-3 max-w-[725px]" color="neutral">
        The <strong>InlineLink</strong> component is a wrapper around the Next.js Link component. It is used to create
        text links to other pages in the application or to external sites.
      </Text>
      <div className="mt-10 flex max-w-[725px] flex-col gap-10">
        <Text size="sm">
          The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because
          it is content.{' '}
          <InlineLink href="https://www.google.com" target="_blank">
            Google (color="primary")
          </InlineLink>{' '}
          The cute cat purrs because it is content. The cute cat purrs because it is content.
        </Text>
        <Text>
          The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because
          it is content.{' '}
          <InlineLink href="https://www.google.com" target="_blank">
            Google (color="primary")
          </InlineLink>{' '}
          The cute cat purrs because it is content. The cute cat purrs because it is content.
        </Text>
        <Text size="lg">
          The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because
          it is content.{' '}
          <InlineLink href="https://www.google.com" target="_blank">
            Google (color="primary")
          </InlineLink>{' '}
          The cute cat purrs because it is content. The cute cat purrs because it is content.
        </Text>
        <Text size="sm">
          The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because
          it is content.{' '}
          <InlineLink href="https://www.google.com" target="_blank" color="neutral">
            Google (color="neutral")
          </InlineLink>{' '}
          The cute cat purrs because it is content. The cute cat purrs because it is content.
        </Text>
        <Text>
          The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because
          it is content.{' '}
          <InlineLink href="https://www.google.com" target="_blank" color="neutral">
            Google (color="neutral")
          </InlineLink>{' '}
          The cute cat purrs because it is content. The cute cat purrs because it is content.
        </Text>
        <Text size="lg">
          The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because
          it is content.{' '}
          <InlineLink href="https://www.google.com" target="_blank" color="neutral">
            Google (color="neutral")
          </InlineLink>{' '}
          The cute cat purrs because it is content. The cute cat purrs because it is content.
        </Text>
      </div>
    </section>
  );
};

export default Page;
