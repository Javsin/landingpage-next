import Image from "next/image";
import image1 from '../../public/img/produk/telkomsel.png';
import image2 from '../../public/img/produk/indosat.png';
import image3 from '../../public/img/produk/axis.png';
import image4 from '../../public/img/produk/smartfren.png';
import image5 from '../../public/img/produk/gopay.png';
import image6 from '../../public/img/produk/grab.png';
import image7 from '../../public/img/produk/shopeepay.png';
import image8 from '../../public/img/produk/bpjskesehatan.png';
import image9 from '../../public/img/produk/speedy.png';
import image10 from '../../public/img/produk/bayarlistrik.png';
import SwiperCore,{ Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
const Carousel = () => {
    SwiperCore.use([Autoplay]);
    return (
        <section id="testimonials" className="testimonials">
             <div className="section-title text-center" data-aos="fade-up">
                <h2></h2>
                <p>Pilihan Produk Digital</p>
            </div>
            <div className="container d-none d-md-block d-flex justify-content-center">
                <Swiper
                    // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={40}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={5}
                        pagination={{ clickable: false }}
                        data-aos="fade-up"
                        >
                        <SwiperSlide>
                            <div>
                                <Image src={image1} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image2} unoptimized={true}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image3} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image4} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image5} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image6} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image7} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image8} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image9} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image10} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
            <div className="container d-block d-md-none">
                <Swiper
                    // install Swiper modules
                        modules={[Pagination]}
                        spaceBetween={40}
                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}
                        slidesPerView={1}
                        pagination={{ clickable: false }}
                        data-aos="fade-up"
                        >
                        <SwiperSlide>
                            <div>
                                <Image src={image1} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image2} unoptimized={true}/>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image3} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image4} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image5} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image6} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image7} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image8} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image9} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div>
                                <Image src={image10} unoptimized={true} />
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
      </section>
    );
}
export default Carousel;