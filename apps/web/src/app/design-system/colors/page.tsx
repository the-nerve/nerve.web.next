import { type Metadata } from 'next';

// import { getDocumentMeta } from '@/features/seo/__scenarios__/getDocumentMeta';

export const metadata: Metadata = {
  title: 'Colors | Nerve Design System',
  description: 'A modern design system library for The Nerve',
  robots: 'noindex, nofollow',
};

const ColorFamily = ({ name, children }) => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="text-neutral-lightest text-2xl font-bold">{name}</div>
      <div className="flex flex-row flex-wrap">{children}</div>
    </div>
  );
};

const ColorSwatch = ({ name, className, hexValue }) => {
  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      <div className={`${className} h-24 w-24 rounded-full`} />
      <div className="text-neutral-lightest mt-2">{name}</div>
      <div className="text-neutral-light">{hexValue}</div>
    </div>
  );
};

const Page = () => {
  return <section>Nerve design system colors</section>;
};

export default Page;
