import axios from 'axios';
import { useEffect } from 'react';
import Layout from '../components/layout/layout';
import Price from '../components/price/price';
export default function Produk({data}) {
    useEffect(() => {
        console.log(data)
    },[]);
    return (        
        <Layout title="Harga | Jualan Murah, Untung, Pelayanan Ramah, dan Transaksi Aman" description="Jualan Pulsa Murah Dengan Murapay" keyword="murapay,harga produk,pulsa murah,server pulsa">
            <Price produk={data} />
        </Layout>
    );
}
export async function getServerSideProps() { 
    // let data = await axios.get (`${process.env.api}harga`)
    // .then(function (response) {
    //     return JSON.parse(response.data);
    // }).catch(function (error) {
    //     return error;
    // });
    let config = {
        method: 'post',
        url: `${process.env.api_external}harga`,
        headers: { 
            'Authorization': 'Bearer S3Cu121tyMur4p4YM4d3xByY4yS4ng3X'
        }
    };
    
    let data = await axios(config)
      .then(function (response) {
        return response.data
    }).catch(function (error) {
        return error;
    });  
    return { props: { data } }
}