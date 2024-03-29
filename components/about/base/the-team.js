import Image from "next/future/image";

import GroupImage from "../../../public/img/about/group.png";
import Kami from "../../../public/img/about/kami.png";

const TheTeam = () => {
  return (
    <div className="row py-3 py-lg-4">
      <div className="col-lg-6 col-12 mb-3 mb-lg-0" data-aos="fade-right">
        <div className="d-flex flex-column align-items-start justify-content-center gap-2 h-100">
          <Image src={GroupImage} alt="group" loading="lazy" className="img-fluid" />
        </div>
      </div>
      <div className="col-lg-6 col-12 fs-6_5" data-aos="fade-left">
        <div className="d-flex align-items-center justify-content-center h-100">
          <div className="row">
            <div className="col-12 fw-700 fs-1">
              <span className="text-dark-blue">THE </span>
              <span className="text-orange">TEAM.</span>
            </div>
            <div className="col-12 mb-3" style={{ textAlign: "justify" }}>
              <p>
                Kami membangun budaya perusahaan sebagai identitas dan komitmen untuk seluruh team kami. Suasana kerja yang nyaman dan fleksibel menciptakan kebebasan untuk team dalam berkreasi sehingga menumbuhkan rasa tanggung jawab yang
                tinggi serta hasil yang optimal.
              </p>
              <p>
                Bersama-sama kami menuangkan keahlian kami dalam membangun <strong>MuraPay</strong> untuk mewujudkan visi perusahaan kami bukan hanya untuk saat ini tetapi juga untuk generasi yang akan datang. Kami percaya bahwa sesuatu
                yang dikerjakan dengan sungguh-sungguh dan penuh keyakinan dalam penyelesaiannya akan menciptakan hasil yang dapat membawa dampak positif tidak hanya untuk kami tetapi juga untuk orang-orang yang kami layani dan berada di
                lingkungan kami.
              </p>
            </div>
            <div className="col-12 mb-4">
              <Image src={Kami} alt="kami" loading="lazy" className="img-fluid rounded-4" />
            </div>
            <div className="col-12">
              <div className="row fw-500 text-dark-blue">
                <div className="col-4">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="d-block lh-1">Established</span>
                    <span className="d-block fs-1 fw-700 lh-1">2021</span>
                    <span className="d-block text-center">
                      MuraPay resmi
                      <br />
                      berdiri pada 17 <br /> Agustus 2021.
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="d-block lh-1">Staff</span>
                    <span className="d-block fs-1 fw-700 lh-1">90+</span>
                    <span className="d-block text-center">
                      Hingga kini, 99 orang
                      <br /> terdaftar sebagai
                      <br /> karyawan resmi.
                    </span>
                  </div>
                </div>
                <div className="col-4">
                  <div className="d-flex flex-column justify-content-center align-items-center">
                    <span className="d-block lh-1">Outlet</span>
                    <span className="d-block fs-1 fw-700 lh-1">3</span>
                    <span className="d-block text-center">
                      Terdapat 3 outlet
                      <br /> resmi yang berada
                      <br /> di Kota Semarang.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TheTeam;
