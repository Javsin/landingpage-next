import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import NextNProgress from "nextjs-progressbar";
import {QueryClient, QueryClientProvider} from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { useEffect } from 'react';
function MyApp({ Component, pageProps }) {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js");
  }, [])
  return (
    <>
      <NextNProgress color="#F37020" height={3} startPosition={0.3} stopDelayMs={150}/>
      <QueryClientProvider client={new QueryClient()}>
        <ReactQueryDevtools initialIsOpen={false} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  ) 
}

export default MyApp
