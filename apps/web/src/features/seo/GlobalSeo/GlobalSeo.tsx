import Head from 'next/head';

export const GlobalSeo = () => {
  return (
    <Head>
      {/* Default language and direction */}
      <html lang="en" dir="ltr" />

      {/* Google Specific Tags -- prevent search box from showing up on Google */}
      <meta name="google" content="nositelinkssearchbox" />
      <meta name="geo.region" content="US-IL" />
      <meta name="geo.placename" content="Chicago" />

      {/* Global OpenGraph meta */}
      <meta property="og:locale" content="en_US" />
      <meta property="og:type" content="website" />
      <meta name="og:email" content="" />
      <meta name="og:country-name" content="USA" />
      <meta name="og:region" content="IL" />
    </Head>
  );
};
