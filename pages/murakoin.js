import { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import WhatIsMuraKoin from '../components/murakoin/what-is-mura-koin';
import PeerReward from '../components/murakoin/peer-reward';
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
        <Layout title="Murakoin | Jualan Murah, Untung, Pelayanan Ramah, dan Transaksi Aman" description="Jualan Pulsa Murah Dengan Murapay" keyword="murapay,murakoin" background="bg-blue-2">
            <WhatIsMuraKoin openBootstrapModal={event => openBootstrapModal(event, 'https://www.youtube.com/embed/ORoq9VaGbl8')}/>
            <PeerReward openBootstrapModal={event => openBootstrapModal(event, 'https://www.youtube.com/embed/Jl2eCGSLbTo')}/>
            <Modal url={url}/>
        </Layout>
    );
}