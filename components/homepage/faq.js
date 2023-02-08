import Image from "next/image";
import image1 from "../../public/img/new/Thumbnaildashboard.png";
import styles from "../../styles/addons.module.css";
const FAQ = () => {
  return (
    <section id="faq" className="faq section-bg">
      <div className="container">
        <div className="section-title text-center" data-aos="fade-up">
          <h2 />
          <p>Masih Ada Pertanyaan?</p>
        </div>
        <div className="row">
          <div className="col-xl-7 col-lg-6 icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <div className="faq-list">
              <ul>
                <li data-aos="fade-up">
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a data-bs-toggle="collapse" className="collapse goblok text-dark-blue" data-bs-target="#faq-list-1">
                    Apa itu Murapay?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                    <p>Murapay adalah layanan pembayaran online untuk beragam produk digital. Murapay memiliki program kemitraan bernama MitraMura bagi para Mitra setia dengan beragam benefit.</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={100}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">
                    Berapa biaya pendaftarannya?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                    <p>Siapa saja bisa mendaftar jadi MitraMura tanpa biaya pendaftaran (gratis). Kamu juga bisa bebas top up saldo Murapay dengan nominal yang kamu mau.</p>
                  </div>
                </li>
                <li data-aos="fade-up" data-aos-delay={200}>
                  <i className="bx bx-help-circle icon-help" />{" "}
                  <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">
                    Apa saja syarat pendaftaran?
                    <i className="bx bx-chevron-down icon-show" />
                    <i className="bx bx-chevron-up icon-close" />
                  </a>
                  <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                    <p>Kamu hanya perlu mengisi masukkan nama, email, no. HP, alamat, dan PIN.</p>
                  </div>
                </li>
                <li className="more-faq" data-aos="fade-up" data-aos-delay={200}>
                  <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-whatsapp me-2 icon-help text-white" viewBox="0 0 16 16">
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <a href="https://api.whatsapp.com/send/?phone=6281329701020&text&type=phone_number&app_absent=0" target="_blank" rel="noreferrer">
                    Tanya lebih lanjut disini!
                    {/* <i className="bx bx-chevron-right icon-close" /> */}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xl-5 col-lg-6 py-0 py-md-5" data-aos="fade-right">
            <a className="youtube" data-bs-toggle="modal" data-bs-target="#video">
              <Image src={image1} className={styles.thumbnail_video} alt="thubmnail" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FAQ;
