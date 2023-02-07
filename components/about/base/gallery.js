import Image from "next/future/image";

import GalleryImage from "../../../public/img/about/gallery.png";
import FirstImage from "../../../public/img/about/a.jpg";
import SecondImage from "../../../public/img/about/b.jpg";
import ThirdImage from "../../../public/img/about/c.jpg";
import FourthImage from "../../../public/img/about/d.jpg";

const Gallery = () => {
  return (
    <>
      <div className="row pt-3 pt-lg-4">
        <div className="col-12 mb-4">
          <h1 className="text-dark-blue text-center fw-700" data-aos="zoom-in">
            GALERI
          </h1>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-none d-lg-flex d-xl-none justify-content-start">
            <Image src={FirstImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-flex d-lg-none justify-content-center">
            <Image src={FirstImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-none d-lg-none d-xl-flex justify-content-end">
            <Image src={FirstImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-none d-lg-flex d-xl-none justify-content-end">
            <Image src={SecondImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-flex d-lg-none justify-content-center">
            <Image src={SecondImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-none d-lg-none d-xl-flex justify-content-start">
            <Image src={SecondImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
        </div>
        <div className="col-12 col-lg-6 mb-4">
          <div className="d-none d-lg-flex d-xl-none justify-content-start">
            <Image src={ThirdImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-flex d-lg-none justify-content-center">
            <Image src={ThirdImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-none d-lg-none d-xl-flex justify-content-end">
            <Image src={ThirdImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="d-none d-lg-flex d-xl-none justify-content-end">
            <Image src={FourthImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-flex d-lg-none justify-content-center">
            <Image src={FourthImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
          <div className="d-none d-lg-none d-xl-flex justify-content-start">
            <Image src={FourthImage} alt="gallery" loading="lazy" className="img-fluid" data-aos="zoom-in" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
