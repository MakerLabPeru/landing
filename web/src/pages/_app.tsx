import '~/styles/globals.css';
import type { AppProps } from 'next/app'
import Layout from '~/views/Layout';

const App = ({Component, pageProps}: AppProps) => (
  <Layout>
    <Component {...pageProps} />
  </Layout>
);

export default App;
