import Image from 'next/image'
import styles from '../../styles/addons.module.css'
import image1 from '../../public/img/new/thumbnail.jpg';
import image2 from '../../public/img/new/banner-game.png';
import image3 from '../../public/img/icon/Game_Page_03.png';
import image4 from '../../public/img/icon/Game_Page_04.png';
import image5 from '../../public/img/icon/Game_Page_5.png';

const WhatIsMura = (props) => {
    return (
        <section id="what-is-mitramura" className="what-is-mitramura py-3 bg-dark-blue">
            <div className="container py-4">
                <div className="row">
                    <div className="col-lg-6 offset-lg-3 d-flex justify-content-center px-0">
                        <a onClick={props.openBootstrapModal} className="youtube">
                            <Image src = {image1} className={styles.thumbnail_video} quality={90}/>
                        </a>
                    </div>
                </div>
                <div className="col-12 text-center pt-5">
                    <h4 className="text-orange fs-3 fw-700">Apa itu MitraMura?</h4>
                </div>
                <div className="col-8 offset-2 text-center mb-2">
                    <p className="text-white fs-6 fw-400 px-5 mb-0">
                    MitraMura adalah program kemitraan untuk Mitra setia MuraPay.
                    Kumpulkan XP sebanyak-banyaknya untuk mencapai level tertinggi
                    dan mendapatkan keuntungan maksimal serta banyak benefit lainnya.
                    </p>
                </div>
                <div className="col-10 offset-1 text-center mt-5">
                    <div className="bg-blue border-radius-54 text-white">
                    <div className="row py-3">
                        <div className="col-6 offset-3">
                        <Image src = {image2}/>
                        </div>
                        <div className="col-8 offset-2 mb-1">
                        <p className="fs-6 my-0">
                            MitraMura merupakan program kemitraan berbasis gamifikasi
                            dan Mitra bisa
                            terus meningkatkan levelnya.
                            <br /><br />
                            Setiap Mitra naik level, Mitra akan
                            mendapatkan reward berupa
                            benefit
                            ekstra dari pencapaiannya tersebut.
                        </p>
                        </div>
                        <div className="col-12">
                            <div className="row px-5">
                                <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                      <Image src={image3}/>
                                    </div>
                                    <div className="col-12">
                                    <p className="text-center fs-5 text-orange fw-700">Level</p>
                                    </div>
                                    <div className="col-12">
                                    <p className="text-center text-white fs-6">
                                        Ada 5 level yang <br />
                                        bisa kamu raih
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4">
                                <div className="row">
                                    <div className="col-12">
                                     <Image src={image4}/>
                                    </div>
                                    <div className="col-12">
                                    <p className="text-center fs-5 text-orange fw-700">XP</p>
                                    </div>
                                    <div className="col-12">
                                    <p className="text-center text-white fs-6">
                                        Kumpulkan XP sebanyak-banyaknya <br /> untuk naik level
                                    </p>
                                    </div>
                                </div>
                                </div>
                                <div className="col-4">
                                    <Image src={image5}/>
                                    <p className="text-center fs-5 text-orange fw-700">Benefit</p>
                                    <p className="text-center text-white fs-6">
                                        Benefit ekstra level
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
      </section>
    )
}

export default WhatIsMura