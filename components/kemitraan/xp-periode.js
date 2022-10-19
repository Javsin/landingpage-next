import Image from 'next/image'
import image1 from '../../public/img/new/thumbnail.jpg'
import Ikuartal from '../../public/img/new/Kuartal-01.png'
import Ikuartal2 from '../../public/img/new/Kuartal-02.png'
import Ikuartal3 from '../../public/img/new/Kuartal-03.png'
import Ikuartal4 from '../../public/img/new/Kuartal-04.png'
import styles from '../../styles/addons.module.css'
const XP_Periode = (props) => {
    return (
        <div>
            <section id="xp-periode" className="xp-periode bg-dark-blue">
                <div className="container">
                    <div className="row d-flex">
                    <div className="col-5 offset-2" data-aos="fade-down">
                        <a onClick={props.openBootstrapModal} className="youtube">
                            <Image src = {image1} className={styles.thumbnail_video} unoptimized={true}/>
                        </a>
                    </div>
                    <div className="col-4 align-self-center" data-aos="fade-right">
                        <h4 className="fs-3 text-orange fw-700">
                        Kapan Level dan <br />
                        XP akan Ditinjau?
                        </h4>
                        <ol className="fs-6 fw-400 px-3 text-white">
                        <li>Periode level Mitra Mura adalah 3 (tiga) bulan.</li>
                        <li>Terdapat 4 periode dalam 1 tahun.</li>
                        <li>Setiap awal periode, Mitra akan memulai dari 0 XP (reset XP)</li>
                        </ol>
                    </div>
                    <div className="col-xxl-8 offset-xxl-2 col-md-8 offset-md-2 mt-5 text-blue" data-aos="fade-left">
                        <p className="my-0 px-5">*untuk pendaftaran di September, XP baru akan di-reset per 1 Januari 2023.</p>
                    </div>
                    </div>
                </div>
            </section>
            <section id="xp-periode-sub" className="xp-periode-sub">
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <Image src = {Ikuartal}/>
                        </div>
                        <div className="col-3">
                            <Image src = {Ikuartal2}/>
                        </div>
                        <div className="col-3">
                            <Image src = {Ikuartal3}/>
                        </div>
                        <div className="col-3">
                            <Image src = {Ikuartal4}/>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    )
}

export default XP_Periode