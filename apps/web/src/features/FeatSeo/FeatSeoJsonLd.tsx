/* eslint-disable react/no-danger */
import 'server-only';

const SCRIPT_ID = 'nerve-seo';

export const FeatSeoJsonLd = <T extends Record<string, unknown>>(jsonLd: T) => {
  return (
    <script
      id={SCRIPT_ID}
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      key={`jsonld-${SCRIPT_ID}`}
    />
  );
};
