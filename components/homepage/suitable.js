
import Image from 'next/image';
import Image_true from 'next/future/image';
import image1 from '../../public/img/new/icon-33.png';
import image2 from '../../public/img/new/icon-34.png';
import image3 from '../../public/img/new/icon-35.png';
import image4 from '../../public/img/new/icon-36.png';
import image5 from '../../public/img/new/icon-37.png';
import image6 from '../../public/img/new/ibu ibu.png';
const Suitable = () => {
    return (
        <section className="suitable">
            <div className="container">
                <div className="row">
                    <div className="col-12 mb-3">
                    <p className="suit-title text-start d-none d-lg-block" data-aos="fade-down">Peluang usaha untuk segala usia</p>
                    <p className="suit-title text-center d-block d-lg-none" data-aos="fade-up">Peluang usaha untuk segala usia</p>
                    </div>
                    <div className="col-12 col-lg-7 d-flex flex-wrap flex-column flex-lg-row gap-3 justify-content-start" id="layout-suitable">
                    <div className="card shadow" style={{width: '47%',height:'fit-content'}} data-aos="zoom-in" data-aos-delay={100}>
                        <div className="card-body pt-1 px-1 pb-0">
                        <div className="row">
                            <div className="col-3">
                            <Image src={image1} className ="img-fluid" />
                            </div>
                            <div className="col-9 d-flex justify-content-start align-items-center ps-0">
                            <span className="fw-bold fs-6">Pelajar &amp; Mahasiswa</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card shadow" style={{width: '47%',height:'fit-content'}} data-aos="zoom-in" data-aos-delay={150}>
                        <div className="card-body pt-1 px-1 pb-0">
                        <div className="row">
                            <div className="col-3">
                            <Image src={image2} className ="img-fluid" />
                            </div>
                            <div className="col-9 d-flex justify-content-start align-items-center ps-0">
                            <span className="fw-bold fs-6">Ibu Rumah Tangga</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card shadow" style={{width: '47%',height:'fit-content'}} data-aos="zoom-in" data-aos-delay={200}>
                        <div className="card-body pt-1 px-1 pb-0">
                        <div className="row">
                            <div className="col-3">
                            <Image src={image3} className ="img-fluid" />
                            </div>
                            <div className="col-9 d-flex justify-content-start align-items-center ps-0">
                            <span className="fw-bold fs-6">Karyawan / Pekerja</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card shadow" style={{width: '47%',height:'fit-content'}} data-aos="zoom-in" data-aos-delay={250}>
                        <div className="card-body pt-1 px-1 pb-0">
                        <div className="row">
                            <div className="col-3">
                            <Image src={image4} className ="img-fluid" />
                            </div>
                            <div className="col-9 d-flex justify-content-start align-items-center ps-0">
                            <span className="fw-bold fs-6">Pemilik Warung &amp; Toko</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="card shadow" style={{width: '47%',height:'fit-content'}} data-aos="zoom-in" data-aos-delay={300}>
                        <div className="card-body pt-1 px-1 pb-0">
                        <div className="row">
                            <div className="col-3">
                             <Image src={image5} className ="img-fluid" />
                            </div>
                            <div className="col-9 d-flex justify-content-start align-items-center ps-0">
                            <span className="fw-bold fs-6">Driver Online</span>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="col-5 d-none d-lg-block">
                        <div className='position-relative h-100' style={{width:'85%'}}>
                            <Image_true src={image6} style={{width:'100%', height:'auto', left: '30%', top:'-45%' , position:'absolute'}} unoptimized={true}/>
                        </div>
                    </div>
                </div>
            </div>
      </section>
    );
}
export default Suitable