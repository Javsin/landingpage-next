import Image from 'next/future/image';
import icon_1 from '../../public/img/icon/partnership-1.png';
import icon_2 from '../../public/img/icon/partnership-2.png';
import icon_3 from '../../public/img/icon/partnership-3.png';
import icon_1_mobile from '../../public/img/icon/partnership-1-mobile.png';
import icon_2_mobile from '../../public/img/icon/partnership-2-mobile.png';
import icon_3_mobile from '../../public/img/icon/partnership-3-mobile.png';
const Goal = () => {
    return (
        <div>
            <section className="bg-blue-4 goal">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="fs-3 fw-700 text-orange">Tujuan Program</h3>
                            <p className="text-white fw-400 mx-5 d-none d-md-block">Tujuan yang ingin dicapai dengan adanya program kerja sama ini <br/> adalah sebagai berikut:</p>
                            <p className="text-white fw-400 d-md-none d-block fs-normal">Tujuan yang ingin dicapai dengan adanya program kerja sama ini adalah sebagai berikut:</p>
                        </div>
                        <div className="col-12 mb-3">
                            <div className="border-radius-elips p-3 bg-gradient-blue d-none d-md-block" data-aos="fade-right">
                                <div className="row d-flex gx-5">
                                    <div className='col-3'>
                                        <Image src={icon_1} className='img-fluid' alt='img-goal-1' loading='lazy'/>
                                    </div>
                                    <div className='col-9 align-self-center'>
                                        <p className="text-white fw-400">Meningkatkan transaksi inner Dealer.</p>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-block d-md-none'>
                                <div className='col-12 text-center'>
                                    <Image src={icon_1_mobile} className='img-fluid' alt='img-goal-1' loading='lazy' quality={85}/>
                                </div>
                                <div className='col-12 text-center'>
                                    <p className="text-white fw-400 fs-normal">Meningkatkan transaksi inner Dealer.</p>
                                </div>
                            </div>
                        </div> 
                        <div className="col-12 mb-3">
                            <div className="border-radius-elips p-3 bg-gradient-blue-reverse d-none d-md-block" data-aos="fade-left" data-aos-delay="300">
                                <div className="row d-flex gx-5">
                                    <div className='col-9 align-self-center'>
                                        <p className="text-white fw-400 text-end">Menyediakan pelayanan berupa transaksi <br/>
                                        cepat & harga bersaing bagi pengguna sesuai area.</p>
                                    </div>
                                    <div className='col-3'>
                                        <Image src={icon_2} className='img-fluid' alt='img-goal-2' loading='lazy'/>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-block d-md-none'>
                                <div className='col-12 text-center'>
                                    <Image src={icon_2_mobile} className='img-fluid' alt='img-goal-1' loading='lazy' quality={85}/>
                                </div>
                                <div className='col-12 text-center'>
                                    <p className="text-white fw-400 fs-normal">Menyediakan pelayanan berupa transaksi <br/>
                                    cepat & harga bersaing bagi pengguna sesuai area.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="border-radius-elips p-3 bg-gradient-blue d-md-block d-none" data-aos="fade-right" data-aos-delay="600">
                                <div className="row d-flex gx-5">
                                    <div className='col-3'>
                                        <Image src={icon_3} className='img-fluid' alt='img-goal-3' loading='lazy'/>
                                    </div>
                                    <div className='col-9 align-self-center cakupan-partnership'>
                                        <p className="text-white fw-400">Menambah pasar baru untuk meningkatkan transaksi inner di wilayah dealer.</p>
                                        <ul className='text-white ps-4'>
                                            <li>Reseller</li>
                                            <li>Pemain Jaringan</li>
                                            <li>End user (pengguna akhir)</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='row d-block d-md-none'>
                                <div className='col-12 text-center'>
                                    <Image src={icon_3_mobile} className='img-fluid' alt='img-goal-1' loading='lazy' quality={85}/>
                                </div>
                                <div className='col-12 text-center fs-normal'>
                                    <p className="text-white fw-400">Menambah pasar baru untuk meningkatkan transaksi inner di wilayah dealer.</p>
                                    <p className='text-white my-0'> <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-dot text-orange" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>Reseller</p>
                                    <p className='text-white my-0'> <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-dot text-orange" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>Pemain Jaringan</p>
                                    <p className='text-white my-0'> <svg xmlns="http://www.w3.org/2000/svg" width={25} height={25} fill="currentColor" className="bi bi-dot text-orange" viewBox="0 0 16 16">
                                        <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
                                    </svg>End user (pengguna akhir)</p>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            </section>
      </div>
    )
}
export default Goal;