import { type Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    manifest: '/manifest.json', // TODO: Define dynamically
    icons: [],
    themeColor: '#000000',
    creator: '',
    publisher: 'The Nerve',
    robots: 'index, follow',
    verification: {
      google: 'Y77ldamJwjr7FV4fk8-3c49PqJFnZYPIn9m1dTzC6YU',
      other: {
        bing: 'EDFBACF0E7580C38BF059AD64DA861A1',
      },
    },
  };
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
};

export default RootLayout;
