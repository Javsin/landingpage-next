import icon from '../../public/img/favicon.png';
import Image from 'next/image';
const scrolltop = () => {
    window.scrollTo({top: 0, behavior: 'smooth'});
}
const Footer = () => {
    return (
        <footer id="footer">
            <div className="footer-top">
            <div className="container">
                <div className="row">
                <div className="col-lg-4 col-md-6">
                    <div className="footer-info">
                    <h3>MuraPay</h3>
                    <p className="pb-3"><em>Bangun usahamu sampai ke level tertinggi dengan harga terbaik, produk digital ter-update, dan pelayanan solutif.</em></p>
                    <p>
                        Jln. Batan Selatan No. 54 <br />
                        Semarang, Indonesia<br /><br />
                        <strong>Phone:</strong> 
                        <a href="https://api.whatsapp.com/send/?phone=6281329701020&text&type=phone_number&app_absent=0" target="_blank" className="ms-2 badge rounded-pill bg-success text-white" style={{cursor: 'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-whatsapp" viewBox="0 0 16 16">
                            <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg> +6281 329 70 10 20</a><br />
                        <strong>Email:</strong> 
                        <a href="mailto:info@murapay.id" target="_blank" className="ms-2 badge rounded-pill bg-light text-dark" style={{cursor: 'pointer'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" width={12} height={12} fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                            <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                        </svg>
                        info@murapay.id
                        </a><br />
                    </p>
                    <div className="social-links mt-3">
                        <a href="https://www.tiktok.com/@murapay.id" target="_blank" className="twitter"><i className="bx bxl-tiktok" /></a>
                        <a href="#" target="_blank" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="https://www.instagram.com/murapay.id/" target="_blank" className="instagram"><i className="bx bxl-instagram" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6 footer-links">
                    <h4>Navigasi</h4>
                    <ul>
                    <li><i className="bx bx-chevron-right" /> <a href="#hero">Dashboard</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#about">Mulai Usaha</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#features">Fitur</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#testimonials">Produk</a></li>
                    <li><i className="bx bx-chevron-right" /> <a href="#faq">Tanya Jawab</a></li>
                    </ul>
                </div>
                {/* <div class="col-lg-2 col-md-6 footer-links">
                        <h4>Produk Kami</h4>
                        <ul>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Pulsa</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">PPOB</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Transfer Uang</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Paket Data</a></li>
                        <li><i class="bx bx-chevron-right"></i> <a href="#">Voucher Game</a></li>
                        </ul>
                    </div> */
                }
                <div className="col-lg-4 col-md-6 footer-newsletter">
                    <h4>Selalu Update Dengan Kami</h4>
                    <p>Masukan email Anda :</p>
                    <form action method="post">
                    <input type="email" className="form-control border border-0" name="email" /><input type="submit" defaultValue="Subscribe" />
                    </form>
                </div>
                </div>
            </div>
            </div>
            <div className="container">
            <div className="copyright">
                © Copyright <strong><span>MuraPay</span></strong>. All Rights Reserved
            </div>
            <div className="credits">
          </div>
        </div>
        <div>
        <div className="d-none d-md-block">
          <a onClick={scrolltop} className="back-to-top d-flex align-items-center justify-content-center" id="back-to-top"><i className="bi bi-arrow-up-short" /></a>
        </div>
        <div className="fixed-bottom d-none d-md-none bg-dark-blue" id="floating-mobile">
          <div className="row d-flex justify-content-center align-items-center py-3" style={{paddingLeft: '20px', paddingRight: '20px'}}>
            <div className="col-2">
              <Image src={icon}/>
            </div>
            <div className="col-5">
              <div className="d-flex flex-column align-self-center">
                <span className="text-white fw-bolder fs-6">MuraPay</span>
              </div>
            </div>
            <div className="col-5">
              <button className="btn bg-orange text-white w-100 h-100">Download</button>
            </div>
          </div>
        </div>
      </div>
      </footer>
    );
}

export default Footer;