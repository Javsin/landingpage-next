import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
import {QueryClient, QueryClientProvider} from 'react-query'
function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient()
  return (
    <>
      <NextNProgress color="#F37020" height={3} startPosition={0.3} stopDelayMs={150}/>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </>
  ) 
}

export default MyApp
