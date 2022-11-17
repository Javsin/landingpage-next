import '../styles/globals.css'
import NextNProgress from "nextjs-progressbar";
function MyApp({ Component, pageProps }) {
  return (
    <>
      <NextNProgress color="#F37020" height={3} startPosition={0.3} stopDelayMs={150}/>
      <Component {...pageProps} />
    </>
  ) 
}

export default MyApp
