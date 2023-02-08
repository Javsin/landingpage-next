import Image from "next/image";
import image1 from "../../public/img/new/murakoin.jpg";
import styles from "../../styles/addons.module.css";
const WhatIsMuraKoin = (props) => {
  return (
    <section className="murakoin mt-5" id="murakoin">
      <div className="container">
        <div className="mx-5 px-3">
          <div className="row d-flex">
            <div className="col-5">
              <a onClick={props.openBootstrapModal} className="youtube">
                <Image src={image1} className={styles.thumbnail_video} quality={90} alt="image1" />
              </a>
            </div>
            <div className="col-7 align-self-center">
              <h4 className="text-orange fs-3 fw-700">Apa itu MuraKoin ? </h4>
              <p className="my-0 fs-6">
                MuraKoin adalah reward dalam sistem kemitraan MuraPay
                <br />
                yang dapat ditukarkan menjadi saldo dengan
                <br />
                nilai tukar 1:1 (1 MuraKoin = Rp 1,-).
              </p>
            </div>
          </div>
          <div className="row mb-5 mt-4 gx-0">
            <div className="col-12 mt-2 pe-0 d-flex mt-3">
              <div className="circle3 bg-dark-blue text-white fw-400 fs-3 me-3">A</div>
              <p className="fs-3 text-orange fw-700 mb-2">Bagaimana cara mendapatkan MuraKoin?</p>
            </div>
            <div className="col-12 text-dark-blue">
              <p className="my-0 fs-6 ms-5 ps-2 my-0">MuraKoin diperoleh dari:</p>
              <span className="d-flex ms-5 ps-2 my-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className="my-0 fs-6 my-0">Selisih harga Upline dengan harga Downline, dan hanya berlaku jika level Upline lebih tinggi dari level Downline.</p>
              </span>
              <span className="d-flex ms-5 ps-2 my-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className="my-0 fs-6 my-0">Peer reward (khusus untuk level Bos Besar).</p>
              </span>
              <span className="d-flex ms-5 ps-2 my-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className="my-0 fs-6 my-0">Event-event reward yang diadakan oleh MuraPay.</p>
              </span>
            </div>
            <div className="col-12 mt-2 pe-0 d-flex mt-3">
              <div className="circle3 bg-dark-blue text-white fw-400 fs-3 me-3">B</div>
              <p className="fs-3 text-orange fw-700 mb-2">Seperti apa sistem pembagian MuraKoin?</p>
            </div>
            <div className="col-12 text-dark-blue">
              <span className="d-flex ms-5 ps-2 my-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className="my-0 fs-6 my-0">MuraKoin dari selisih harga dibagikan kepada Upline yang levelnya lebih tinggi di jaringan yang sama.</p>
              </span>
              <span className="d-flex ms-5 ps-2 my-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className="my-0 fs-6 my-0">MuraKoin dibagikan sampai Upline dengan level paling tinggi di jaringannya, atau sampai Upline Bos Besar pertama.</p>
              </span>
              <span className="d-flex ms-5 ps-2 my-0">
                <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
                <p className="my-0 fs-6 my-0">Jumlah MuraKoin yang dibagikan sesuai selisih harga untuk masing-masing level.</p>
              </span>
            </div>
          </div>
          <div className="row mt-5 text-center">
            <div className="col-12">
              <h3 className="fs-3 text-dark-blue fw-700 mt-3">Tabel Selisih Harga Antar Level</h3>
            </div>
            <div className="col-4 offset-4 mt-4">
              <div className="row">
                <div className="col-6 mb-3">
                  <div className="border-radius-24 bg-dark-blue">
                    <div className="rounded-pill bg-orange">
                      <p className="text-white fs-6 fw-600 py-2 my-0">PLN Token</p>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill text-orange align-self-center" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="my-0 fs-4 fw-700 ms-2 text-white">25</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border-radius-24 bg-dark-blue">
                    <div className="rounded-pill bg-orange">
                      <p className="text-white fs-6 fw-600 py-2 my-0">Pulsa</p>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill text-orange align-self-center" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="my-0 fs-4 fw-700 ms-2 text-white">25</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border-radius-24 bg-dark-blue">
                    <div className="rounded-pill bg-orange">
                      <p className="text-white fs-6 fw-600 py-2 my-0 fs-7">PPOB</p>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill text-orange align-self-center" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="my-0 fs-4 fw-700 ms-2 text-white">40</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border-radius-24 bg-dark-blue">
                    <div className="rounded-pill bg-orange">
                      <p className="text-white fw-600 py-2 my-0 fs-7_5 lh-sm">
                        Dompet Digital, <br /> Transfer Uang, E-Money
                      </p>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill text-orange align-self-center" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="my-0 fs-4 fw-700 ms-2 text-white">40</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border-radius-24 bg-dark-blue">
                    <div className="rounded-pill bg-orange">
                      <p className="text-white fw-600 py-2 my-0 fs-7_5 lh-sm">
                        Voucher Digital, <br /> &amp; Live Streaming
                      </p>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill text-orange align-self-center" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="my-0 fs-4 fw-700 ms-2 text-white">75</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 mb-3">
                  <div className="border-radius-24 bg-dark-blue">
                    <div className="rounded-pill bg-orange">
                      <p className="text-white fw-600 py-2 my-0 fs-7_5 lh-sm">
                        Paket Data, <br /> Telepon &amp; SMS
                      </p>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill text-orange align-self-center" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="my-0 fs-4 fw-700 ms-2 text-white">75</p>
                    </div>
                  </div>
                </div>
                <div className="col-6 offset-3">
                  <div className="border-radius-24 bg-dark-blue">
                    <div className="rounded-pill bg-orange">
                      <p className="text-white fs-6 fw-600 py-2 my-0 fs-7">Voucher Game</p>
                    </div>
                    <div className="d-flex justify-content-center py-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width={20} height={20} fill="currentColor" className="bi bi-plus-circle-fill text-orange align-self-center" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" />
                      </svg>
                      <p className="my-0 fs-4 fw-700 ms-2 text-white">75</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatIsMuraKoin;
