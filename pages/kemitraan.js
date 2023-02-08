import { useEffect,useState } from 'react';
import Layout from '../components/layout/layout';
import Banner from '../components/kemitraan/banner';
import DaftarIsi from '../components/kemitraan/daftar_isi';
import WhatIsMura from '../components/kemitraan/what-is-mura';
import LevelKemitraan from '../components/kemitraan/level-mitra';
import Benefit from '../components/kemitraan/benefit';
import XpPeriode from '../components/kemitraan/xp-periode';
import WhatIsLevel from '../components/kemitraan/what-is-level';
import FunctionXP from '../components/kemitraan/function-xp';
import GetXP from '../components/kemitraan/get-xp-after-transaction';
import Modal from '../components/addons/modalvid'
export default function Kemitraan() {
  
  let [url, seturl] = useState('');

  const openBootstrapModal = (event, url) =>{
      seturl(url);
      open_modal();
  }
  const open_modal = () => {
    const { Modal } = require("bootstrap");
    const myModal = new Modal("#video");
    myModal.show();
  }
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
        <Layout title="Kemitraan | Jualan Murah, Untung, Pelayanan Ramah, dan Transaksi Aman" description="Jualan Pulsa Murah Dengan Murapay" keyword="murapay,kemitraan" background="header-transparent">
            <Banner/>
            <DaftarIsi/>
            <WhatIsMura openBootstrapModal={event => openBootstrapModal(event, 'https://www.youtube.com/embed/fo_yu6JTh7U')}/>
            <LevelKemitraan openBootstrapModal={event => openBootstrapModal(event, 'https://www.youtube.com/embed/BEqskD2Aq9A')}/>
            <Benefit/>
            <XpPeriode openBootstrapModal={event => openBootstrapModal(event, 'https://www.youtube.com/embed/iEwYgBlN2_E')}/>
            <WhatIsLevel/>
            <FunctionXP/>
            <GetXP/>
            <Modal url={url}/>
        </Layout>
    </div>
    );
}
