import { Link } from "react-router-dom";
import Tablets from "./Tablets";
import SmartWatches from "./SmartWatches";
import Liquidation from "./Liquidation";
import Televisions from "./Televisions";

const Laptops = () => {
  return (
    <>
      <section className="section-container mb-3">
        <div className="">
          <h2 className="mainTitle">Flagship Electronics</h2>
        </div>
        <div class="row">
          <div class="col-md-8">
            <Link class="">
              <img
                class="img img-fluid rounded-2 bottom-space"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/cff0631cab78d855088a6e53e1860997.png"
                alt="Windows laptops"
              />
            </Link>
          </div>
          <div class="col-md-4">
            <Link class="">
              <img
                class="img-fluid rounded-2"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/9ddaceaddd1f6c5806389d3186413f9a.png"
                alt="gaming laptops"
              />
            </Link>
          </div>
        </div>
        <div class="row mt-3">
          <div class="col-md-4 mb-4">
            <Link class="">
              <img
                class="img-fluid rounded-2"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/31b9c9a6554f99ca8c3e0ce0f20c16f4.png"
                alt="Best of Chromebooks"
              />
            </Link>
          </div>
          <div class="col-md-8 mb-4">
            <Link class="">
              <img
                class="img-fluid rounded-2 bottom-space"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/84ae62deb1fad8521670bd9525a25091.png"
                alt="Top Rated MacBooks"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Tablets on Sale</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Tablets />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Televisions on Sale</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Televisions />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Smartwatches on Sale</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <SmartWatches />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Liquidation Clearance Sale</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Liquidation />
        </div>
      </div>
    </>
  );
};

export default Laptops;
