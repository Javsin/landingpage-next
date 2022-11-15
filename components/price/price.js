import { useEffect,useState } from "react";
const Price = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        let data_produk = [
            {
                kategori: "Pulsa",
                data: [
                    {
                        operator: "Indosat",
                        detail : [
                            {
                                kode : "IND10",
                                nama : "Indosat 10.000",
                                warga : "Rp. 10.000",
                                pedagang : "Rp. 9.000",
                                juragan : "Rp. 8.000",
                                saudagar : "Rp. 7.000",
                                bosbesar : "Rp. 6.000",
                                xp : 200
                            },
                            {
                                kode : "IND20",
                                nama : "Indosat 20.000",
                                warga : "Rp. 20.000",
                                pedagang : "Rp. 19.000",
                                juragan : "Rp. 18.000",
                                saudagar : "Rp. 17.000",
                                bosbesar : "Rp. 16.000",
                                xp : 200
                            }
                        ]
                    },
                    {
                        operator: "Telkomsel",
                        detail : [
                            {
                                kode : "TLK10",
                                nama : "Telkomsel 10.000",
                                warga : "Rp. 10.000",
                                pedagang : "Rp. 9.000",
                                juragan : "Rp. 8.000",
                                saudagar : "Rp. 7.000",
                                bosbesar : "Rp. 6.000",
                                xp : 200
                            }
                        ]
                    }
                ]
            },
            {
                kategori: "Paket Data",
                data: [
                    {
                        operator: "Telkomsel",
                        detail : [
                            {
                                kode : "TSEL10",
                                nama : "BRONET OWSEM 4GB | 1GB(3G/4G)+1GB(4G)+2GB(Games+Musik), 24 Jam |30 Hari| AOV+FREE FIRE+JOOX",
                                warga : "Rp. 10.000",
                                pedagang : "Rp. 9.000",
                                juragan : "Rp. 8.000",
                                saudagar : "Rp. 7.000",
                                bosbesar : "Rp. 6.000",
                                xp : 200
                            }
                        ]
                    }
                ]
            },
            {
                kategori: "Paket Telepon",
                data: [
                    {
                        operator: "Telkomsel",
                        detail : [
                            {
                                kode : "TSEL10",
                                nama : "TLP 30 menit ALL OPERATOR 24 Jam 7 hari",
                                warga : "Rp. 10.000",
                                pedagang : "Rp. 9.000",
                                juragan : "Rp. 8.000",
                                saudagar : "Rp. 7.000",
                                bosbesar : "Rp. 6.000",
                                xp : 200
                            }
                        ]
                    }
                ]
            },
        ]
        setData(data_produk);
    }, []);
    return (
        <section className="produk bg-white mt-5" id="produk">
            <div className="container">
                <h3 className="text-dark-blue fw-700 mb-4 text-center">Harga Produk</h3>
                <div className="d-none d-md-block">
                    <div className="tabcustom text-center">
                        <ul className="nav nav-pills justify-content-center" id="pills-tab" role="tablist">
                            {data.map((item, index) => {
                                return (
                                    <li key={index} className="nav-item flex-fill" role="presentation">
                                        <a className={"nav-link" + (index == 0 ? ' active' : '' )} id={'pills-'+index+'-tab'} data-bs-toggle="pill" data-bs-target={'#pills-'+index} role="tab" aria-controls={'pills-'+index} aria-selected="true">{item.kategori}</a>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                    <div className="tab-content" id="pills-tabContent">
                        {
                            data.map((item, index) => {
                                return (
                                    <div key={index} className={'tab-pane'+(index == 0 ? ' active show' : '')} id={'pills-'+index} role="tabpanel" aria-labelledby={`pills-${index}-tab`}>
                                        {
                                            item.data.map((item2, index2) => {
                                                return (
                                                <div className="mt-3" key={index2}>
                                                    <div className="rounded p-3 bg-gray">
                                                        <div className="row px-3">
                                                            <div className="col-4 offset-4 text-center mb-3">
                                                                <div className="bg-orange bg-orange rounded mx-5 py-1">
                                                                    <h5 className="fw-700 text-white my-0 py-1">{item2.operator}</h5>
                                                                </div>
                                                            </div>
                                                            <div className="col-12 bg-blue-2 rounded">
                                                                <table className="table">
                                                                    <thead className="bg-blue-2 text-orange fs-6_5">
                                                                        <tr>                                                                           
                                                                            <th scope="col" width="40%">Nama Produk</th>
                                                                            <th scope="col">Warga</th>
                                                                            <th scope="col">Pedagang</th>
                                                                            <th scope="col">Juragan</th>
                                                                            <th scope="col">Saudagar</th>
                                                                            <th scope="col">Bos Besar</th>
                                                                            <th scope="col">XP</th>
                                                                        </tr>
                                                                    </thead>
                                                                    <tbody className="text-white fs-6_5">
                                                                        {
                                                                            item2.detail.map((item3, index3) => {
                                                                                return (
                                                                                    <tr key={index3}>                                                                                       
                                                                                        <td>{item3.nama}</td>
                                                                                        <td>{item3.warga}</td>
                                                                                        <td>{item3.pedagang}</td>
                                                                                        <td>{item3.juragan}</td>
                                                                                        <td>{item3.saudagar}</td>
                                                                                        <td>{item3.bosbesar}</td>
                                                                                        <td>{item3.xp}</td>
                                                                                    </tr>
                                                                                )
                                                                            })
                                                                        }
                                                                    </tbody>   
                                                                </table>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                )
                                            })
                                        }
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="d-block d-md-none">
                    <div className="accordion accordion-flush custom-accordion" id="accordionFlushExample">
                        {
                            data.map((item, index) => {
                                return (
                                <div className="accordion-item mb-2" key={index}>
                                    <h2 className="accordion-header" id={'flush-heading'+index}>
                                    <button className={'accordion-button fw-700 text-orange'+(index > 0 ? ' collapsed' : '')} type="button" data-bs-toggle="collapse" data-bs-target={'#flush-collapse'+index} aria-expanded="false" aria-controls={'flush-collapse'+index}>
                                        <div className="row w-100 d-flex">
                                            <div className="col-12 align-self-center fs-6">
                                                {item.kategori}
                                            </div>
                                        </div>
                                    </button>
                                    </h2>
                                    <div id={'flush-collapse'+index} className={'accordion-collapse collapse'+ (index == 0 ? ' show' : '')} aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                        <div className="accordion-body pt-0 semi-dark px-0">
                                            {
                                                item.data.map((item2, index2) => {
                                                    return (
                                                    <div className="row py-3" key={index2}>
                                                        <div className="col-6 offset-3 text-center mb-2">
                                                            <div className="bg-orange py-0 rounded">
                                                                <h4 className="fs-6_5 fw-600 my-0 text-white py-2">{item2.operator}</h4>
                                                            </div>
                                                        </div>
                                                        {
                                                            item2.detail.map((item3, index3) => {
                                                                return (
                                                                <div className="col-12 mb-2" key={index3}>
                                                                    <div className="p-2 bg-light-gray rounded text-dark-blue fw-500">
                                                                        <div className="row">
                                                                            <div className="col-12 mb-1">
                                                                                <p className="my-0 fs-7 fw-600 text-dark-blue">{item3.nama}</p>
                                                                            </div>
                                                                            <div className="col-12">
                                                                                <div className="rounded bg-blue-2 py-2 table-scroll">
                                                                                    <table className="table">
                                                                                        <thead className="text-orange fs-7 fw-500">
                                                                                            <tr>
                                                                                                <th scope="col" className="fw-600">Warga</th>
                                                                                                <th scope="col">Pedagang</th>
                                                                                                <th scope="col">Juragan</th>
                                                                                                <th scope="col">Saudagar</th>
                                                                                                <th scope="col">Bos Besar</th>
                                                                                            </tr>
                                                                                        </thead>
                                                                                        <tbody className="text-white fs-7 fw-500">
                                                                                            <tr>
                                                                                                <th className="fw-400">{item3.warga}</th>
                                                                                                <td>{item3.pedagang}</td>
                                                                                                <td>{item3.juragan}</td>
                                                                                                <td>{item3.saudagar}</td>
                                                                                                <td>{item3.bosbesar}</td>
                                                                                            </tr>
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                            <div className="col-12 mt-2">
                                                                                <p className="my-0 fs-7 text-orange">(+{item3.xp}XP)</p>
                                                                            </div>
                                                                        </div>   
                                                                    </div>
                                                                </div>
                                                                )
                                                            })
                                                        }
                                                    </div>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Price