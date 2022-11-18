import Image from "next/image";
import image1 from "../../public/img/new/Thumbnaildashboard.png";
import styles from '../../styles/addons.module.css'
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
                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#faq-list-1">Apa itu Murapay? 
                      <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-1" className="collapse show" data-bs-parent=".faq-list">
                      <p>
                        Murapay adalah layanan pembayaran online untuk beragam produk digital. Murapay memiliki program kemitraan bernama MitraMura bagi para Mitra setia dengan beragam benefit.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={100}>
                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-2" className="collapsed">Berapa biaya pendaftarannya?
                      <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-2" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Siapa saja bisa mendaftar jadi MitraMura tanpa biaya pendaftaran (gratis). Kamu juga bisa bebas top up saldo Murapay dengan nominal yang kamu mau.
                      </p>
                    </div>
                  </li>
                  <li data-aos="fade-up" data-aos-delay={200}>
                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#faq-list-3" className="collapsed">Apa saja syarat pendaftaran?
                      <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                    <div id="faq-list-3" className="collapse" data-bs-parent=".faq-list">
                      <p>
                        Kamu hanya perlu mengisi masukkan nama, email, no. HP, alamat, dan PIN.
                      </p>
                    </div>
                  </li>
                  <li className="more-faq" data-aos="fade-up" data-aos-delay={200}>
                    <i className="bx bx-help-circle icon-help" /> 
                    <a href="https://api.whatsapp.com/send/?phone=6281329701020&text&type=phone_number&app_absent=0" target="_blank">Tanya lebih lanjut disini! 
                      <i className="bx bx-chevron-right icon-close" /></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-xl-5 col-lg-6 py-0 py-md-5" data-aos="fade-right">
              <a className="youtube" data-bs-toggle="modal" data-bs-target="#video">
                <Image src={image1} className={styles.thumbnail_video}/>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
}
export default FAQ