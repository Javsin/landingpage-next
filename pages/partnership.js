import { useEffect, useState } from 'react';
import Layout from '../components/layout/layout';
import Banner from '../components/partnership/banner';
import Introduction from '../components/partnership/intoduction';
import Goal from '../components/partnership/goal';
import Sinergi from '../components/partnership/sinergi';
import Subintroduction from '../components/partnership/subintroduction';
import Benefit from '../components/partnership/benefit';
import Form_partner from '../components/partnership/form_partner';
export default function Kemitraan() {
    useEffect(() => {
        window.AOS.init({
          duration: 1000,
          easing: "ease-in-out",
          once: true,
          mirror: false,
        });
    },[]);
    return (
        <Layout title="Partnership | Jualan Murah, Untung, Pelayanan Ramah, dan Transaksi Aman" description="Jualan Pulsa Murah Dengan Murapay" keyword="murapay,partnership" background="header-transparent">
            <Banner/>
            <Introduction/>
            <Subintroduction />
            <Sinergi/>
            <Goal/>
            <Benefit/>
            <Form_partner/>
        </Layout>
    );
}