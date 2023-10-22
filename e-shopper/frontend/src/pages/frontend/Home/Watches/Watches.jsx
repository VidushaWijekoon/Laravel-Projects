import { Link } from "react-router-dom";
import "./watches.css";
import TopWatches from "./TopWatches";

const Watches = () => {
  return (
    <>
      <section className="section-container mb-3">
        <div className="">
          <h2 className="mainTitle">Shop Watches</h2>
        </div>
        <div class="row three-banner-sec">
          <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
            <Link class="">
              <img
                class="img-fluid rounded-2 offer-img5"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/80dc48e6e9c8d45cf4609368ea2c9985.png"
                alt="Philips Appliances"
              />
            </Link>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12 col-sm-12 mt-15 mt-md-0 d-flex justify-content-center">
            <div class="row two-banner-sec">
              <div class="col-12 mb-15 mt-15-768">
                <Link class="">
                  <img
                    class="img-fluid rounded-2 offer-img1 mb-3"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/3260bcce0ce4265bd646065d98f48b03.png"
                    alt="Best Prices on Kenwood"
                  />
                </Link>
              </div>

              <div class="col-12">
                <Link class="">
                  <img
                    class="img-fluid rounded-2 offer-img1 mb-3"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/b1567a142e486135dcc6fac09eba3039.png"
                    alt="Black+Decker!"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Top Picks on Watches</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <TopWatches />
        </div>
      </div>
    </>
  );
};

export default Watches;
