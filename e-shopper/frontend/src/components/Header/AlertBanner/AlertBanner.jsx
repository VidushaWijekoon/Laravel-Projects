import { useState } from "react";
import "./alertbanner.css";

const AlertBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      {isVisible ? (
        <div className="alert-banner-1 alert-success alert-dismissible fade show py-0 d-md-flex justify-content-between align-items-center d-none d-md-block">
          <button
            type="button"
            className="close"
            data-dismiss="alert"
            aria-label="Close"
            onClick={() => setIsVisible(!isVisible)}
            asdasdasd
          >
            <img
              src="https://cartlow.com/web-assets/img/icons/icon-close.svg"
              alt="Close Icon"
              className="img-fluid"
            />
          </button>
          <div className="meta">
            <img
              src="https://cartlow.com/web-assets/img/alerts/1.svg"
              alt="Alert Icon"
              className="img-fluid"
            />
            <div className="mx-4">
              Get <span className="font-weight-semibold">15%</span>
              <span>discount + Free Delivery on orders over</span>
              <span className="font-weight-semibold"> AED 199 </span>
            </div>
            <button className="btn btn-outline-primary btn-sm">
              <div className="1231231">
                <span>Use code:</span> <span className="promo-copy">NOW15</span>
              </div>
              <div className="">
                <img
                  src="https://cartlow.com/web-assets/img/icons/icon-copy.svg"
                  alt="..."
                  className="img-fluid mx-2"
                />
              </div>
            </button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export default AlertBanner;
