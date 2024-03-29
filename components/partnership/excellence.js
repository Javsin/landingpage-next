import Image from "next/future/image";
import icon_1 from "../../public/img/icon/partnership-excellence-1.png";
import icon_2 from "../../public/img/icon/partnership-excellence-2.png";
import icon_3 from "../../public/img/icon/partnership-excellence-3.png";
const Excellence = () => {
  return (
    <div>
      <section className="bg-blue-7 introduction">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center mb-5">
              <h3 className="fs-3 fw-700 text-orange">Tujuan Program</h3>
            </div>
            <div className="col-md-4 col-12 text-center">
              <Image src={icon_1} className="img-fluid" quality={80} alt="benefit-partnership-1" loading="lazy" />
              <p className="text-white fw-500 d-none d-md-block">
                Menambah <br />
                Pasar Baru
              </p>
              <p className="text-white fw-500 d-md-none d-block fs-normal">Menambah Pasar Baru</p>
              <hr style={{ border: "1px solid #4B598E", marginLeft: "8rem", marginRight: "8rem", opacity: 10 }} />
              <p className="mx-5 fs-6_5 fw-400 text-white">Perluas jangkauan Dealer ke segmen reseller, pemain jaringan, dan end user dengan fleksibilitas aplikasi MuraPay.</p>
            </div>
            <div className="col-md-4 col-12 text-center">
              <Image src={icon_2} className="img-fluid" quality={80} alt="benefit-partnership-2" loading="lazy" />
              <p className="text-white fw-500 d-none d-md-block">
                Push Selling
                <br />
                dalam Aplikasi
              </p>
              <p className="text-white fw-500 d-md-none d-block fs-normal">Push Selling dalam Aplikasi</p>
              <hr style={{ border: "1px solid #4B598E", marginLeft: "8rem", marginRight: "8rem", opacity: 10 }} />
              <p className="mx-5 fs-6_5 fw-400 text-white">Tingkatkan transaksi inner Dealer melalui misi untuk pengguna dan promosi di dalam aplikasi MuraPay.</p>
            </div>
            <div className="col-md-4 col-12 text-center">
              <Image src={icon_3} className="img-fluid" quality={80} alt="benefit-partnership-3" loading="lazy" />
              <p className="text-white fw-500 d-none d-md-block">
                Menawarkan Pilihan
                <br />
                Produk Beragam
              </p>
              <p className="text-white fw-500 d-md-none d-block fs-normal">Menawarkan Pilihan Produk Beragam</p>
              <hr style={{ border: "1px solid #4B598E", marginLeft: "8rem", marginRight: "8rem", opacity: 10 }} />
              <p className="mx-5 fs-6_5 fw-400 text-white">Lebih mudah menarik pengguna baru ke dalam jaringan Tim Sales dengan aplikasi MuraPay yang melayani transaksi berbagai produk digital.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Excellence;
