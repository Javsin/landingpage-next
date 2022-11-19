import React,{ useState,useRef } from "react";
import axios from "axios";
const Form_partner = () => {
    const checkbox = useRef(null);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [position, setPosition] = useState("");
    const [company, setCompany] = useState("");
    const [address, setAddress] = useState("");
    const [whatsApp, setWhatsApp] = useState(false);
    const [loading, setLoading] = useState(false);
    const [showmessage, setShowmessage] = useState(false);
    const [stringmessage, setStringmessage] = useState("");
    const send = () => {
        setLoading(true);
        axios.post (`${process.env.api}partner`, {
            name: name,
            email: email,
            phone: phone,
            position: position,
            company: company,
            address: address,
            whatsApp:  Boolean(whatsApp)
        }).then((response) => {
            response.data.status === 200 ? setStringmessage("Penawaran berhasil di kirim") : setStringmessage("Gagal mengirim penawaran, hubungi kami lewat whatsapp");
            setLoading(false);
            reset_form();
            setShowmessage(true);
            close_message_time();
        }
        ).catch((error) => {
            console.log(error);
        });
    };
    const reset_form = () => {
        setName("");
        setEmail("");
        setPhone("");
        setPosition("");
        setCompany("");
        setAddress("");
        setWhatsApp(false);
        checkbox.current.checked = false;
    };
    const close_message_time = () => {
        setTimeout(() => {
            setShowmessage(false);
        }, 2000);
    };
    const close_message = () => {
        setShowmessage(false);
    };
    return (
        <div>
            <section className="introduction" id="form_partner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="bg-blue-3 rounded-5 mx-0 mx-md-5 py-0 position-relative">
                                <div className="row d-flex">
                                    <div className="col-md-5 col-12 text-md-end text-center align-self-center py-4 py-md-0">
                                        <h3 className="fs-3 fw-700 text-orange d-md-block d-none">Jadilah Partner Dealer Kami!</h3>
                                        <h3 className="fs-normal fw-700 text-orange d-block d-md-none">Jadilah Partner Dealer Kami!</h3>
                                        <p className="text-white fw-500 fs-normal">
                                            Silahkan isi form berikut ini untuk <br/>
                                            penjelasan lebih lanjut mengenai program <br/>
                                            Sinergi Peningkatan Transaksi Inner.
                                        </p>
                                        <p className="text-orange fw-500 fs-normal my-0">
                                            Tim kami akan segera menghubungi Anda.
                                        </p>
                                    </div>
                                    <div className="col-md-7 col-12">
                                        <div className="rounded-5 bg-light-gray p-4">
                                            {
                                                showmessage ? (
                                                    <div class="bg-orange rounded text-white p-2 mb-3 fs-6">
                                                        <div className="row">
                                                            <div className="col-10">
                                                                {stringmessage}
                                                            </div>
                                                            <div className="col-2 text-end">
                                                                <svg xmlns="http://www.w3.org/2000/svg" width={26} height={26} fill="currentColor" className="bi bi-x" viewBox="0 0 16 16" style={{cursor:'pointer'}} onClick={()=>close_message()}>
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                                                                </svg>
                                                            </div>
                                                        </div>
                                                    </div>
                                                ) : null
                                            }
                                            <div className="row">
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Nama PIC
                                                    </label>
                                                </div>      
                                                <div className="col-md-8 col-12 mb-2">
                                                    <input type="text" value={name} onChange={e => setName(e.target.value)} className="form-control bg-white border-light-gray rounded-3 fs-6_5"/>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Jabatan
                                                    </label>
                                                </div>      
                                                <div className="col-md-8 col-12 mb-2">
                                                    <input type="text" value={position} onChange={e => setPosition(e.target.value)} className="form-control bg-white border-light-gray rounded-3 fs-6_5"/>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Perusahaan
                                                    </label>
                                                </div>      
                                                <div className="col-md-8 col-12 mb-2">
                                                    <input type="text" value={company} onChange={e => setCompany(e.target.value)} className="form-control bg-white border-light-gray rounded-3 fs-6_5"/>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <label className="text-secondary fs-6_5 fw-400">
                                                        Alamat Perusahaan
                                                    </label>
                                                </div>      
                                                <div className="col-md-8 col-12 mb-2">
                                                    <textarea value={address} onChange={e => setAddress(e.target.value)} className="form-control rounded-3 fs-6_5" rows={4} />
                                                </div>
                                                <div className="row pe-0">
                                                    <div className="col-12 col-md-6 mb-2 order-1 order-md-1">
                                                        <label className="text-secondary fs-6_5 fw-400">
                                                            No Handphone
                                                        </label>
                                                    </div> 
                                                    <div className="col-6 mb-2 order-3 order-md-2">
                                                        <label className="text-secondary fs-6_5 fw-400">
                                                            Email
                                                        </label>
                                                    </div>      
                                                    <div className="col-md-6 col-12 mb-2 order-2 order-md-3 pe-0">
                                                        <input type="text" value={phone} inputMode="numeric" onKeyPress={(event) => {if (!/[0-9]/.test(event.key)) {event.preventDefault();}}} onChange={e => {setPhone(e.target.value)}} className="form-control bg-white rounded-3 fs-6_5 border-light-gray"/>
                                                    </div>
                                                    <div className="col-md-6 col-12 mb-2 order-last pe-0">
                                                        <input type="email" value={email} onChange={e => setEmail(e.target.value)} className="form-control bg-white rounded-3 fs-6_5 border-light-gray"/>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-2">
                                                    <div className="form-check check-partnership">
                                                        <input value={whatsApp} ref={checkbox} onChange={e => setWhatsApp(e.target.value)} className="form-check-input border-light-gray" type="checkbox" defaultValue id="flexCheckDefault" />
                                                        <label className="form-check-label fs-6_5 text-secondary fw-400" htmlFor="flexCheckDefault">
                                                            Bisa hubungi via WhatsApp
                                                        </label>
                                                    </div>
                                                </div>
                                                <div className="col-12 mb-2 text-center mt-3">
                                                    <button onClick={()=>send()} className="btn bg-orange fw-400 text-white rounded-5 py-2 px-4" disabled={loading}>Hubungi Murapay 
                                                        {loading && <span className="spinner-border spinner-border-sm ms-2" role="status" aria-hidden="true"></span>}
                                                    </button>
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