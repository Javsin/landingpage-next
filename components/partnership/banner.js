import Image from 'next/future/image';
import Circle from '../../public/img/new/circle.png'
import Mbakmbak from '../../public/img/new/banner-partner.png'
import Mbakmbak_mobile from '../../public/img/new/banner-partner-mobile.png'
const Banner = () => {
    return (
        <section id="hero_ku_partner" className="pb-0">
            <div className="container my-5">
                <div className="row d-flex d-none d-md-block">
                    <div className='col-12'>
                        <div className='p-4 bg-blue-3 border-radius-elips'>
                            <div className='row d-flex'>
                                <div className='col-4'>
                                    <div className='position-relative'>
                                        <Image src={Circle} className='img-fluid' alt='img-banner-1' loading="lazy"  />
                                        <Image src={Mbakmbak} className='img-banner-partner' alt='img-banner-2' quality={80} loading="lazy" />
                                    </div>
                                </div>
                                <div className='col-8 align-self-center'>
                                    <h1 className="text-orange lh-sm fw-bold">Program Sinergi Murapay dengan Dealer</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-block d-md-none'>
                    <div className='col-12 text-center'>
                        <Image src={Mbakmbak_mobile} alt='img-banner-2' quality={80} loading="lazy"/>
                    </div>
                    <div className='col-12 align-self-center text-center mt-3'>
                        <h3 className="text-orange lh-sm fw-bold fs-3">Proposal Program Sinergi <br/>
                        Peningkatan Transaksi Inner</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
