const Form_partner = () => {
    return (
        <div>
            <section className="introduction" id="form_partner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-blue-3 rounded-5 mx-5 py-0 position-relative">
                                <div className="row d-flex">
                                    <div className="col-5 text-end align-self-center">
                                        <h3 className="fs-3 fw-700 text-orange">Jadilah Partner Dealer Kami!</h3>
                                        <p className="text-white fw-500">
                                            Silahkan isi form berikut ini untuk <br/>
                                            penjelasan lebih lanjut mengenai program <br/>
                                            Sinergi Peningkatan Transaksi Inner.
                                        </p>
                                        <p className="text-orange fw-500">
                                            Tim kami akan segera <br/>
                                            menghubungi Anda.
                                        </p>
                                    </div>
                                    <div className="col-7">
                                        <div className="rounded-5 bg-light-gray p-4">
                                            <div className="row">
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Nama PIC
                                                    </label>
                                                </div>      
                                                <div className="col-8 mb-2">
                                                    <input type="text" className="form-control bg-white border-light-gray rounded-3 fs-6_5"/>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Jabatan
                                                    </label>
                                                </div>      
                                                <div className="col-8 mb-2">
                                                    <input type="text" className="form-control bg-white border-light-gray rounded-3 fs-6_5"/>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Perusahaan
                                                    </label>
                                                </div>      
                                                <div className="col-8 mb-2">
                                                    <input type="text" className="form-control bg-white border-light-gray rounded-3 fs-6_5"/>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Alamat Perusahaan
                                                    </label>
                                                </div>      
                                                <div className="col-8 mb-2">
                                                    <textarea className="form-control rounded-3 fs-6_5" rows={4} />
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        No Handphone
                                                    </label>
                                                </div> 
                                                <div className="col-6 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                         Email
                                                    </label>
                                                </div>      
                                                <div className="col-6 mb-2">
                                                    <input type="text" className="form-control bg-white rounded-3 fs-6_5 border-light-gray"/>
                                                </div>
                                                <div className="col-6 mb-2">
                                                    <input type="email" className="form-control bg-white rounded-3 fs-6_5 border-light-gray"/>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <div className="form-check check-partnership">
                                                        <input className="form-check-input border-light-gray" type="checkbox" defaultValue id="flexCheckDefault" />
                                                        <label className="form-check-label fs-6_5 text-secondary fw-400" htmlFor="flexCheckDefault">
                                                            Bisa hubungi via WhatsApp
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-2 text-center mt-3">
                                                    <button className="btn bg-orange fw-400 text-white rounded-5 py-2 px-4">Hubungi Murapay</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>  
                                </div>
                            </div>
                        </div>         
                    </div>
                </div>
            </section>
      </div>
    )
}
export default Form_partner;