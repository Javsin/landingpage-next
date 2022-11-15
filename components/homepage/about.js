import Image from 'next/image';
import icon1 from '../../public/img/new/icon-25.png';
import icon2 from '../../public/img/new/icon-26.png';
import icon3 from '../../public/img/new/icon-27.png';
import icon4 from '../../public/img/new/icon-28.png';
const About = () => {
    return (
        <section id="about" className="about">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xl-5 col-lg-6 video-box d-flex justify-content-center align-items-stretch" data-aos="fade-right">
                    </div>
                    <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
                    <h3>Mulai Usahamu dengan MuraPay</h3>
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
                        <div className="icon">
                            <Image src={icon1} className ="img-fluid" loading='lazy' alt='icon_1_home'/>
                        </div>
                        <h4 className="title"><a href>Level Akun</a></h4>
                        <p className="description">Raih level MitraMura tertinggi untuk harga yang lebih murah.</p>
                    </div>
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
                        <div className="icon">
                            <Image src={icon2} className ="img-fluid" loading='lazy' alt='icon_2_home' />
                        </div>
                        <h4 className="title"><a href>Produk Terlengkap</a></h4>
                        <p className="description">Pilihan produk digital lengkap dan ter-update.</p>
                    </div>
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                        <div className="icon">
                            <Image src={icon3} className ="img-fluid" loading='lazy' alt='icon_3_home'/>
                        </div>
                        <h4 className="title"><a href>Buat Jaringanmu</a></h4>
                        <p className="description">Bangun jaringanmu untuk bonus komisi lebih besar. 
                        </p>
                    </div>
                    <div className="icon-box" data-aos="zoom-in" data-aos-delay={300}>
                        <div className="icon">
                            <Image src={icon4} className ="img-fluid" loading='lazy' alt='icon_4_home'/>
                        </div>
                        <h4 className="title"><a href>Pelayanan</a></h4>
                        <p className="description">98,38% pesan direspon CS dalam waktu maksimal 45 detik.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default About;