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
    <div className="border-neutral flex flex-col rounded-sm">
      <Text as="h2" className="mb-5" color="accent" size="lg" weight="semibold">
        {name}
      </Text>
      <div className="flex items-center gap-9">{children}</div>
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
      <div className="mt-10 flex max-w-[900px] flex-col gap-11">
        <ComponentGroup name="Button - Default">
          <Button as="button">Default Button</Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Sizes">
          <Button size="sm" as="button">
            Button SM
          </Button>
          <Button size="md" as="button">
            Button MD
          </Button>
          <Button size="lg" as="button">
            Button LG
          </Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Types">
          <Button as="button" variant="fill">
            Fill
          </Button>
          <Button as="button" variant="outline">
            Outline
          </Button>
          <Button as="button" variant="ghost">
            Ghost
          </Button>
          <Button as="button" variant="text">
            Text
          </Button>
          <Button as="button" variant="icon">
            Icon
          </Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Themes + Types">
          <div className="flex flex-col gap-8">
            <Text color="neutral">All of the available button theme and type combinations</Text>
            <ComponentGroup name="Primary">
              <Button as="button" theme="primary" variant="fill">
                Primary Fill
              </Button>
              <Button as="button" theme="primary" variant="outline">
                Primary Outline
              </Button>
              <Button as="button" theme="primary" variant="ghost">
                Primary Ghost
              </Button>
              <Button as="button" theme="primary" variant="text">
                Primary Text
              </Button>
              <Button as="button" theme="primary" variant="icon">
                Primary Icon
              </Button>
            </ComponentGroup>
            <ComponentGroup name="Secondary">
              <Button as="button" theme="secondary" variant="fill">
                Secondary Fill
              </Button>
              <Button as="button" theme="secondary" variant="outline">
                Secondary Outline
              </Button>
              <Button as="button" theme="secondary" variant="ghost">
                Secondary Ghost
              </Button>
              <Button as="button" theme="secondary" variant="text">
                Secondary Text
              </Button>
              <Button as="button" theme="secondary" variant="icon">
                Secondary Icon
              </Button>
            </ComponentGroup>
            <ComponentGroup name="Tertiary">
              <Button as="button" theme="tertiary" variant="fill">
                Tertiary Fill
              </Button>
              <Button as="button" theme="tertiary" variant="outline">
                Tertiary Outline
              </Button>
              <Button as="button" theme="tertiary" variant="ghost">
                Tertiary Ghost
              </Button>
              <Button as="button" theme="tertiary" variant="text">
                Tertiary Text
              </Button>
              <Button as="button" theme="tertiary" variant="icon">
                Tertiary Icon
              </Button>
            </ComponentGroup>
          </div>
        </ComponentGroup>
        <ComponentGroup name="Button - Prefix & Suffix">
          <Button as="button">Prefix</Button>
          <Button as="button">Suffix</Button>
          <Button as="button">Prefix + Suffix</Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Disabled">
          <Button as="button" variant="fill" disabled>
            Fill
          </Button>
          <Button as="button" variant="outline" disabled>
            Outline
          </Button>
          <Button as="button" variant="ghost" disabled>
            Ghost
          </Button>
          <Button as="button" variant="text" disabled>
            Text
          </Button>
          <Button as="button" variant="icon" disabled>
            Icon
          </Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Busy">
          <Button as="button" variant="fill" busy>
            Fill
          </Button>
          <Button as="button" variant="outline" busy>
            Outline
          </Button>
          <Button as="button" variant="ghost" busy>
            Ghost
          </Button>
          <Button as="button" variant="text" busy>
            Text
          </Button>
          <Button as="button" variant="icon" busy>
            Icon
          </Button>
        </ComponentGroup>
        <ComponentGroup name="Button - Others">
          <Button as="button" fullWidth>
            Full Width
          </Button>
        </ComponentGroup>
      </div>
    </section>
  );
};

export default Page;
