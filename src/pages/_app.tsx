import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import Header from '../components/header/Header';
import { GlobalStyles } from '../styles/globalStyles';
import { useApollo } from '../lib/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // ApolloClient instance
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      {/* Global styles */}
      <GlobalStyles />

      {/* The App header */}
      <Header />

      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
