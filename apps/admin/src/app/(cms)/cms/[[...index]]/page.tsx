import type { Metadata } from 'next';
import { metadata as studioMetadata, viewport as studioViewport } from 'next-sanity/studio';

import { SanityStudio } from '@/integrations/sanity/src/SanityStudio';

export const metadata: Metadata = {
  ...studioMetadata,
  title: 'CMS | Nerve Theatre',
  viewport: {
    ...studioViewport,
    interactiveWidget: 'resizes-content',
  },
};

const SanityStudioPage = () => {
  return <SanityStudio />;
};

export default SanityStudioPage;
