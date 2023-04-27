import Image from "next/image";
import Image1 from "../../public/img/new/partnership_hand.png";
const Sinergi = () => {
    const form_partner = () => {
        //scroll to specific element
        const element = document.getElementById('form_partner');
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
    return (
        <>
        <section className="bg-dark-blue position-relative">
            <div className="container">
                <div className="row">
                    <div className="col-md-4 col-8 offset-2 mb-3 mb-md-0 offset-md-0">
                        <Image src={Image1} className="img-fluid" alt="img-goal-1" loading="lazy" />
                    </div>
                    <div className="col-md-7 col-12 d-flex align-items-center">
                        <div className="bg-orange rounded-5 text-white p-md-5 p-0">
                            <div className="fs-medium d-none d-md-block text-start">
                                Melalui Program Sinergi Peningkatan Transaksi Inner Area Dealer
                                Operator ini, kami harapkan dapat berkolaborasi dengan Para Dealer
                                untuk Menghasilkan Solusi yang lebih Efektif & Relevan bagi Market
                                saat ini.
                            </div>
                            <div className="p-4 d-block d-md-none fs-normal text-center">
                                Melalui Program Sinergi Peningkatan Transaksi Inner Area Dealer 
                                Operator ini, kami harapkan dapat berkolaborasi dengan Para Dealer 
                                untuk Menghasilkan Solusi yang lebih Efektif & Relevan bagi Market 
                                saat ini.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="bg-blue-7 text-center py-0">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="py-4">
                            <button className="btn bg-orange rounded-pill px-md-5 py-md-3 p-2 fw-600 text-white fs-medium" onClick={()=>form_partner()}>Daftar Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}

export default Sinergi