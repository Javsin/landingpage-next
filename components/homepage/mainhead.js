import Image from 'next/image'
import playstore from '../../public/img/btn-playstore.png';
import phone from '../../public/img/new/head_banner.png';
const Head = () => {
    return (
        <section id="hero">
          <div className="container">
            <div className="row justify-content-between">
              <div className="col-lg-7 pt-5 pt-lg-0 col-12 order-2 order-lg-1 d-flex align-items-center pe-lg-0">
                <div data-aos="zoom-out">
                  <h1>Jualan 
                    <span> Murah</span>,
                    <span> Untung</span>,
                    <span> Pelayanan Ramah</span>, dan
                    <span> Transaksi Aman</span>
                  </h1>
                  <h2>Bangun Usahamu sampai ke level tertinggi dengan harga terbaik, produk digital ter-update, dan pelayanan solutif.</h2>
                  <div className="text-center text-lg-start d-none d-md-block">
                    <div className='row'>
                        <div className='col-12'>
                            <h6 className="text-white mb-2">Download aplikasinya di</h6>
                        </div>
                        <div className='col-4'>
                            <a href="https://play.google.com/store/apps/details?id=com.app.murapay" target="_blank" rel="noopener noreferrer">
                                <Image src={playstore} className ="img-fluid" alt="download sekarang"/>
                            </a>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-12 order-1 order-lg-2 hero-img px-0" data-aos="zoom-out" data-aos-delay={300}>
                <div className ="img-fluid animated d-md-block d-none">
                    <Image src={phone} />
                </div>
                <div className ="img-fluid d-block d-md-none">
                    <Image src={phone} width={250} height={250} />
                </div>
              </div>
            </div>
          </div>
          <svg className="hero-waves" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 24 150 28 " preserveAspectRatio="none">
            <defs>
              <path id="wave-path" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z">
              </path></defs>
            <g className="wave1">
              <use xlinkHref="#wave-path" x={50} y={3} fill="rgba(255,255,255, .1)">
              </use></g>
            <g className="wave2">
              <use xlinkHref="#wave-path" x={50} y={0} fill="rgba(255,255,255, .2)">
              </use></g>
            <g className="wave3">
              <use xlinkHref="#wave-path" x={50} y={9} fill="#fff">
              </use></g>
          </svg>
        </section>
    );
}
export default Head