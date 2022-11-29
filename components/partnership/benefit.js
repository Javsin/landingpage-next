import Image from 'next/future/image';
import Circle from '../../public/img/new/fasdo.png'
import Circle_2 from '../../public/img/new/multi_saldo.png'
import Circle_3 from '../../public/img/new/jalur_komunikasi.png'
import Circle_4 from '../../public/img/new/kerjasama.png'
import Circle_5 from '../../public/img/new/media_promosi.png'
const Benefit = () => {
    return (
        <div>
            <section className="bg-dark-blue introduction">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mb-md-5 mb-3">
                            <h3 className="fs-3 fw-700 text-orange">Benefit Program untuk Dealer</h3>
                        </div>            
                    </div>
                    <div className="row">
                        <div className="col-md-4 col-12 mb-4 mb-md-5 d-flex justify-content-center">
                            <div className="card-sangkar-burung p-3 text-center h-100">
                                <Image src={Circle} className="rounded-circle img-fluid" alt='img-benefit-1' loading='lazy'/>
                                <h5 className='my-3 text-orange fw-500 mt-3 d-md-block d-none'>
                                  Fasilitas Saldo <br/>Talangan
                                </h5>
                                <h5 className='my-3 text-orange fw-500 mt-3 fs-6 d-block d-md-none'>
                                  Fasilitas Saldo <br/>Talangan
                                </h5>
                                <p className='my-0 text-white fw-300 fs-6_5 mb-3'>
                                    Fasilitas Saldo Talangan untuk mendukung kebutuhan deposit
                                    saldo MuraPay bagi Tim Sales
                                    Dealer yang lebih mudah.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mb-4 mb-md-5 d-flex justify-content-center">
                            <div className="card-sangkar-burung p-3 text-center h-100">
                                <Image src={Circle_2} className="rounded-circle img-fluid" alt='img-benefit-2' loading='lazy'/>
                                <h5 className='my-3 text-orange fw-500 mt-3 d-none d-md-block'>
                                     Multi Saldo
                                </h5>
                                <h5 className='my-3 text-orange fw-500 mt-3 fs-6 d-block d-md-none'>
                                     Multi Saldo
                                </h5>
                                <p className='my-0 text-white fw-300 fs-6_5 mb-3 pt-xxl-4 pt-0'>
                                    Pengguna dari jaringan Tim Sales Dealer akan mendapatkan 2 (dua) jenis saldo: Saldo Umum
                                    dan
                                    Saldo Dealer.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mb-4 mb-md-5 d-flex justify-content-center">
                            <div className="card-sangkar-burung p-3 text-center h-100">
                                <Image src={Circle_3} className="rounded-circle img-fluid" alt='img-benefit-3' loading='lazy'/>
                                <h5 className='my-3 text-orange fw-500 mt-3 d-none d-md-block'>
                                    Jalur Komunikasi <br/> Khusus
                                </h5>
                                <h5 className='my-3 text-orange fw-500 mt-3 fs-6 d-block d-md-none'>
                                    Jalur Komunikasi <br/> Khusus
                                </h5>
                                <p className='my-0 text-white fw-300 fs-6_5 mb-3'>
                                    Dapatkan support layanan dan
                                    transaksi khusus bagi Dealer
                                    melalui jalur komunikasi eksklusif.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 offset-md-2 mb-4 mb-md-5 d-flex justify-content-center">
                            <div className="card-sangkar-burung p-3 text-center h-100">
                                <Image src={Circle_4} className="rounded-circle img-fluid" alt='img-benefit-4' loading='lazy'/>
                                <h5 className='my-3 text-orange fw-500 mt-3 d-none d-md-block'>
                                    Kerja Sama Eksklusif <br/> di Area Dealer
                                </h5>
                                <h5 className='my-3 text-orange fw-500 mt-3 fs-6 d-block d-md-none'>
                                    Kerja Sama Eksklusif <br/> di Area Dealer
                                </h5>
                                <p className='my-0 text-white fw-300 fs-6_5 mb-3'>
                                    Untuk menghindari conflict of
                                    interest, MuraPay tidak akan bekerjasama dengan dealer 
                                    operator lain di area yang sama.
                                </p>
                            </div>
                        </div>
                        <div className="col-md-4 col-12 mb-4 mb-md-5 d-flex justify-content-center">
                            <div className="card-sangkar-burung p-3 text-center h-100">
                                <Image src={Circle_5} className="rounded-circle img-fluid" alt='img-benefit-5' loading='lazy'/>
                                <h5 className='my-3 text-orange fw-500 mt-3 d-none d-md-block'>
                                    Dukungan Materi<br/> Promosi untuk Tim Sales
                                </h5>
                                <h5 className='my-3 text-orange fw-500 mt-3 fs-6 d-block d-md-none'>
                                    Dukungan Materi<br/> Promosi untuk Tim Sales
                                </h5>
                                <p className='my-0 text-white fw-300 fs-6_5 mb-3'>
                                    Dapatkan support layanan dan
                                    transaksi khusus bagi Dealer
                                    melalui jalur komunikasi eksklusif.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
      </div>
    )
}
export default Benefit;