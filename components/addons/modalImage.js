import Modal from "react-modal";
import { useState, useEffect } from "react";
import Image from "next/image";
import ImageKebutJuara from "../../public/img/kebut-juara.png";

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
    backgroundColor: `transparent`,
    textAlign: "justify",
    padding: "0px",
  },
};
const ModalImage = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    setTimeout(() => {
      openModal();
    }, 2000);

    const userAgent =
      typeof window.navigator === "undefined" ? "" : navigator.userAgent;

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
      <Modal
        id="yourAppElement"
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
        shouldCloseOnOverlayClick={true}
        shouldCloseOnEsc={true}
      >
        <div className="container-fluid">
          <div className="row mb-2 pb-2">
            <Image
              src={ImageKebutJuara}
              width={500}
              height={500}
              alt="Picture of the author"
              onClick={() =>
                window.open("https://kebutjuara.murapay.id/", "_blank")
              }
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default ModalImage;
