import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { useApollo } from '../lib/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // ApolloClient instance
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
