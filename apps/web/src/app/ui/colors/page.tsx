import { type Metadata } from 'next';
import { type PropsWithChildren } from 'react';

// import { getDocumentMeta } from '@/features/seo/__scenarios__/getDocumentMeta';

export const metadata: Metadata = {
  title: 'Colors | Nerve Design System',
  description: 'A modern design system library for The Nerve',
  robots: 'noindex, nofollow',
};

const ColorFamily = ({ name, children }: PropsWithChildren<{ name: string }>) => {
  return (
    <div className="flex flex-col">
      <div className="text-neutral-lightest font-weight-semibold text-size-5 mb-5 lowercase">{name}</div>
      <div className="grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-6">{children}</div>
    </div>
  );
};

const ColorSwatch = ({ className, mappedColor }: { className: string; mappedColor: string }) => {
  return (
    <div className="flex items-center gap-5">
      <div className={`${className} border-neutral-darker border-sm h-[64px] w-[64px] rounded-sm`} />
      <div>
        <p className="text-neutral-lightest text-size-2">{className}</p>
        <p className="text-neutral text-size-2">{mappedColor}</p>
      </div>
    </div>
  );
};

const Page = () => {
  return (
    <section className="p-9">
      <h1 className="font-weight-black leading-heading text-size-10">color</h1>
      <p className="font-weight-regular text-neutral mt-3 max-w-[725px]">
        The Nerve's color system for all of our applications. In addition to the color itself, each swatch displays the
        "bg" tailwind class name and the underlying color token selection
      </p>
      <div className="mt-10 flex flex-col gap-9">
        <ColorFamily name="primary">
          <ColorSwatch className="bg-primary-darker" mappedColor="primary.800" />
          <ColorSwatch className="bg-primary-dark" mappedColor="primary.700" />
          <ColorSwatch className="bg-primary" mappedColor="primary.500" />
          <ColorSwatch className="bg-primary-light" mappedColor="primary.400" />
          <ColorSwatch className="bg-primary-lighter" mappedColor="primary.200" />
        </ColorFamily>
        <ColorFamily name="secondary">
          <ColorSwatch className="bg-secondary-darkest" mappedColor="secondary.900" />
          <ColorSwatch className="bg-secondary-darker" mappedColor="secondary.700" />
          <ColorSwatch className="bg-secondary-dark" mappedColor="secondary.600" />
          <ColorSwatch className="bg-secondary" mappedColor="secondary.500" />
          <ColorSwatch className="bg-secondary-light" mappedColor="secondary.400" />
          <ColorSwatch className="bg-secondary-lighter" mappedColor="secondary.200" />
        </ColorFamily>
        <ColorFamily name="neutral">
          <ColorSwatch className="bg-neutral-darkest" mappedColor="neutral.900" />
          <ColorSwatch className="bg-neutral-darker" mappedColor="neutral.850" />
          <ColorSwatch className="bg-neutral-dark" mappedColor="neutral.700" />
          <ColorSwatch className="bg-neutral" mappedColor="neutral.500" />
          <ColorSwatch className="bg-neutral-light" mappedColor="neutral.300" />
          <ColorSwatch className="bg-neutral-lighter" mappedColor="neutral.150" />
          <ColorSwatch className="bg-neutral-lightest" mappedColor="neutral.000" />
        </ColorFamily>
        <ColorFamily name="accent">
          <ColorSwatch className="bg-accent-dark" mappedColor="accent.600" />
          <ColorSwatch className="bg-accent" mappedColor="accent.500" />
          <ColorSwatch className="bg-accent-light" mappedColor="accent.400" />
          <ColorSwatch className="bg-accent-lighter" mappedColor="accent.150" />
        </ColorFamily>
        <ColorFamily name="positive">
          <ColorSwatch className="bg-positive-dark" mappedColor="positive.600" />
          <ColorSwatch className="bg-positive" mappedColor="positive.500" />
          <ColorSwatch className="bg-positive-light" mappedColor="positive.400" />
          <ColorSwatch className="bg-positive-lighter" mappedColor="positive.150" />
        </ColorFamily>
        <ColorFamily name="negative">
          <ColorSwatch className="bg-negative-dark" mappedColor="negative.600" />
          <ColorSwatch className="bg-negative" mappedColor="negative.500" />
          <ColorSwatch className="bg-negative-light" mappedColor="negative.400" />
          <ColorSwatch className="bg-negative-lighter" mappedColor="negative.150" />
        </ColorFamily>
      </div>
    </section>
  );
};

export default Page;
