import Image from 'next/future/image';
import Circle from '../../public/img/new/circle.png'
import Mbakmbak from '../../public/img/new/banner-partner.png'
const Banner = () => {
    return (
        <section id="hero_ku_partner" className="pb-0">
            <div className="container my-5">
                <div className="row d-flex">
                    <div className='col-12'>
                        <div className='p-4 bg-blue-3 border-radius-elips'>
                            <div className='row d-flex'>
                                <div className='col-4'>
                                    <div className='position-relative'>
                                        <Image src={Circle} className='img-fluid' alt='img-banner-1' loading="lazy"  />
                                        <Image src={Mbakmbak} className='img-banner-partner' alt='img-banner-2' unoptimized={true} loading="lazy" />
                                    </div>
                                </div>
                                <div className='col-8 align-self-center'>
                                    <h1 className="text-orange lh-sm fw-bold">Proposal Program Sinergi <br/>
                                    Peningkatan Transaksi Inner</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
