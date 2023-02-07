import { useEffect } from "react";
import Layout from "../components/layout/layout";

import AboutComponent from "../components/about";

const About = () => {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  }, []);
  return (
    <Layout title="Harga | Jualan Murah, Untung, Pelayanan Ramah, dan Transaksi Aman" description="Jualan Pulsa Murah Dengan Murapay" keyword="murapay,harga produk,pulsa murah,server pulsa">
      <AboutComponent />
    </Layout>
  );
};

export default About;
