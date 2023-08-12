import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';

import { Button, Headline, Text } from '@nerve/ui';

export const metadata: Metadata = {
  title: 'Button | Nerve Design System',
  description: 'A modern design system library for The Nerve',
  robots: 'noindex, nofollow',
};

const ComponentGroup = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  return (
    <div className="border-neutral flex max-w-[725px] flex-col rounded-sm">
      <Text as="h2" className="mb-5" color="accent" size="lg" weight="semibold">
        {name}
      </Text>
      <div className="flex gap-9">{children}</div>
    </div>
  );
};

const Page = () => {
  return (
    <section className="p-9">
      <Headline transform="lowercase" size="md">
        Button
      </Headline>
      <Text className="mt-3 max-w-[725px]" color="neutral">
        The <strong>Button</strong> component is used to build interactive elements in the application. It is used to
        trigger actions, such as submitting a form, opening a modal, or navigating to another page. It automatically
        switches between a button and an anchor tag based on the props passed to it.
      </Text>
      <div className="mt-10 flex max-w-[725px] flex-col gap-10">
        <ComponentGroup name="Button - Default">
          <Button>Default Button</Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Sizes">
          <Button size="sm">Button SM</Button>
          <Button size="md">Button MD</Button>
          <Button size="lg">Button LG</Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Types">
          <Button type="fill">Fill</Button>
          <Button type="outline">Outline</Button>
          <Button type="ghost">Ghost</Button>
          <Button type="text">Text</Button>
          <Button type="icon">Icon</Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Prefix & Suffix">
          <Button>Prefix</Button>
          <Button>Suffix</Button>
          <Button>Prefix + Suffix</Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Disabled">
          <Button type="fill" disabled>
            Fill
          </Button>
          <Button type="outline" disabled>
            Outline
          </Button>
          <Button type="ghost" disabled>
            Ghost
          </Button>
          <Button type="text" disabled>
            Text
          </Button>
          <Button type="icon" disabled>
            Icon
          </Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Busy">
          <Button type="fill" busy>
            Fill
          </Button>
          <Button type="outline" busy>
            Outline
          </Button>
          <Button type="ghost" busy>
            Ghost
          </Button>
          <Button type="text" busy>
            Text
          </Button>
          <Button type="icon" busy>
            Icon
          </Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Others">
          <Button fullWidth>Full Width</Button>
        </ComponentGroup>
      </div>
    </section>
  );
};

export default Page;
