import Image from "next/future/image";
import xp from "../../public/img/icon/xp.png";
import xp_biru from "../../public/img/icon/xp biru.png";
const FunctionXP = () => {
  return (
    <div>
      <section className="what-is-xp bg-dark-blue" id="what-is-xp">
        <div className="container">
          <div className="row">
            <div className="col-10 offset-1">
              <div className="border-radius-54 p-5 bg-blue">
                <h3 className="fs-3 text-orange fw-700 text-center">Apa itu XP?</h3>
                <p className="text-white px-5 fw-400 text-center fs-6">
                  XP (Experience Point) adalah poin yang Mitra peroleh setelah melakukan aktivitas tertentu di dalam aplikasi MuraPay. Mitra harus mengumpulkan beberapa jumlah XP sebagai syarat untuk naik level.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="functional-xp">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center" id="function-xp">
              <h3 className="fs-3 text-orange fw-700">Apa Fungsi dari XP?</h3>
            </div>
            <div className="col-8 offset-2">
              <p className="px-5 fw-400 text-center text-dark-blue">
                Fungsi dari XP adalah satu-satunya syarat untuk menaikan <br /> dan mempertahankan level.
              </p>
            </div>
            <div className="col-12 text-center mt-3" id="get-xp">
              <h3 className="fs-3 text-orange fw-700">Bagaimana Cara Memperoleh XP?</h3>
            </div>
            <div className="col-8 offset-2">
              <p className="px-5 fw-400 text-center text-dark-blue">
                XP (Experience Point) adalah poin yang Mitra peroleh setelah melakukan aktivitas tertentu di dalam aplikasi MuraPay. Mitra harus mengumpulkan beberapa jumlah XP sebagai syarat untuk naik level.
              </p>
            </div>
            <div className="col-8 offset-2 px-5">
              <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="flush-headingOne">
                    <button className="accordion-button collapsed fw-700 text-orange" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                      <div className="row w-100 d-flex">
                        <div className="col-1 text-center">
                          <div className="circle2 bg-white text-dark-blue fw-400 fs-5">A</div>
                        </div>
                        <div className="col-11 align-self-center fs-5">Mendaftar dengan Kode Refferal</div>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 semi-dark">
                      <p className="text-dark-blue mt-2">Mitra berhasil menggunakan Kode Refferal +150</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="flush-headingTwo">
                    <button className="accordion-button collapsed fw-700 text-orange" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                      <div className="row w-100 d-flex">
                        <div className="col-1 text-center">
                          <div className="circle2 bg-white text-dark-blue fw-400 fs-5">B</div>
                        </div>
                        <div className="col-11 align-self-center">
                          <p className="my-0 d-flex fs-5">
                            Transaksi Mitra <span className="text-white mx-2">+10-500</span> <Image src={xp} width={18} height={18} alt="xp" />
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseTwo" className="accordion-collapse collapse" aria-labelledby="flush-headingTwo" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 semi-dark">
                      <p className="mt-2 text-dark-blue">Sukses melakukan transaksi produk yang ada di aplikasi MuraPay</p>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="flush-headingThree">
                    <button className="accordion-button collapsed fw-700 text-orange" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                      <div className="row w-100 d-flex">
                        <div className="col-1 text-center">
                          <div className="circle2 bg-white text-dark-blue fw-400 fs-5">C</div>
                        </div>
                        <div className="col-11 align-self-center">
                          <p className="my-0 d-flex fs-5">
                            XP Starter <span className="text-white mx-2">+50-500</span> <Image src={xp} width={18} height={18} alt="xp" />
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseThree" className="accordion-collapse collapse" aria-labelledby="flush-headingThree" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 text-dark-blue">
                      <div className="row">
                        <div className="col-12">
                          <p className="mt-2">Menyelesaikan misi XP Starter dalam kurun waktu satu minggu (7 hari) setelah mendaftar</p>
                        </div>
                        <div className="col-10">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Melakukan verifikasi akun. </p>
                          </span>
                        </div>
                        <div className="col-2 text-orange fw-700">
                          <p className="my-0">
                            +50{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-10">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Deposit pertama sukses secara otomatis.</p>
                          </span>
                        </div>
                        <div className="col-2 fw-700 text-orange">
                          <p className="my-0">
                            +50{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-10">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Buka menu transaksi dan melakukan transaksi apapun.</p>
                          </span>
                        </div>
                        <div className="col-2 fw-700 text-orange">
                          <p className="my-0">
                            +50{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-10">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Buka menu CS dan menghubungi CS.</p>
                          </span>
                        </div>
                        <div className="col-2 fw-700 text-orange">
                          <p className="my-0">
                            +50{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-10">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Buka menu "Kemitraan" dan membaca sampai akhir.</p>
                          </span>
                        </div>
                        <div className="col-2 fw-700 text-orange">
                          <p className="my-0">
                            +50{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-10">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Bonus menyelesaikan semua task.</p>
                          </span>
                        </div>
                        <div className="col-2 fw-700 text-orange">
                          <p className="my-0">
                            +250{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="flush-headingFour">
                    <button className="accordion-button collapsed fw-700 text-orange" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFour" aria-expanded="false" aria-controls="flush-collapseFour">
                      <div className="row w-100 d-flex">
                        <div className="col-1 text-center">
                          <div className="circle2 bg-white text-dark-blue fw-400 fs-5">D</div>
                        </div>
                        <div className="col-11 align-self-center">
                          <p className="my-0 d-flex fs-5">Naik Level</p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseFour" className="accordion-collapse collapse" aria-labelledby="flush-headingFour" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 text-dark-blue">
                      <div className="row">
                        <div className="col-12">
                          <p className="mt-2">
                            Mitra naik level untuk pertama kali di tiap level <br />
                            (tidak berlaku jika naik ke level yang sama untuk kedua kalinya)
                          </p>
                        </div>
                        <div className="col-4">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Pedagang.</p>
                          </span>
                        </div>
                        <div className="col-8 text-orange fw-700">
                          <p className="my-0">
                            +200{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-4">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Juragan.</p>
                          </span>
                        </div>
                        <div className="col-8 fw-700 text-orange">
                          <p className="my-0">
                            +300{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-4">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Saudagar.</p>
                          </span>
                        </div>
                        <div className="col-8 fw-700 text-orange">
                          <p className="my-0">
                            +400{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-4">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Bos Besar.</p>
                          </span>
                        </div>
                        <div className="col-8 fw-700 text-orange">
                          <p className="my-0">
                            +500{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="flush-headingFive">
                    <button className="accordion-button collapsed fw-700 text-orange" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseFive" aria-expanded="false" aria-controls="flush-collapseFive">
                      <div className="row w-100 d-flex">
                        <div className="col-1 text-center">
                          <div className="circle2 bg-white text-dark-blue fw-400 fs-5">E</div>
                        </div>
                        <div className="col-11 align-self-center">
                          <p className="my-0 d-flex fs-5">Kontribusi dari Downline</p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseFive" className="accordion-collapse collapse" aria-labelledby="flush-headingFive" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 text-dark-blue">
                      <div className="row">
                        <div className="col-9 mt-2">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Setiap Mitra berhasil mendapatkan downline baru.</p>
                          </span>
                        </div>
                        <div className="col-3 text-orange fw-700 mt-2">
                          <p className="my-0">
                            +150{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-9">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0"> Setiap downline sukses melakukan transaksi.</p>
                          </span>
                        </div>
                        <div className="col-3 fw-700 text-orange">
                          <p className="my-0">
                            +10-500{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-9">
                          <span className="my-0 d-flex">
                            <svg xmlns="http://www.w3.org/2000/svg" width={16} height={16} fill="currentColor" className="bi bi-star-fill me-2 align-self-center text-orange" viewBox="0 0 16 16">
                              <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                            </svg>
                            <p className="my-0">Downline naik level untuk pertama kalinya di tiap level.</p>
                          </span>
                        </div>
                        <div className="col-3 fw-700 text-orange">
                          <p className="my-0">
                            +20 -200{" "}
                            <span className="ms-2 align-self-center">
                              <Image src={xp_biru} width={18} height={18} alt="image_xp" />
                            </span>
                          </p>
                        </div>
                        <div className="col-12 mt-3">
                          <div className="bg-dark-blue border-radius-24 py-2">
                            <div className="col-12 text-center">
                              <h4 className="fs-4 fw-700 text-white my-3">Cara Memperoleh XP</h4>
                            </div>
                            <div className="col-12 text-white">
                              <div className="row m-2">
                                <div className="col-2 py-2 bg-white border-radius-24-top-left border-light-gray-bottom border-light-gray-right">
                                  <div className="rounded-pill bg-dark-blue text-center">
                                    <p className="my-0 fs-7 fw-500">
                                      Upline <br /> Tk. 4
                                    </p>
                                  </div>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +10 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +10 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-radius-24-top-right border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 bg-white border-light-gray-bottom border-light-gray-right">
                                  <div className="rounded-pill bg-dark-blue text-center">
                                    <p className="my-0 fs-7 fw-500">
                                      Upline <br /> Tk. 3
                                    </p>
                                  </div>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +20 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +20 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 bg-white border-light-gray-bottom border-light-gray-right">
                                  <div className="rounded-pill bg-dark-blue text-center">
                                    <p className="my-0 fs-7 fw-500">
                                      Upline <br /> Tk. 2
                                    </p>
                                  </div>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +30 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +30 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 bg-white border-light-gray-bottom border-light-gray-right">
                                  <div className="rounded-pill bg-dark-blue text-center">
                                    <p className="my-0 fs-7 fw-500">
                                      Upline <br /> Tk. 1
                                    </p>
                                  </div>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-700">150 XP</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +40 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">
                                    +40 % dari <br /> XP Mitra
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-white d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">-</p>
                                </div>
                                <div className="col-2 py-2 bg-white border-light-gray-bottom border-light-gray-right">
                                  <div className="rounded-pill bg-dark-blue text-center">
                                    <p className="my-0 fs-7 fw-500 py-2">Mitra</p>
                                  </div>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-700">150 XP</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">100% XP</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-700">500 XP</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-500">100% XP</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-bottom border-light-gray-right bg-light-gray d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-dark-blue align-self-center fw-700">+100 sd 500 XP</p>
                                </div>
                                <div className="col-2 py-2 bg-white border-radius-24-bottom-left border-light-gray-bottom border-light-gray-right">
                                  <div className="rounded-pill bg-orange text-center">
                                    <p className="my-0 fs-7 fw-500">
                                      Sumber <br /> XP
                                    </p>
                                  </div>
                                </div>
                                <div className="col-2 py-2 border-light-gray-right bg-orange d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-white align-self-center fw-500">
                                    Daftar dengan <br /> Kode Referral
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-right bg-orange d-flex align-items-center justify-content-center text-center">
                                  <p className="my-0 fs-7 text-white align-self-center fw-500">
                                    Transaksi <br /> Sukses
                                  </p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-right bg-orange d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-white align-self-center fw-500">XP Starter</p>
                                </div>
                                <div className="col-2 py-2 border-light-gray-right bg-orange d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-white align-self-center fw-500">Naik Level</p>
                                </div>
                                <div className="col-2 py-2 bg-orange border-radius-24-bottom-right d-flex align-items-center justify-content-center">
                                  <p className="my-0 fs-7 text-white align-self-center fw-500">
                                    Misi &amp; Event <br /> di Aplikasi
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item mb-2">
                  <h2 className="accordion-header" id="flush-headingSix">
                    <button className="accordion-button collapsed fw-700 text-orange" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseSix" aria-expanded="false" aria-controls="flush-collapseSix">
                      <div className="row w-100 d-flex">
                        <div className="col-1 text-center">
                          <div className="circle2 bg-white text-dark-blue fw-400 fs-5">F</div>
                        </div>
                        <div className="col-11 align-self-center">
                          <p className="my-0 d-flex fs-5">
                            Misi dan Event <span className="text-white mx-2">+100-500</span> <Image src={xp} width={18} height={18} />{" "}
                          </p>
                        </div>
                      </div>
                    </button>
                  </h2>
                  <div id="flush-collapseSix" className="accordion-collapse collapse" aria-labelledby="flush-headingSix" data-bs-parent="#accordionFlushExample">
                    <div className="accordion-body pt-0 semi-dark">
                      <p className="mt-2 text-dark-blue">Berhasil menyelesaikan misi dan event yang sedang berlangsung</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FunctionXP;
