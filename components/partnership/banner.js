const Banner = () => {
    const form_partner = () => {
        //scroll to specific element
        const element = document.getElementById('form_partner');
        element.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    }
    return (
        <section id="hero_ku_partner" className="section-2">
            <div className="container my-5">
                <div className="row d-flex d-none d-md-block">
                    <div className='col-12'>
                        <div>
                            <div className='row d-flex mb-3'>
                                <div className='col-8 align-self-center lh-sm'>
                                    <p><span className='fs-2 text-orange fw-700'>Program</span> <span className='fs-1 text-white fw-700'>Sinergi</span> <br/> 
                                    <span className='fs-2 text-white fw-700'>Peningkatan Transaksi</span><span className='text-orange fw-700 fs-2'> Inner</span><br/> 
                                    <span className='fs-2 text-orange fw-700'>Area</span> <span className='fs-1 text-orange fw-700'>Dealer</span> <span className='fs-1 fw-700 text-white'>Operator</span></p>
                                </div>
                            </div>
                            <div>
                                <span className='text-white'><small>
                                    program dikembangkan oleh : <span className='fw-700'>PT Pejuang Mandiri Kreatif (PT PMK)</span></small>
                                </span>
                            </div>
                            <div className='mt-3'>
                                <button className='btn bg-orange rounded-pill text-white fs-5' onClick={()=>form_partner()}>Daftar Sekarang</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='row d-block d-md-none'>
                    <div className='col-12 align-self-center text-center mt-3'>
                        <p>
                            <span className='fs-2 text-orange fw-700'>Program</span> <span className='fs-2 text-white fw-700'>Sinergi</span> <br/> 
                            <span className='fs-2 text-white fw-700'>Peningkatan Transaksi</span><span className='text-orange fw-700 fs-2'> Inner</span><br/> 
                            <span className='fs-2 text-orange fw-700'>Area</span> <span className='fs-2 text-orange fw-700'>Dealer</span> <span className='fs-2 fw-700 text-white'>Operator</span>
                        </p>
                        <div>
                            <span className='text-white'><small>
                                program dikembangkan oleh : <br/> <span className='fw-700'>PT Pejuang Mandiri Kreatif (PT PMK)</span></small>
                            </span>
                        </div>
                        <div className='mt-3'>
                                <button className='btn bg-orange rounded-pill text-white' onClick={()=>form_partner()}>Daftar Sekarang</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;
