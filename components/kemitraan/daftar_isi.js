const DaftarIsi = () => {
  const handleScroll = (e) => {
    e.preventDefault();
    const target = e.target.getAttribute("href");
    const offsetTop = document.querySelector(target).offsetTop;
    scroll({
      top: offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <section id="daftar-isi" className="daftar-isi">
      <div className="container">
        <div className="row px-4">
          <div className="col-lg-8 offset-lg-2 bg-light-gray border-radius-54-top px-5 py-4 border-dark-blue">
            <h5 className="text-dark-blue my-2 fw-700 fs-3">Daftar Isi</h5>
          </div>
          <div className="col-lg-8 offset-lg-2 bg-light-gray border-radius-54-bottom px-5 py-4 border-dark-blue-bottom">
            <ol className="text-dark-blue fs-6 px-3">
              <li className="fw-400 text-dark-blue">
                <a href="#what-is-mitramura" className="text-dark-blue" onClick={handleScroll}>
                  Apa Itu MitraMura?
                </a>
              </li>
              <li className="fw-400">
                <a href="#level-kemitraan" className="text-dark-blue" onClick={handleScroll}>
                  Apa Saja Level Kemitraan di MitraMura?
                </a>
              </li>
              <li className="fw-400">
                <a href="#benefit" className="text-dark-blue" onClick={handleScroll}>
                  Bagaimana Benefit per Levelnya?
                </a>
              </li>
              <li className="fw-400">
                <a href="#xp-periode" className="text-dark-blue" onClick={handleScroll}>
                  Kapan Level dan XP akan Ditinjau?
                </a>
              </li>
              <li className="fw-400">
                <a href="#level-up" className="text-dark-blue" onClick={handleScroll}>
                  Bagaimana Cara untuk Naik Level?
                </a>
              </li>
              <li className="fw-400">
                <a href="#level-up" className="text-dark-blue" onClick={handleScroll}>
                  Apakah Level Bisa Turun?
                </a>
              </li>
              <li className="fw-400">
                <a href="#level-up" className="text-dark-blue" onClick={handleScroll}>
                  Apakah Bisa Mempertahankan Level?
                </a>
              </li>
              <li className="fw-400">
                <a href="#what-is-xp" className="text-dark-blue" onClick={handleScroll}>
                  Apa Itu XP?
                </a>
              </li>
              <li className="fw-400">
                <a href="#functional-xp" className="text-dark-blue" onClick={handleScroll}>
                  Apa Fungsi dari XP?
                </a>
              </li>
              <li className="fw-400">
                <a href="#get-xp" className="text-dark-blue" onClick={handleScroll}>
                  Bagaimana Cara Memperoleh XP?
                </a>
              </li>
              <li className="fw-400">
                <a href="#benefit-xp" className="text-dark-blue" onClick={handleScroll}>
                  Berapa Jumlah XP yang Diperoleh dari Transaksi Sukses?
                </a>
              </li>
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DaftarIsi;
