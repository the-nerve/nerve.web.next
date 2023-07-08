import { type Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    manifest: '/manifest.json',
    icons: [],
    themeColor: '#000000',
    creator: '',
    publisher: 'The Nerve',
    robots: 'index, follow',
    verification: {
      google: 'Y77ldamJwjr7FV4fk8-3c49PqJFnZYPIn9m1dTzC6YU',
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
