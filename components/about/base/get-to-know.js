import Image from "next/future/image";
import Kepin from "../../../public/img/about/kepin.png";

const GetToKnow = () => {
  return (
    <>
      <div className="row py-3 py-lg-4 px-5 gx-0" data-aos="fade-right">
        <div className="col-12 col-lg-3 ps-4">
          <div className="d-flex flex-column gap-2 gap-lg-0 fw-bolder fs-get-know ps-4 lh-1 h-100 justify-content-center">
            <span className="text-dark-blue">GET TO</span>
            <span className="text-orange">KNOW</span>
            <span className="text-dark-blue">US.</span>
          </div>
        </div>
        <div className="col-12 col-lg-9 pe-4" style={{ textAlign: "justify" }}>
          <p>
            <strong>MuraPay</strong> (PT Pejuang Mandiri Kreatif) yang juga merupakan bagian dari <strong>Unitedtronik Group</strong> adalah perusahaan penyedia layanan penjualan dan pembelian produkproduk digital berbasis aplikasi yang
            berkantor pusat di Semarang, Jawa Tengah. Kami menyediakan beragam produk digital, mulai dari pulsa, paket data, PPOB, pembayaran tagihan, hingga transfer uang dengan fitur lengkap serta customer service yang siap melayani
            24jam.
          </p>
          <p>
            Kami memiliki visi menjadi perusahaan dengan produk dan layanan yang dapat menjadi support system serta solusi yang relevan dalam meningkatkan kualitas hidup orang-orang di sekitarnya. Sampai saat ini, di bawah naungan{" "}
            <strong>Unitedtronik Group</strong> kami telah membantu lebih dari 500.000 agen dan reseller, serta bekerja sama dengan puluhan instansi pemerintah dan swasta di seluruh Indonesia.
          </p>
        </div>
      </div>
      <div className="row py-3 py-lg-4" data-aos="fade-left">
        <div className="col-12">
          <Image src={Kepin} alt="kepin" loading="lazy" className="img-fluid rounded-50-x" />
        </div>
      </div>
    </>
  );
};

export default GetToKnow;
