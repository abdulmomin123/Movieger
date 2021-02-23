import { ApolloProvider } from '@apollo/client';
import { AppProps } from 'next/dist/next-server/lib/router/router';
import { GlobalStyles } from '../globalStyles';
import { useApollo } from '../lib/apolloClient';

const MyApp = ({ Component, pageProps }: AppProps) => {
  // ApolloClient instance
  const apolloClient = useApollo(pageProps);

  return (
    <ApolloProvider client={apolloClient}>
      {/* Global styles */}
      <GlobalStyles />

      <Component {...pageProps} />
    </ApolloProvider>
  );
};

export default MyApp;
