import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import {QueryClient, QueryClientProvider} from 'react-query'
// import { ReactQueryDevtools } from 'react-query/devtools'
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F37020" height={3} startPosition={0.3} stopDelayMs={150}/>
      <QueryClientProvider client={new QueryClient()}>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  ) 
}

export default MyApp
