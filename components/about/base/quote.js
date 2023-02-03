import Image from "next/future/image";

import QuoteImage from "../../../public/img/about/quote.png";
import QuoteIcon from "../../../public/img/about/quote_icon_2.png";

const Quote = () => {
  return (
    <>
      <div className="row py-3">
        <div className="col-md-6 col-12">
          <div className="d-flex flex-column align-items-start justify-content-center gap-2 ms-5 h-100">
            <Image src={QuoteIcon} alt="quote icon" loading="lazy" className="img-fluid" />
            <div className="font-adobe fw-500 fs-3">
              <span className="d-block">There’s no magic formula for great company culture. The key is just to treat your staff,</span>
              <span className="d-block"> Just how you would like to be treated.</span>
            </div>
            <span>-Richard Branson</span>
          </div>
        </div>
        <div className="col-md-6 col-12">
          <Image
            src={QuoteImage}
            alt="quote"
            loading="lazy"
            className="img-fluid"
            style={{
              borderRadius: "46px",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Quote;
