import Image from 'next/future/image';
import icon_1 from '../../public/img/icon/partnership-1.png';
import icon_2 from '../../public/img/icon/partnership-2.png';
import icon_3 from '../../public/img/icon/partnership-3.png';
const Goal = () => {
    return (
        <div>
            <section className="bg-blue-4 goal">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <h3 className="fs-3 fw-700 text-orange">Tujuan Program</h3>
                            <p className="text-white fw-400 mx-5">Tujuan yang ingin dicapai dengan adanya program kerja sama ini <br/> adalah sebagai berikut:</p>
                        </div>
                        <div className="col-12 mb-3">
                            <div className="border-radius-elips p-3 bg-gradient-blue">
                                <div className="row d-flex gx-5">
                                    <div className='col-3'>
                                        <Image src={icon_1} className='img-fluid' alt='img-goal-1' loading='lazy'/>
                                    </div>
                                    <div className='col-9 align-self-center'>
                                        <p className="text-white fw-400">Meningkatkan transaksi inner Dealer.</p>
                                    </div>
                                </div>
                            </div>
                        </div> 
                        <div className="col-12 mb-3">
                            <div className="border-radius-elips p-3 bg-gradient-blue-reverse">
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
                        </div>
                        <div className="col-12">
                            <div className="border-radius-elips p-3 bg-gradient-blue">
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
                        </div>                  
                    </div>
                </div>
            </section>
      </div>
    )
}
export default Goal;