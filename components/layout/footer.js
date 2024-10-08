import Link from "next/link";
import icon from "../../public/img/favicon.png";
import Image from "next/image";
import { useRouter } from "next/router";
const Footer = () => {
  const router = useRouter();
  const scrolltop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <footer id="footer" className="bg-blue-6">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-md-6 mb-3">
              <div className="">
                <h3>MuraPay</h3>
                <p className="pb-3 my-0">
                  <em>
                    Bangun usahamu sampai ke level tertinggi dengan harga
                    terbaik, produk digital ter-update, dan pelayanan solutif.
                  </em>
                </p>
                <p>
                  Jl. Batan Selatan No.54, Miroto, Kec. Semarang Tengah, <br />{" "}
                  Kota Semarang, Jawa Tengah 50134
                </p>
                {/* <p>
                  Infiniti Office, Menara Cakrawala Lt 12, Unit 05A
                  Jl. M.H. Thamrin No.9, Rukun Tetangga 002, Rukun Warga 001, Kelurahan  Kebon Sirih, Kecamatan Menteng, Jakarta Pusat, Kode Pos 10340.
                </p> */}

                <div className="social-links mt-3">
                  <a
                    href="https://www.instagram.com/murapay.id/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram bg-orange me-2"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-instagram"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                    </svg>
                  </a>
                  <a
                    href=" https://www.youtube.com/channel/UCSdb72vsk2HVIKnBQNM0vBg"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram bg-orange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.tiktok.com/@murapay.id"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram bg-orange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/murapay.id/"
                    target="_blank"
                    rel="noreferrer"
                    className="instagram bg-orange"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={16}
                      height={16}
                      fill="currentColor"
                      className="bi bi-youtube"
                      viewBox="0 0 16 16"
                    >
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 offset-lg-1 col-md-6 footer-links">
              <h4>Navigasi</h4>
              <ul>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link href="/">
                    <a>Home</a>
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link href="/kemitraan">
                    <a>Kemitraan</a>
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link href="/partnership">
                    <a>Partnership</a>
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link href="https://portal.murapay.id/" passHref>
                    <a target="_blank">Portal Murapay</a>
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link href="/harga">
                    <a>Harga</a>
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <Link href="/about">
                    <a>Tentang Kami</a>
                  </Link>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a
                    href="https://apps.murapay.id/app/webview/syarat-ketentuan-v1.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Syarat & Ketentuan
                  </a>
                </li>
                <li>
                  <i className="bx bx-chevron-right" />
                  <a
                    href=" https://apps.murapay.id/app/webview/kebijakan-privasi-v1.html"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Kebijakan Privasi
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 col-md-6 footer-newsletter">
              <div className="mb-5">
                <h4>Hubungi Kami</h4>
                <a
                  className="text-white"
                  style={{ cursor: "pointer" }}
                  href="https://api.whatsapp.com/send/?phone=6281329701020&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-whatsapp me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <span style={{ fontSize: "12px" }}>
                    +6281 329 701 020 (Customer Service)
                  </span>
                </a>
                <br />
                <br />
                <a
                  href="mailto:info@murapay.id"
                  className="text-white"
                  target="_blank"
                  rel="noreferrer"
                  style={{ cursor: "pointer" }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-envelope me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                  </svg>
                  <span style={{ fontSize: "12px" }}>info@murapay.id</span>
                </a>
              </div>
              <div className="mb-3">
                <h4>Kontak Marketing</h4>
                <a
                  className="text-white"
                  style={{ cursor: "pointer" }}
                  href="https://api.whatsapp.com/send/?phone=6282111109560&text&type=phone_number&app_absent=0"
                  target="_blank"
                  rel="noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
                    fill="currentColor"
                    className="bi bi-whatsapp me-2"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  <span style={{ fontSize: "12px" }}>
                    +62821 1110 9560 (Marketing)
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="copyright">
          © Copyright{" "}
          <strong>
            <span>MuraPay</span>
          </strong>
          . All Rights Reserved
        </div>
        <div className="credits"></div>
      </div>
      <div>
        <div className="d-none d-md-block">
          {router.pathname === "/partnership" ? (
            <a
              href="https://api.whatsapp.com/send/?phone=6281329701020&text=Hallo,saya ingin bertanya mengenai program partnership dealer Murapay&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              style={{ width: "60px", height: "60px" }}
              className="back-to-top d-flex align-items-center justify-content-center bg-success"
              id="back-to-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-whatsapp text-white"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          ) : router.pathname === "/kemitraan" ? (
            <a
              href="https://api.whatsapp.com/send/?phone=6281329701020&text=Hallo,saya%20ingin%20mengetahui%20lebih%20lanjut%20mengenai%20kemitraan%20murapay%20&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              style={{ width: "60px", height: "60px" }}
              className="back-to-top d-flex align-items-center justify-content-center bg-success"
              id="back-to-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-whatsapp text-white"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          ) : router.pathname === "/" ? (
            <a
              href="https://api.whatsapp.com/send/?phone=6281329701020&text=Hallo,saya%20ingin%20mengetahui%20lebih%20lanjut%20mengenai%20murapay%20&type=phone_number&app_absent=0"
              target="_blank"
              rel="noreferrer"
              style={{ width: "60px", height: "60px" }}
              className="back-to-top d-flex align-items-center justify-content-center bg-success"
              id="back-to-top"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={30}
                height={30}
                fill="currentColor"
                className="bi bi-whatsapp text-white"
                viewBox="0 0 16 16"
              >
                <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
              </svg>
            </a>
          ) : (
            <a
              onClick={scrolltop}
              className="back-to-top d-flex align-items-center justify-content-center"
              id="back-to-top"
            >
              <i className="bi bi-arrow-up-short" />
            </a>
          )}
        </div>
        <div
          className="fixed-bottom d-none d-md-none bg-dark-blue"
          id="floating-mobile"
        >
          <div
            className="row d-flex justify-content-center align-items-center py-3"
            style={{ paddingLeft: "20px", paddingRight: "20px" }}
          >
            <div className="col-2">
              <Image src={icon} alt="icon-footer-1" />
            </div>
            <div className="col-5">
              <div className="d-flex flex-column align-self-center">
                <span
                  className="text-white fw-bolder"
                  style={{ fontSize: "1rem" }}
                >
                  MuraPay
                </span>
              </div>
            </div>
            <div className="col-5">
              <button className="btn bg-orange text-white w-100 h-100">
                Download
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
