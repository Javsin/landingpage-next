import Image from 'next/image'
import image1 from '../../public/img/new/thumbnail.jpg'
import image2 from '../../public/img/new/mildstone.png'
import styles from '../../styles/addons.module.css'
const LevelMitra = (props) => {
    return (
        <div>
            <section id="level-kemitraan" className="level-kemitraan">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 offset-lg-3 d-flex justify-content-center px-0">
                    <a onClick={props.openBootstrapModal} className="youtube">
                        <Image src = {image1} className={styles.thumbnail_video} unoptimized={true}/>
                    </a>
                </div>
                <div className="col-12 text-center pt-5">
                    <h4 className="text-orange fs-3 fw-700">Apa Saja Level Kemitraan di MitraMura?</h4>
                </div>
                <div className="col-10 offset-1">
                    <p className="fs-6 text-dark-blue fw-400 text-center mb-0">
                    Ada 5 (lima) level kemitraan yang bisa Mitra tingkatkan untuk meraih keuntungan maksimal
                    dengan cara memenuhi persyaratan minimum XP yang sudah ditentukan di tiap levelnya.
                    </p>
                </div>
                </div>
            </div>
            </section>
            <section id="sub-level-kemitraan" className="sub-level-kemitraan bg-dark-blue">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <Image src = {image2}/>
                    </div>
                </div>
            </div>
            </section>
      </div>
    )
}
export default LevelMitra;