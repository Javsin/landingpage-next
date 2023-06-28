import Modal from "react-modal";
import { useState, useEffect } from "react";
import NextImage from "next/future/image";
import Warning from "../../public/img/icon/hati.png";

Modal.setAppElement("#__next");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "30px",
    border: "none",
    zIndex: "9999",
    width: "90%", // Default width for mobile
    maxWidth: "650px", // Maximum width for desktop
    backgroundColor: "#fff",
    textAlign: "justify",
    padding: "0px",
  },
};
const ModalStatic = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = () => {
    if (getCookie("modal_closed") != "true") setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
    createCookie("modal_closed", "true", 60);
  };

  const createCookie = (name, value, minutes) => {
    if (minutes) {
      var date = new Date();
      let plus_30 = new Date(date.getTime() + minutes * 60000);
      plus_30 = plus_30.toGMTString();
      var expires = "; expires=" + plus_30;
    } else {
      var expires = "";
    }
    document.cookie = name + "=" + value + expires + "; path=/";
  };

  const getCookie = (cname) => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == " ") {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  };

  useEffect(() => {
    setTimeout(() => {
      openModal();
    }, 2000);

    const userAgent = typeof window.navigator === "undefined" ? "" : navigator.userAgent;

    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      setIsMobile(true);
    } else if (/Android/.test(userAgent)) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);
  return (
    <>
      <Modal id="yourAppElement" isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal" shouldCloseOnOverlayClick={false} shouldCloseOnEsc={false}>
        <div className="container-fluid">
          <div className="row mb-3">
            {/* Web */}
            <div className="col-3 d-none d-lg-flex justify-content-end align-items-center" style={{ backgroundColor: "#f0040c" }}>
              <NextImage src={Warning} alt="Warning" width={70} height={70} className="d-flex justify-content-center align-items-center d-block" />
            </div>
            <div className="col-6 d-none d-lg-block" style={{ backgroundColor: "#f0040c" }}>
              <div className="text-center text-white fw-bold py-3" style={{ fontSize: "3.5em" }}>
                WASPADA
              </div>
            </div>
            <div className="col-3 d-none d-lg-flex align-items-center" style={{ backgroundColor: "#f0040c" }}>
              <NextImage src={Warning} alt="Warning" width={70} height={70} className=" d-block" />
            </div>
            {/* Mobile */}
            <div className="col-3 d-lg-none d-flex justify-content-end align-items-center" style={{ backgroundColor: "#f0040c" }}>
              <NextImage src={Warning} alt="Warning" width={50} height={50} className="d-flex justify-content-center align-items-center d-block" />
            </div>
            <div className="col-6 d-block d-lg-none" style={{ backgroundColor: "#f0040c" }}>
              <h1 className="text-center text-white fw-bold py-3 mb-0">WASPADA</h1>
            </div>
            <div className="col-3 d-lg-none d-flex align-items-center" style={{ backgroundColor: "#f0040c" }}>
              <NextImage src={Warning} alt="Warning" width={50} height={50} className=" d-block" />
            </div>
          </div>

          <div className="row mb-2">
            {/* Web */}
            <div className="col-12 d-none d-lg-block" style={{ paddingRight: "8.5rem", paddingLeft: "8.5rem" }}>
              <h5 className="text-center rounded-4 fw-bold py-1" style={{ backgroundColor: "#cecece" }}>
                INFORMASI REKENING MURAPAY
              </h5>
            </div>
            {/* Mobile */}
            <div className="col-12 d-block d-lg-none px-3">
              <h6 className="text-center rounded-4 fw-bold py-1 fs-6" style={{ backgroundColor: "#cecece" }}>
                INFORMASI REKENING MURAPAY
              </h6>
            </div>
          </div>

          <div className="px-2">
            <div className={`row mb-2 gap-2 ${isMobile ? "fs-7" : "fs-6_6"}`}>
              {/* Web */}
              <div className="col-12">
                <p className="mb-0">
                  Seluruh nomor rekening bank atas nama <b style={{ color: "#f0040c" }}>PT PEJUANG MANDIRI KREATIF</b> hanya digunakan untuk <b>deposit saldo member aplikasi MuraPay.</b>
                </p>
              </div>
              <div className="col-12">
                <p className="mb-0">
                  Apabila Anda dihubungi oleh oknum yang meminta Anda untuk mentransfer sejumlah dana ke rekening <b style={{ color: "#f0040c" }}>PT PEJUANG MANDIRI KREATIF</b> untuk transaksi selain deposit saldo member, berikut ini adalah
                  langkah-langkah yang bisa Anda lakukan:
                </p>
              </div>
              <div className="col-12">
                <p className="mb-0">
                  Rekening resmi <b style={{ color: "#f0040c" }}>PT PEJUANG MANDIRI KREATIF</b> tidak pernah digunakan untuk transaksi lainnya seperti jual-beli barang elektronik, pembayaran cicilan pinjol, hadiah undian, hadiah giveaway,
                  dan sebagainya.
                </p>
              </div>
            </div>

            <div className={`row mb-2 gap-2 ${isMobile ? "fs-7" : "fs-6_6"}`}>
              <div className="col-12 ps-4">
                <div className="d-flex align-items-center gap-2">
                  <span>1.</span>
                  <span className="ps-1">
                    <b>Jangan transfer dana yang diminta oknum</b> tersebut untuk mencegah terjadinya kerugian finansial.
                  </span>
                </div>
              </div>
              <div className="col-12 ps-4">
                <div className="d-flex align-items-center gap-2">
                  <span>2.</span>
                  <span className="ps-1">
                    Segera hubungi tim CS kami melalui Whatsapp di nomor 0813-2970-1020 (atau klik{" "}
                    <a className="link-opacity-100 link-opacity-50-hover" href="http://wa.me/6281329701020" target="_blank">
                      <u>di sini</u>
                    </a>
                    ). Silahkan sampaikan kronologis yang lengkap agar tim kami bisa segera memblokir akun oknum tersebut.
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="row mb-2 pb-2">
            <div className="col-12 d-flex justify-content-center">
              <button className="btn btn-sm text-white rounded-5" onClick={closeModal} style={{ backgroundColor: "#f0040c" }}>
                <span className="fs-7 fw-700">YA, SAYA MENGERTI</span>
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalStatic;
