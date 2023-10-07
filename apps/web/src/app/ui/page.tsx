import { type Metadata } from 'next';

import { Button, Headline, Text } from '@nerve/ui';

export const metadata: Metadata = {
  title: 'UI | Nerve Design System',
  description: 'A modern design system library for The Nerve',
  robots: 'noindex, nofollow',
};

const Page = () => {
  return (
    <section className="p-9">
      <Headline transform="lowercase" size="md">
        Components
      </Headline>
      <Text className="mt-3 max-w-[725px]" color="neutral">
        A collection of accessible, well-considered UI components for The Nerve's Design System
      </Text>
      <div className="mt-10 flex max-w-[900px] flex-col">
        <Button href="/button" size="sm">
          Button
        </Button>
        <Button href="/colors" size="sm">
          Colors
        </Button>
        <Button href="/inline-link" size="sm">
          Inline Link
        </Button>
        <Button href="/typography" size="sm">
          Typography
        </Button>
      </div>
    </section>
  );
};

export default Page;
