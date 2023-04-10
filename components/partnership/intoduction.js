import Image from "next/future/image";
import Image1 from "../../public/img/new/partner_introduction_desktop.png";
import Image2 from "../../public/img/new/partner_introduction.png";
const Introduction = () => {
    return (
        <>
            <section className="bg-white introduction position-relative section-2 d-none d-md-block">
                <div className="container">
                    <div className="row d-flex">
                        <div className="col-12 text-start align-self-center" data-aos="fade-right">
                                <p className="mb-3 fw-700 d-none d-md-block fs-1 text-dark-blue lh-sm"> Tahukah Anda bahwa Saat ini</p>
                                <p className="my-0 text-orange fw-600 fs-medium">Konter & Pemain Retail memiliki kekhawatiran <br/>
                                    ketika berbelanja Pulsa, 
                                    Voucher & Kartu Perdana dengan  <br/>
                                    Dealer Operator langsung. <br/>
                                </p>
                        </div>          
                    </div>
                </div>
                <div className="position-absolute bottom-0 end-0" data-aos="fade-left" data-aos-delay="300">
                    <Image src={Image1} className="img-fluid float-end" alt="img-goal-1" loading="lazy" />
                </div>  
            </section>
            <section className="bg-white introduction d-md-none d-block">
                <div className="container">
                <div className="row d-flex">
                        <div className="col-12 text-center">
                            <Image src={Image2} className="" alt="img-goal-1" loading="lazy" height={240} width={240}  />
                        </div>
                        <div className="col-12 mt-4 text-center">
                            <p className="mb-3 fw-700 fs-3 text-dark-blue lh-sm"> Tahukah Anda bahwa <br/> Saat ini</p>
                            <p className="my-0 text-orange fw-600 fs-normal">Konter & Pemain Retail memiliki <br/>
                                kekhawatiran ketika berbelanja Pulsa, <br/>
                                Voucher & Kartu Perdana dengan  <br/>
                                Dealer Operator langsung. <br/>
                            </p>
                        </div>          
                    </div>
                </div>
            </section>
        </>
    )
}
export default Introduction;