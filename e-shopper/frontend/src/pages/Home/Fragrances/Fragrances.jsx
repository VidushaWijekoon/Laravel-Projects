import { Link } from "react-router-dom";
import "./fragrances.css";
import MenPerfumes from "./MenPerfumes";
import WomenPerfumes from "./WomenPerfumes";

const Fragrances = () => {
  return (
    <>
      <section className="section-container mb-3">
        <div className="">
          <h2 className="mainTitle">Loved Fragrances</h2>
        </div>
        <div class="row three-banner-sec">
          <div class="col-lg-5 col-md-12 col-sm-12 d-flex justify-content-center">
            <Link class="">
              <img
                class="img-fluid rounded-2 offer-img5"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/0f0fe978736604746d15876f884b1a16.png"
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
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/a1757926b2a1417fdada113682458274.png"
                    alt="Best Prices on Kenwood"
                  />
                </Link>
              </div>

              <div class="col-12">
                <Link class="">
                  <img
                    class="img-fluid rounded-2 offer-img1 mb-3"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/2593ae33eb01bca064abddb790d9e69c.png"
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
              <h2 className="mainTitle">Best of Men's Perfumes</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <MenPerfumes />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Best of Women's Perfumes</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <WomenPerfumes />
        </div>
      </div>
    </>
  );
};

export default Fragrances;
