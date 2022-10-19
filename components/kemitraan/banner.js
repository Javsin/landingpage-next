import Image from 'next/future/image';
import image1 from '../../public/img/new/maskot head banner 2.png';
import styles from '../../styles/addons.module.css'
const Banner = () => {
    return (
        <section id="hero_ku" className="pb-0">
            <div className="container mt-5">
                <div className="row d-flex">
                    <div className="col-lg-4 pt-5 pt-lg-0 order-2 order-lg-1">
                        <div data-aos="zoom-out" className='pb-0'>
                            <Image src={image1} className={styles.image_kemitraan} />
                        </div>
                    </div>
                    <div className="col-lg-8 order-1 order-lg-2 hero-img ps-5 align-self-center" data-aos="zoom-out" data-aos-delay={300}>
                        <h1 className="ps-5 text-orange lh-sm">Bermitra Paling Untung, <br />
                            Ya di MitraMura</h1>
                        <h5 className="ps-5 text-white">Raih level mitra tertinggi untuk dapat <br />
                            keuntungan maksimal!</h5>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
