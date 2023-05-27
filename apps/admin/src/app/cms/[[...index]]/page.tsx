import type { Metadata } from 'next';
import { metadata as studioMetadata } from 'next-sanity/studio/metadata';

import { Studio } from './Studio';

// Set the right `viewport`, `robots` and `referer` meta tags
export const metadata: Metadata = {
  ...studioMetadata,
  // Overrides the viewport to resize behavior
  viewport: `${studioMetadata.viewport}, interactive-widget=resizes-content`,
};

// eslint-disable-next-line react/function-component-definition
export default function StudioPage() {
  return <Studio />;
}
