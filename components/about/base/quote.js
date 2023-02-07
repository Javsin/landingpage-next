import Image from "next/future/image";

import QuoteImage from "../../../public/img/about/quote.png";
import QuoteIcon from "../../../public/img/about/quote_icon_2.png";

const Quote = () => {
  return (
    <>
      <div className="row py-3 py-lg-4">
        <div className="col-12 col-lg-6" data-aos="fade-right">
          <div className="d-flex flex-column align-items-start justify-content-center gap-2 ms-1 ms-lg-5 h-100">
            <Image src={QuoteIcon} alt="quote icon" loading="lazy" className="img-fluid" />
            <div className="font-adobe fw-500 fs-3 text-dark-blue">
              <span className="d-lg-block d-inline">There’s no magic formula for great company culture. The key is just to treat your staff,</span>
              <span className="d-lg-block d-inline"> Just how you would like to be treated.</span>
            </div>
            <span className="mb-3 mb-lg-0">-Richard Branson</span>
          </div>
        </div>
        <div className="col-12 col-lg-6" data-aos="fade-left">
          <Image src={QuoteImage} alt="quote" loading="lazy" className="img-fluid rounded-46-x" />
        </div>
      </div>
    </>
  );
};

export default Quote;
