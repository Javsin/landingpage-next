import Image from "next/image";
import image1 from "../../public/img/new/banner-3.png";
import image2 from "../../public/img/new/banner 4.png";
import image3 from "../../public/img/new/banner 5.png";
import image4 from "../../public/img/new/banner 6.png";
const Details = () => {
  return (
    <section id="details" className="details">
      <div className="container">
        <div className="row content pt-md-5 px-md-5 mx-md-5" id="mutasi-transaksi">
          <div className="col-md-4" data-aos="fade-right">
            <Image src={image1} className="img-fluid" alt="image1" />
          </div>
          <div className="col-md-8 pt-4 d-flex flex-column justify-content-center" data-aos="fade-up">
            <h2 className="fs-4 fw-bolder">Mutasi Transaksi</h2>
            <h1 className="fs-1 fw-bold">Pantau penjualan usahamu.</h1>
            <p className="fs-5">Cek aliran pemasukan dan pengeluaran usahamu setiap periode untuk pencatatan keuangan yang mudah dan simpel.</p>
          </div>
        </div>
        <div className="row content pt-md-5 px-md-5 mx-md-5" id="transaksi-multi">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <Image src={image2} className="img-fluid" alt="image2" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1 d-flex flex-column justify-content-center" data-aos="fade-up">
            <h2 className="fs-4 fw-bolder">Transaksi Multi</h2>
            <h1 className="fs-1 fw-bold">Jual lebih banyak dalam satu kali klik.</h1>
            <p className="fs-5">Layani lebih banyak pembeli* hanya dalam satu kali transaksi. Transaksi lebih cepat, pembeli lebih puas.</p>
            <p className="fst-italic fs-6">* Maksimal 5 (lima) nomor dalam satu transaksi. Tersedia hanya untuk transaksi pulsa.</p>
          </div>
        </div>
        <div className="row content pt-md-5 px-md-5 mx-md-5" id="mitra-mura">
          <div className="col-md-4" data-aos="fade-right">
            <Image src={image3} className="img-fluid" alt="image3" />
          </div>
          <div className="col-md-8 pt-5 d-flex flex-column justify-content-center" data-aos="fade-up">
            <h2 className="fs-4 fw-bolder">MitraMura</h2>
            <h1 className="fs-1 fw-bold">Dukung perekonomian mikro.</h1>
            <p className="fs-5">Jadilah katalis dan ajak orang-orang di sekitarmu ikut memulai usaha. Raih level tertinggi dan bangun jaringanmu untuk harga yang lebih murah dan bonus komisi lebih besar.</p>
          </div>
        </div>
        <div className="row content pt-md-5 px-md-5 mx-md-5" id="live-support">
          <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
            <Image src={image4} className="img-fluid" alt="image4" />
          </div>
          <div className="col-md-8 pt-5 order-2 order-md-1 d-flex flex-column justify-content-center" data-aos="fade-up">
            <h2 className="fs-4 fw-bolder">Live Support</h2>
            <h1 className="fs-1 fw-bold">Hubungi kami setiap saat.</h1>
            <p className="fs-5">Dapatkan solusi yang kamu butuhkan langsung dari aplikasi. Tim CS kami bukan bot dan aktif 24 jam setiap hari.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
