import { type Metadata } from 'next';

export const generateMetadata = async (): Promise<Metadata> => {
  return {
    title: '',
    description: '',
  };
};

const Page = () => {
  return <h1>Nerve Show Tickets</h1>;
};

export default Page;
