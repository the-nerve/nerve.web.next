import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';

import { Headline, Text } from '@nerve/ui';

const TextGroup = ({ name, children, className }: PropsWithChildren<{ name: string; className: string }>) => {
  return (
    <div className={`flex flex-col ${className}`}>
      <Text as="h2" className="mb-5" color="accent" size="lg" weight="semibold">
        {name}
      </Text>
      <div className="flex flex-col gap-9">{children}</div>
    </div>
  );
};

export const metadata: Metadata = {
  title: 'Typography | Nerve Design System',
  description: 'A modern design system library for The Nerve',
  robots: 'noindex, nofollow',
};

const textContent =
  'The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because it is content. The cute cat purrs because it is content.';
const headlineContent = 'The cute cat quietly purrs.';

const Page = () => {
  return (
    <section className="p-9">
      <Headline transform="lowercase" size="md">
        Typography
      </Headline>
      <Text className="mt-3 max-w-[725px]" color="neutral">
        The Nerve's color system for all of our applications. In addition to the color itself, each swatch displays the
        "bg" tailwind class name and the underlying color token selection
      </Text>
      <div className="mt-10 flex flex-col gap-10">
        <TextGroup name="Text - Regular" className="max-w-[725px]">
          <Text size="xl">XL - {textContent}</Text>
          <Text size="lg">LG - {textContent}</Text>
          <Text size="md">MD - {textContent}</Text>
          <Text size="sm">SM - {textContent}</Text>
          <Text size="xs">XS - {textContent}</Text>
        </TextGroup>
        <TextGroup name="Text - Semibold" className="max-w-[725px]">
          <Text size="xl" weight="semibold">
            XL - {textContent}
          </Text>
          <Text size="lg" weight="semibold">
            LG - {textContent}
          </Text>
          <Text size="md" weight="semibold">
            MD - {textContent}
          </Text>
          <Text size="sm" weight="semibold">
            SM - {textContent}
          </Text>
          <Text size="xs" weight="semibold">
            XS - {textContent}
          </Text>
        </TextGroup>
        <TextGroup name="Headline" className="max-w-[1200px]">
          <Headline size="xxl">XXL - {headlineContent}</Headline>
          <Headline size="xl">XL - {headlineContent}</Headline>
          <Headline size="lg">LG - {headlineContent}</Headline>
          <Headline size="md">MD - {headlineContent}</Headline>
          <Headline size="sm">SM - {headlineContent}</Headline>
          <Headline size="xs">XS - {headlineContent}</Headline>
        </TextGroup>
      </div>
    </section>
  );
};

export default Page;
