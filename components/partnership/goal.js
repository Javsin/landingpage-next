import Image from "next/future/image";
import icon_1 from "../../public/img/new/goal1_parntership.png";
import icon_2 from "../../public/img/new/goal2_parntership.png";
import icon_3 from "../../public/img/new/goal3_parntership.png";
import icon_4 from "../../public/img/new/goal4_parntership.png";
import icon_5 from "../../public/img/new/goal5_parntership.png";
const Goal = () => {
  return (
    <div>
      <section className="bg-white goal">
        <div className="container">
            <div className="d-none d-md-block">
              <div className="row">
                <div className="col-12 text-center">
                  <h3 className="fw-700 text-orange fs-3 mb-5">Solusi yang Kami Hadirkan :</h3>
                </div>
                <div className="col-12 col-lg-4" data-aos="fade-right">
                  <Image src={icon_1} alt="icon_1" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-5 align-self-center justify-self-end" data-aos="fade-left">
                      <p className="fs-4 text-dark-blue fw-600">
                        A. Mapping Lokasi Penjual
                      </p>
                      <ol className="px-4">
                        <li className="text-dark-blue me-3">
                          Sistem Kami memiliki Fitur Mapping Lokasi Penjual,Sehingga Produk dapat ditransaksikan 100% <br/> ke Stok yang sesuai dengan Area Milik Dealer.
                        </li>
                        <li className="me-3">
                        Sistem Kami memiliki Fitur Produk Management, sehingga Produk dari Dealer hanya dapat ditransaksikan oleh Penjual yang Statusnya telah Tervalidasi oleh Team dari Dealer Operator
                        </li>
                      </ol>
                  </div>
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-5 align-self-center justify-self-end" data-aos="fade-right" data-aos-delay="300">
                      <p className="fs-4 text-dark-blue fw-600">
                        B.	Treatment Administrasi Perpajakan yang Tepat
                      </p>
                    <p>
                        Kami memiliki Team Keuangan yang memahami betul dunia perpajakan di industri Telekomunikasi. <br/>
                        Kami memahami bagaimana melakukan Treatment Perpajakan yang tepat & sejalan dengan peraturan yang ada, sehingga para Dealer Operator, Konter Pulsa, Pemain Retail tidak perlu lagi khawatir dengan administrasi perpajakan dan dapat fokus untuk berjualan serta mengembangkan usahanya.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4" data-aos="fade-left" data-aos-delay="300">
                  <Image src={icon_2} alt="icon_2" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-lg-4" data-aos="fade-right" data-aos-delay="600">
                  <Image src={icon_3} alt="icon_3" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-5 align-self-center justify-self-end" data-aos="fade-left" data-aos-delay="600">
                      <p className="fs-4 text-dark-blue fw-600">
                        C.  Konsorsium Program Operator
                      </p>
                      <ol className="px-4">
                        <li className="text-dark-blue me-3">
                          Dealer Operator dapat meningkatkan jumlah Partisipasi Pemain Konter yang mengikuti Program Operator
                        </li>
                        <li className="me-3">
                        Pemain Konter mendapatkan Harga Pokok Penjualan yang lebih baik, dengan Permodalan yang lebih sesuai dengan kapasitasnya.
                        </li>
                      </ol>
                  </div>
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-5 align-self-center justify-self-end" data-aos="fade-right" data-aos-delay="900">
                      <p className="fs-4 text-dark-blue fw-600 ">
                        D. Sebagai Platform Informasi & Marketing
                      </p>
                    <p>
                      Kami Memiliki Fitur yang memudahkan Dealer untuk memberikan Informasi, Promo atau Benefit Khusus yang ingin diberikan kepada Market dengan Cepat, Efektif & Bebas Biaya.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4" data-aos="fade-left" data-aos-delay="1200">
                  <Image src={icon_4} alt="icon_4" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-lg-4" data-aos="fade-right" data-aos-delay="1200">
                  <Image src={icon_5} alt="icon_1" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-5 align-self-center justify-self-end" data-aos="fade-left" data-aos-delay="1200">
                      <p className="fs-4 text-dark-blue fw-600">
                        E. Penetrasi Pasar yang Agresif & Fleksibel
                      </p>
                      <p>
                      Sistem kami memiliki variasi produk terlengkap disertai fleksibilitas fitur aplikasi yang dapat membantu mempermudah Dealer Operator dalam melakukan penetrasi pasar yang lebih agresif lagi.
                      </p>
                  </div>
                </div>
              </div>
            </div>
            {/* mobile not best practice you can use reordering and media query for font*/}
            <div className="d-md-none"> 
              <div className="row d-block">
                <div className="col-12 text-center">
                  <h3 className="fw-700 text-orange fs-medium mb-3">Solusi yang Kami Hadirkan :</h3>
                </div>
                <div className="col-12 col-lg-4">
                  <Image src={icon_1} alt="icon_1" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-2 align-self-center justify-self-end">
                      <p className="fs-6 text-dark-blue fw-600 mb-1">
                        A. Mapping Lokasi Penjual
                      </p>
                      <ol className="px-3">
                        <li className="text-dark-blue me-3 fs-normal">
                          Sistem Kami memiliki Fitur Mapping Lokasi Penjual,Sehingga Produk dapat ditransaksikan 100% <br/> ke Stok yang sesuai dengan Area Milik Dealer.
                        </li>
                        <li className="me-3 fs-normal">
                        Sistem Kami memiliki Fitur Produk Management, sehingga Produk dari Dealer hanya dapat ditransaksikan oleh Penjual yang Statusnya telah Tervalidasi oleh Team dari Dealer Operator
                        </li>
                      </ol>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <Image src={icon_2} alt="icon_2" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8">
                  <div className="py-3">
                      <p className="fs-6 text-dark-blue fw-600 mb-1">
                        B.	Treatment Administrasi Perpajakan yang Tepat
                      </p>
                    <p className="fs-normal">
                        Kami memiliki Team Keuangan yang memahami betul dunia perpajakan di industri Telekomunikasi. <br/>
                        Kami memahami bagaimana melakukan Treatment Perpajakan yang tepat & sejalan dengan peraturan yang ada, sehingga para Dealer Operator, Konter Pulsa, Pemain Retail tidak perlu lagi khawatir dengan administrasi perpajakan dan dapat fokus untuk berjualan serta mengembangkan usahanya.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <Image src={icon_3} alt="icon_3" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-2 align-self-center justify-self-end">
                      <p className="fs-4 text-dark-blue fw-600 fs-6 mb-1">
                        C.  Konsorsium Program Operator
                      </p>
                      <ol className="px-3">
                        <li className="text-dark-blue me-3 fs-normal">
                          Dealer Operator dapat meningkatkan jumlah Partisipasi Pemain Konter yang mengikuti Program Operator
                        </li>
                        <li className="me-3 fs-normal">
                          Pemain Konter mendapatkan Harga Pokok Penjualan yang lebih baik, dengan Permodalan yang lebih sesuai dengan kapasitasnya.
                        </li>
                      </ol>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <Image src={icon_4} alt="icon_4" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8">
                  <div className="py-2">
                      <p className="fs-6 text-dark-blue fw-600 mb-1">
                        D. Sebagai Platform Informasi & Marketing
                      </p>
                    <p className="fs-normal">
                      Kami Memiliki Fitur yang memudahkan Dealer untuk memberikan Informasi, Promo atau Benefit Khusus yang ingin diberikan kepada Market dengan Cepat, Efektif & Bebas Biaya.
                    </p>
                  </div>
                </div>
                <div className="col-12 col-lg-4">
                  <Image src={icon_5} alt="icon_1" className="img-fluid rounded" />
                </div>
                <div className="col-12 col-md-8 d-flex">
                  <div className="py-2 align-self-center justify-self-end">
                      <p className="fs-6 text-dark-blue fw-600 mb-1">
                        E. Penetrasi Pasar yang Agresif & Fleksibel
                      </p>
                      <p className="fs-normal">
                        Sistem kami memiliki variasi produk terlengkap disertai fleksibilitas fitur aplikasi yang dapat membantu mempermudah Dealer Operator dalam melakukan penetrasi pasar yang lebih agresif lagi.
                      </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="text-center mt-md-4 mt-1">
              <button className="rounded-5 bg-orange btn text-white p-2">
                Daftar Sekarang
              </button>
            </div>
          </div>
      </section>
    </div>
  );
};
export default Goal;
