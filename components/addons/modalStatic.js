import Modal from 'react-modal';
import { useState,useEffect } from 'react';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: "10px",
        border : "none",
        zIndex: "9999",
        width: '90%', // Default width for mobile
        maxWidth: '650px', // Maximum width for desktop
        backgroundColor: "#fff",
        textAlign: "justify",
    },
};
const modalStatic = () => {
    const [modalIsOpen, setIsOpen] = useState(false);

    const openModal = () => {
        if (getCookie("modal_closed") != "true")
        setIsOpen(true);
    }

    const closeModal = () => {
        setIsOpen(false);
        createCookie("modal_closed", "true", 60)
    }

    const createCookie = (name, value, minutes) => {
        if (minutes) {
            var date = new Date();
            let plus_30 =  new Date(date.getTime()+ minutes*60000)
            plus_30 = plus_30.toGMTString()
            var expires = "; expires=" + plus_30;
        } else {
            var expires = "";
        }
        document.cookie = name + "=" + value + expires + "; path=/";
    }

    const getCookie = (cname) => {
        let name = cname + "=";
        let decodedCookie = decodeURIComponent(document.cookie);
        let ca = decodedCookie.split(';');
        for (let i = 0; i < ca.length; i++) {
            let c = ca[i];
            while (c.charAt(0) == ' ') {
                c = c.substring(1);
            }
            if (c.indexOf(name) == 0) {
                return c.substring(name.length, c.length);
            }
        }
        return "";
    }

    useEffect(() => {
        setTimeout(() => {
            openModal()
        }, 2000);
    }, [])
    return (
        <>
            <Modal
                id = "yourAppElement"
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
                shouldCloseOnOverlayClick={false}
                shouldCloseOnEsc={false}
            >
                <h5>INFORMASI REKENING MURAPAY</h5>
                <p className='fs-6_5'>
                    Seluruh nomor rekening bank atas nama <b>PT PEJUANG MANDIRI KREATIF</b> hanya digunakan untuk <b>deposit saldo member aplikasi MuraPay.</b>
                </p>
                <p className='fs-6_5'>
                    Rekening resmi <b>PT PEJUANG MANDIRI KREATIF</b>tidak pernah digunakan untuk transaksi lainnya seperti jual-beli barang elektronik, pembayaran cicilan pinjol, hadiah undian, hadiah giveaway, dan sebagainya.
                </p>
                <p className='fs-6_5'>
                    Apabila Anda dihubungi oleh oknum yang meminta Anda untuk mentransfer sejumlah dana ke rekening <b>PT PEJUANG MANDIRI KREATIF</b> untuk transaksi selain deposit saldo member, berikut ini adalah langkah-langkah yang bisa Anda lakukan:
                </p>
                <ol className='px-4'>
                    <li className='fs-6_5'>
                        <b>Jangan transfer dana yang diminta oknum</b> tersebut untuk mencegah terjadinya kerugian finansial.
                    </li>
                    <li className='fs-6_5'>
                        Segera hubungi tim CS kami melalui Whatsapp di nomor 0813-2970-1020 (atau klik di sini). Silahkan sampaikan kronologis yang lengkap agar tim kami bisa segera memblokir akun oknum tersebut.
                    </li>
                </ol>
                <button className='btn btn-sm btn-danger fw-bold' onClick={closeModal}>YA, SAYA MENGERTI</button>
            </Modal>
        </>
    )
};

export default modalStatic;