import Image from 'next/future/image';
import image1 from '../../public/img/icon/partnership1_solution.png';
import image2 from '../../public/img/icon/partnership2_solution.png';
import image3 from '../../public/img/icon/partnership3_solution.png';
const Benefit = () => {
    return (
        <div>
            <section className="bg-light-gray introduction">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-md-5 mb-3">
                            <h3 className="fs-2 fw-700 text-orange d-none d-md-block">Fasilitas yang Kami Berikan:</h3>
                            <h3 className="fs-medium fw-700 text-orange d-block d-md-none">Fasilitas yang Kami Berikan:</h3>
                        </div>            
                    </div>
                    <div className="row">
                        <div className="col-md-1 offset-md-3 col-4 offset-4 text-center d-flex align-items-center">
                            <Image src={image1} alt="image1" className="img-fluid" loading='lazy' />
                        </div>
                        <div className="col-md-6 col-12 text-center text-md-start">
                            <p className='fw-600 fs-4 text-dark-blue mt-2 mb-1 d-none d-md-block'>A.Multi Saldo</p>
                            <p className='fw-600 fs-6 text-dark-blue mt-2 mb-1 d-block d-md-none'>A.Multi Saldo</p>
                            <p className='fw-500 text-dark-blue d-md-block d-none'>Sistem kami menyediakan 2 saldo terpisah yang dapat digunakan <br/>oleh pengguna dalam bertransaksi produk milik Dealer Operator</p>
                            <p className='fw-500 text-dark-blue d-block d-md-none fs-normal'>Sistem kami menyediakan 2 saldo  terpisah  yang dapat digunakan oleh pengguna dalam bertransaksi produk milik Dealer Operator</p>
                        </div>
                        <div className="col-md-1 offset-md-3 col-4 offset-4 text-center d-flex align-items-center">
                            <Image src={image2} alt="image1" className="img-fluid" loading='lazy' />
                        </div>
                        <div className="col-md-6 col-12 text-center text-md-start">
                            <p className='fw-600 fs-4 text-dark-blue mt-2 mb-1 d-none d-md-block'>B.Jalur Komunikasi Eksklusif</p>
                            <p className='fw-600 fs-6 text-dark-blue mt-2 mb-1 d-block d-md-none'>B.Jalur Komunikasi Eksklusif</p>
                            <p className='fw-500 text-dark-blue d-md-block d-none'>Untuk menjaga arus komunikasi dan kualitas pelayanan yang baik,
                                MuraPay menyediakan media komunikasi khusus dengan Dealer<br/>
                                Operator untuk membantu mengatasi dengan baik kendala<br/>
                                operasional maupun komplain yang dapat terjadi
                            </p>
                            <p className='fw-500 text-dark-blue d-block d-md-none fs-normal'>Untuk menjaga arus komunikasi dan 
                                kualitas pelayanan yang baik,MuraPay menyediakan media komunikasi 
                                khusus dengan Dealer Operator untuk membantu mengatasi dengan baik kendala
                                operasional maupun komplain yang dapat terjadi
                            </p>
                        </div>
                        <div className="col-md-1 offset-md-3 col-4 offset-4 text-center d-flex align-items-center">
                            <Image src={image3} alt="image1" className="img-fluid" loading='lazy' />
                        </div>
                        <div className="col-md-6 col-12 text-center text-md-start">
                        <p className='fw-600 fs-4 text-dark-blue mt-2 mb-1 d-none d-md-block'>C.Training Product Knowledge</p>
                            <p className='fw-600 fs-6 text-dark-blue mt-2 mb-1 d-block d-md-none'>C.Training Product Knowledge</p>
                            <p className='fw-500 text-dark-blue d-md-block d-none'>Dealer Operator akan mendapatkan modul dan penjelasan<br/>
                                penggunaan fitur yang ada didalam aplikasi MuraPay
                            </p>
                            <p className='fw-500 text-dark-blue d-block d-md-none fs-normal'>Dealer Operator akan mendapatkan modul dan penjelasan
                                penggunaan fitur yang ada didalam aplikasi MuraPay
                            </p>
                        </div>
                    </div>
                </div>
            </section>
    </div>
    )
}
export default Benefit;