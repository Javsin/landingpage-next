import axios from 'axios';
import Layout from '../components/layout/layout';
import Price from '../components/price/price';
export default function Produk({data}) {
    return (        
        <Layout title="Harga | Jualan Murah, Untung, Pelayanan Ramah, dan Transaksi Aman" description="Jualan Pulsa Murah Dengan Murapay" keyword="murapay,harga produk,pulsa murah,server pulsa">
            <Price produk={data} />
        </Layout>
    );
}
export async function getServerSideProps({ req, res }) { 
    res.setHeader(
        'Cache-Control',
        'public, s-maxage=10, stale-while-revalidate=59'
    )
    let data = await axios.get (`https://next.murapay.id/api/harga`)
    .then(function (response) {
        return JSON.parse(response.data);
    }).catch(function (error) {
        return error;
    });
    return { props: { data } }
}