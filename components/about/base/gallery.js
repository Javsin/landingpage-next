import Image from "next/future/image";

import GalleryImage from "../../../public/img/about/gallery.png";

const Gallery = () => {
  return (
    <div className="row py-3">
      <div className="col-12 mb-4">
        <h1 className="text-dark-blue text-center fw-700">GALERI</h1>
      </div>
      <div className="col-12">
        <Image src={GalleryImage} alt="gallery" loading="lazy" className="img-fluid" />
      </div>
    </div>
  );
};

export default Gallery;
