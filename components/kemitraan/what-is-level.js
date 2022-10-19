const WhatIsLevel = () => {
    return (
        <div>
            <section className="level-up bg-gray py-4" id="level-up">
                <div className="container">
                    <div className="row gx-0">
                    <div className="col-4 p-3">
                        <div className="border-radius-54 bg-white py-5 mx-3 h-100">
                        <div className="px-xxl-5 px-4 py-2">
                            <h3 className="fs-5 text-orange fw-700 text-center">Bagaimana Cara <br />
                            untuk Naik Level?</h3>
                            <hr className="mx-2" id="line" />
                            <p className="my-0 text-dark-blue text-center fw-400 fs-6">
                            <small>
                                Mitra akan secara otomatis naik level
                                jika berhasil mengumpulkan jumlah
                                XP minimum
                                yang telah ditentukan
                                di tiap levelnya.
                            </small>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 p-3">
                        <div className="border-radius-54 bg-white py-5 mx-3 h-100">
                        <div className="px-xxl-5 px-4 py-2">
                            <h3 className="fs-5 text-orange fw-700 text-center">Apakah Level<br />
                            Bisa Turun?</h3>
                            <hr className="mx-2" id="line" />
                            <p className="my-0 text-dark-blue text-center fw-400 fs-6">
                            <small>
                                Level Mitra akan turun apabila
                                syarat minimal XP level tidak
                                tercapai setiap periodenya.
                            </small>
                            </p>
                        </div>
                        </div>
                    </div>
                    <div className="col-4 p-3">
                        <div className="border-radius-54 bg-white py-5 mx-3 h-100">
                        <div className="px-xxl-5 px-4 py-2">
                            <h3 className="fs-5 text-orange fw-700 text-center">Apakah Bisa
                            Mempertahankan
                            Level? <br />
                            </h3>
                            <hr className="mx-2" id="line" />
                            <p className="my-0 text-dark-blue text-center fw-400 fs-6">
                            <small>
                                Untuk mempertahankan level,
                                Mitra perlu mengumpulkan syarat
                                minimal XP di level yang sama
                                dengan periode sebelumnya.
                            </small>
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
            <section className="sub-levelup" id="sub-levelup">
                <div className="container">
                    <div className="row">
                    <div className="col-12 text-center">
                        <p className="fs-6 fw-700">Contoh : </p>
                    </div>
                    <div className="col-10 offset-1 text-center fs-6 fw-400 text-dark-blue">
                        Di Periode 1, Mitra mencapai level Bos Besar (40.000 XP) dengan total perolehan XP sebesar 65.000 XP.
                        Maka di Periode 2, Mitra wajib mengumpulkan minimal 40.000 XP untuk mempertahankan di level Bos Besar.
                        Apabila tidak mencapai 40.000 XP, maka Mitra akan turun 1 level di bawahnya (ke level Saudagar) di Periode
                        3.
                    </div>
                    </div>
                </div>
            </section>
      </div>
    )
}

export default WhatIsLevel