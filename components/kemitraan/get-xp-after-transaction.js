import Link from "next/link";
const get_xp_after_transaction = () => {
    return (
        <div>
        <section className="benefit-xp bg-dark-blue" id="benefit-xp">
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h3 className="fs-2 text-orange fw-700">
                  Berapa Jumlah XP yang Diperoleh <br />
                  dari Transaksi Sukses?
                </h3>
              </div>
              <div className="col-10 offset-1">
                <div className="bg-white py-3 px-0" style={{borderRadius: '15px'}}>
                  <table className="w-100 bg-white">
                    <tbody>
                      <tr>
                        <th rowSpan={2} className="text-center text-dark-blue fs-6 fw-600">Kategori <br /> Produk</th>
                        <th colSpan={6} className="fw-600 pb-2 text-dark-blue fs-6 text-center bg-white">Denom dan XP</th>
                      </tr>
                      <tr>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">Denom</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">XP</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">Denom</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">XP</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">Denom</div>
                        </th>
                        <th className="bg-dark-blue">
                          <div className="bg-orange rounded-pill fw-500 fs-6 m-2 text-center text-white">XP</div>
                        </th>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-6 fw-500">
                          <div className="bg-dark-blue rounded-pill fw-400 fs-6 m-2 text-center text-white py-1">PULSA</div>
                        </td>
                        <td className="text-center text-dark-blue fs-6 fw-500">≤ 10.000</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray">+10 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500"> 10.001 <br /> s.d <br /> 99.999</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray">+50 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500"> ≥ 100.000 </td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray">+100 XP</td>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray" />
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">Harga Jual</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">XP</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">Harga Jual</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">XP</div>
                        </th>
                        <th className="bg-dark-blue border-light-gray-right">
                          <div className="bg-orange rounded-pill fw-400 fs-6 m-2 text-center text-white">Harga Jual</div>
                        </th>
                        <th className="bg-dark-blue">
                          <div className="bg-orange rounded-pill fw-500 fs-6 m-2 text-center text-white">XP</div>
                        </th>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-400 fs-6 m-2 text-center text-white py-1">VOUCHER GAME</div>
                        </td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">≤ 10.000</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+50 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom"> 10.001 <br /> s.d <br /> 99.999</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+100 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom"> ≥ 100.000 </td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+200 XP</td>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-7 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-400 fs-7 m-2 text-center text-white py-1">VOUCHER DIGITAL &amp;<br />LIVE STREAMING</div>
                        </td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">≤ 10.000</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+50 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom"> 10.001 <br /> s.d <br /> 99.999</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+100 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom"> ≥ 100.000 </td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+200 XP</td>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-7 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-400 fs-7 m-2 text-center text-white py-1">PAKET DATA,<br />TELEPON &amp; SMS</div>
                        </td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">≤ 10.000</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+50 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom"> 10.001 <br /> s.d <br /> 99.999</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+200 XP</td>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom"> ≥ 100.000 </td>
                        <td className="text-center text-dark-blue fs-6 fw-500 bg-gray border-light-gray-bottom">+500 XP</td>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-500 fs-6 m-2 text-center text-white py-1">PLN TOKEN</div>
                        </td>
                        <td colSpan={6} className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-500 fs-6 m-2 text-center text-white py-1">FLAT + 50XP ALL DENOM</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-7 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-500 fs-7 m-2 text-center text-white py-1">DOMPET DIGITAL<br />&amp; EMONEY</div>
                        </td>
                        <td colSpan={6} className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-500 fs-6 m-2 text-center text-white py-1">FLAT + 80XP ALL DENOM</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-400 fs-6 m-2 text-center text-white py-1">TRANSFER UANG</div>
                        </td>
                        <td colSpan={6} className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-500 fs-6 m-2 text-center text-white py-1">FLAT + 80XP ALL DENOM</div>
                        </td>
                      </tr>
                      <tr>
                        <td className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-500 fs-6 m-2 text-center text-white py-1">PPOB</div>
                        </td>
                        <td colSpan={6} className="text-center text-dark-blue fs-6 fw-500 border-light-gray-bottom">
                          <div className="bg-dark-blue rounded-pill fw-500 fs-6 m-2 text-center text-white py-1">FLAT + 150XP ALL DENOM</div>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="mura_koin" className="mura_koin bg-blue">
          <div className="col-4 offset-4 d-flex mt-3 px-5">
            <Link href="/murakoin">
              <a className="mura-koin w-100 bg-orange text-white fw-700 btn border-radius-24 justify-content-center py-3 fs-4 mx-5">Apa itu MuraKoin?</a>
            </Link>
          </div>
        </section>
      </div>
    )
}

export default get_xp_after_transaction