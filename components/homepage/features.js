import Image from "next/image";
import icon1 from "../../public/img/new/icon fitur-29.png";
import icon2 from "../../public/img/new/icon fitur-30.png";
import icon3 from "../../public/img/new/icon fitur-31.png";
import icon4 from "../../public/img/new/icon fitur-32.png";
const Features = () => {
  return (
    <section id="features" className="features">
      <div className="container pt-5">
        <div className="section-title text-center" data-aos="fade-up">
          <h2 />
          <p>Fitur - fitur untuk Kembangkan Usahamu</p>
        </div>
        <div className="row" data-aos="fade-left">
          <div className="col-lg-3 col-md-4">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={50}>
              <Image src={icon1} className="img-fluid" width={48} height={48} alt="icon1" />
              <h3>
                <span>Mutasi Transaksi</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={100}>
              <Image src={icon2} className="img-fluid" width={48} height={48} alt="icon2" />
              <h3>
                <span>Transaksi Multi</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-md-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={150}>
              <Image src={icon3} className="img-fluid" width={48} height={48} alt="icon3" />
              <h3>
                <span>Mitra Mura</span>
              </h3>
            </div>
          </div>
          <div className="col-lg-3 col-md-4 mt-4 mt-lg-0">
            <div className="icon-box" data-aos="zoom-in" data-aos-delay={200}>
              <Image src={icon4} className="img-fluid" width={48} height={48} alt="icon4" />
              <h3>
                <span>Live Support</span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Features;
