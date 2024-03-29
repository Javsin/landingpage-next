import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link href="img/favicon.png" rel="icon" />
        <link href="img/apple-touch-icon.png" rel="apple-touch-icon" />
        <link href="vendor/aos/aos.css" rel="stylesheet" />
        {/* <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" /> */}
        <link href="vendor/bootstrap-icons/bootstrap-icons.css" rel="stylesheet" />
        <link href="vendor/boxicons/css/boxicons.min.css" rel="stylesheet" />
        {/* <link href="vendor/glightbox/css/glightbox.min.css" rel="stylesheet"/> */}
        <link href="vendor/remixicon/remixicon.css" rel="stylesheet" />
        {/* <-- Google tag (gtag.js) --> */}
        {/* <link href="vendor/swiper/swiper-bundle.min.css" rel="stylesheet"/> */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-1W5177LWKC"></script>
        <script async src="js/google-analytics.js"></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script defer src="vendor/purecounter/purecounter_vanilla.js"></script>
        <script defer src="vendor/aos/aos.js"></script>
        {/* <script src="vendor/bootstrap/js/bootstrap.bundle.min.js"></script> */}
        {/* <script src="vendor/glightbox/js/glightbox.min.js"></script> */}
        {/* <script src="vendor/swiper/swiper-bundle.min.js"></script> */}
        {/* <script src="vendor/php-email-form/validate.js"></script> */}
        <script defer src="js/main.js"></script>
      </body>
    </Html>
  );
}
