import { Link } from "react-router-dom";
import "./appliances.css";
import TopPicks from "./TopPicks";
import Braun from "./Braun";
import HomeAppliances from "./HomeAppliances";

const Appliances = () => {
  return (
    <>
      <section className="section-container mb-3">
        <div className="">
          <h2 className="mainTitle">Top Brands on Appliances</h2>
        </div>
        <div class="row three-banner-sec">
          <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
            <Link class="">
              <img
                class="img-fluid rounded-2 offer-img5"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/098a3cb00e2475a8da8e580229428add.png"
                alt="Philips Appliances"
              />
            </Link>
          </div>
          <div class="col-lg-7 col-md-12 col-sm-12 col-sm-12 d-flex justify-content-center">
            <div class="row two-banner-sec">
              <div class="col-12 mb-15 mt-15-768">
                <Link class="">
                  <img
                    class="img-fluid rounded-2 offer-img1 mb-3"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/23ca4e87fe3d8a98553ea5f68eca17bb.png"
                    alt="Best Prices on Kenwood"
                  />
                </Link>
              </div>

              <div class="col-12">
                <Link class="">
                  <img
                    class="img-fluid rounded-2 offer-img1 mb-3"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/f8388d9acf5e8303741cf68a5f11694f.png"
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
              <h2 className="mainTitle">Affordable Like-New Top Picks</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <TopPicks />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Sale on Braun</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Braun />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Major Home Appliances</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <HomeAppliances />
        </div>
      </div>
    </>
  );
};

export default Appliances;
