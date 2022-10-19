import {useEffect} from 'react'
import Layout from '../components/layout/layout';
import MainHead from '../components/homepage/mainhead';
import About from '../components/homepage/about';
import Features from '../components/homepage/features';
import Details from '../components/homepage/details';
import Suitable from '../components/homepage/suitable';
import Carousel from '../components/homepage/carousel';
import FAQ from '../components/homepage/faq';
import Modal from '../components/addons/modalvid';
export default function Home() {
  useEffect(() => {
    window.AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  },[]);
  return (
    <div>
      <Layout title="Jualan Murah, Untung, Pelayanan Ramah, dan Transaksi Aman" description="Jualan Pulsa Murah Dengan Murapay" keyword="murapay,kemitraan" background="header-transparent">
        <MainHead/>
        <About/>
        <Features/>
        <Details/>
        <Suitable/>
        <Carousel/>
        <FAQ/>
        <Modal url="https://www.youtube.com/embed/fo_yu6JTh7U"/>
      </Layout>
    </div>
  )
}
