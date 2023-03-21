import { Provider as JotaiProvider } from 'jotai';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const App = ({ Component, pageProps }: AppProps) => {
  return (
    <main className={inter.className}>
      <JotaiProvider>
        <Component {...pageProps} />
      </JotaiProvider>
    </main>
  );
};

export default App;
