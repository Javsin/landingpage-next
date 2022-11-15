import Image from 'next/image'
import image1 from '../../public/img/new/thumbnail.jpg'
import styles from '../../styles/addons.module.css'
const PeerReward = (props) => {
    return (
    <section className="peer-reward bg-dark-blue" id="peer-reward">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <h3 className="fs-3 fw-700 text-orange">
                Apa itu Peer Reward?
              </h3>
              <p className="text-dark-blue fw-400 text-white fs-6">
                Peer Reward adalah MuraKoin yang diperoleh Upline jika Upline dan Downline sama-sama berada di level Bos Besar.</p>
              <p className="text-orange fw-700 fs-6">Bagaimana Ketentuan Peer Reward ?</p>
              <div className="row gx-0 d-flex">
                <div className="col-1 mb-2">
                  <p className="fs-6 circle4 bg-orange text-white my-0 align-items-center text-center">A</p>
                </div>
                <div className="col-11 mb-2 align-self-center">
                  <p className="fs-6 text-white ms-2 my-0">
                    Jumlah komisi Peer Reward yang Upline terima adalah 5% dari total MuraKoin yang diperoleh Downline dalam 1 (satu) bulan.
                  </p>
                </div>
                <div className="col-1 mb-2 align-self-center">
                  <p className="fs-6 circle4 bg-orange text-white my-0 text-center">B</p>
                </div>
                <div className="col-11 mb-2">
                  <p className="fs-6 text-white ms-2 align-self-center my-0">
                    Peer Reward dalam satu bulan dibagikan pada tanggal 10 di bulan berikutnya (contoh: Peer Reward 1-31 Januari dibagikan di tanggal 10 Februari).
                  </p>
                </div>
                <div className="col-1 align-self-center">
                  <p className="fs-6 circle4 bg-orange text-white my-0 text-center">C</p>
                </div>
                <div className="col-11">
                  <p className="fs-6 text-white ms-2 align-self-center my-0">
                    Pembagian Peer Reward tidak mengurangi MuraKoin milik Downline.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-6 px-5 pb-5">
                <a onClick={props.openBootstrapModal} className="youtube">
                    <Image src = {image1} className={styles.thumbnail_video} unoptimized={true}/>
                </a>
            </div>
          </div>
        </div>
    </section>
    )
}
export default PeerReward;