import Head from "next/head";
import Navbar from "./navbar";
import Footer from "./footer";
export default function Layout(props) {
  return (
    <div>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Murapay | {props.title}</title>
        <meta content={props.description} name="description" />
        <meta content={props.keyword} name="keywords" />
      </Head>
      <Navbar background={props.background} />
      <main id="main" className="w-100">
        {props.children}
      </main>
      <Footer />
    </div>
  );
}
