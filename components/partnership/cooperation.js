const Cooperation = () => {
    return (
        <div>
            <section className="bg-blue-5 introduction">
                <div className="container">
                    <div className="row gx-5">
                        <div className="col-12 text-center mb-2 mb-md-5">
                            <h3 className="fs-3 fw-700 text-orange">Bentuk Kerja Sama</h3>
                        </div>
                        <div className="col-xxl-4 offset-xxl-2 col-md-5 offset-md-1 col-12 mb-3">
                            <div className="h-100 bg-blue-6 border-radius-1">
                                <div className="bg-gradient-white border-radius-1-top p-2 text-center">
                                    <p className="my-0 text-dark-blue fw-500 fs-normal">
                                        Optimalisasi produk inner <br/>
                                        milik Dealer
                                    </p>
                                </div>
                                <div className="bg-blue-6 border-radius-1-bottom p-2 text-center">
                                    <p className="my-4 text-white fw-300 fs-6_5"> Produk hanya dapat diakses oleh member <br/>yang berada di area Dealer.</p>
                                    <hr className="mx-4" style={{border: '1px solid #4B598E',opacity:10}}/>
                                    <p className="my-4 text-white fw-300 fs-6_5"> Untuk setiap transaksi produk Dealer,sistem <br/>akan otomatis mengarahkan ke stok Dealer</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-xxl-4 col-md-5 col-12 mb-3">
                            <div className="h-100 bg-blue-6 border-radius-1">
                                <div className="bg-gradient-white border-radius-1-top p-2 text-center">
                                    <p className="my-0 text-dark-blue fw-500 fs-normal">
                                        Pengembangan jaringan Tim<br/>
                                        Sales Dealer
                                    </p>
                                </div>
                                <div className="bg-blue-6 border-radius-1-bottom p-2 text-center">
                                    <p className="my-4 mx-3 text-white fw-300 fs-6_5">Sales Dealer dapat menggunakan
                                        kode referral
                                        yang dapat di-custom untuk mengembangkan
                                        jaringannya dan meningkatkan transaksi
                                        inner.
                                    </p>                
                                    <p className="my-2 text-white fw-300 fs-6_5"></p>
                                </div>
                            </div>
                        </div>              
                    </div>
                </div>
            </section>
      </div>
    )
}
export default Cooperation;