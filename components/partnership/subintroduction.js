import Image from "next/future/image";
import Image1 from "../../public/img/new/partnership-introduction.png";
const Subintroduction = () => {
    return (
        <>
            <section className="bg-light-gray">
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="rounded-5 bg-dark-blue p-4">
                                <p className="fw-500 text-white fs-medium d-md-block d-none">
                                    Kekhawatiran ini disebabkan oleh munculnya kebijakan untuk Industri telekomunikasi <br/>yang diatur dalam PMK 06/03 Tahun 2021 yang berlaku Efektif 1 Februari 2021.
                                </p>
                                <p className="fw-500 text-white d-block d-md-none fs-normal">
                                    Kekhawatiran ini disebabkan oleh munculnya kebijakan <br/> untuk Industri telekomunikasi yang diatur dalam PMK 06/03 Tahun 2021 yang berlaku Efektif 1 Februari 2021.
                                </p>
                                <p className="fs-medium fw-700 text-white mb-4 d-md-block d-none">
                                    Hal ini membuat Pemain Konter & Retail Pulsa membatasi pembelanjaannya <br/>
                                    ke Dealer Operator sebagai solusi untuk memitigasi resiko perpajakan <br/>
                                    bagi usaha mereka.
                                </p>
                                <p className="fw-700 text-white mb-4 d-block d-md-none fs-normal">
                                    Hal ini membuat Pemain Konter & Retail Pulsa membatasi pembelanjaannya <br/>
                                    ke Dealer Operator sebagai solusi untuk memitigasi resiko perpajakan <br/>
                                    bagi usaha mereka.
                                </p>
                                <a target="_blank" rel="noopener noreferrer" href="https://jdih.kemenkeu.go.id/download/9ac38d51-3b80-4dfd-a5e3-75a444bc49cc/6~PMK.03~2021Per.pdf" className="text-orange text-decoration-none d-none d-md-block">
                                    <small>
                                        Referensi: https://jdih.kemenkeu.go.id/download/9ac38d51-3b80-4dfd-a5e3-75a444bc49cc/6~PMK.03~2021Per.pdf
                                    </small>
                                </a>
                                <a target="_blank" rel="noopener noreferrer" href="https://jdih.kemenkeu.go.id/download/9ac38d51-3b80-4dfd-a5e3-75a444bc49cc/6~PMK.03~2021Per.pdf" className="text-orange text-decoration-none d-md-none d-block fs-7">
                                    Referensi: https://jdih.kemenkeu.go.id/download/9ac38d51-3b80-4dfd-a5e3-75a444bc49cc/6~PMK.03~2021Per.pdf
                                </a>
                            </div>
                        </div>
                        <div className="col-md-5 col-12">
                            <Image src={Image1} className="img-fluid" alt="" loading='lazy'/>
                        </div>
                        <div className="col-md-7 d-flex">
                            <p className="text-dark-blue fs-medium fw-500 align-self-center d-md-block d-none mb-0">
                                Hadirnya pasar jalur modern channel ini <b>berpengaruh</b> <br/> 
                                <b>pada market share dan omset inner area Dealer</b> <br/>
                                <b>Operator</b> karena konter & pemain retail berpindah <br/>
                                transaksi. Hal ini juga dapat <b>mempengaruhi</b> <br/>
                                <b>pencapaian kinerja Sales Inner dari </b><br/>
                                <b>Dealer Operator tersebut.</b>
                            </p>
                            <p className="text-dark-blue fw-500 align-self-center d-block d-md-none text-center mt-2 mb-0 fs-normal">
                                Hadirnya pasar jalur modern channel ini <b>berpengaruh</b> 
                                <b>pada market share dan omset inner area Dealer</b>
                                <b>Operator</b> karena konter & pemain retail berpindah
                                transaksi. Hal ini juga dapat <b>mempengaruhi</b>
                                <b>pencapaian kinerja Sales Inner dari </b>
                                <b>Dealer Operator tersebut.</b>
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Subintroduction