import { Link } from "react-router-dom";
import BestSellingLaptop from "./BestSellingLaptop";
import BestMacbook from "./BestMacbook";
import AudioAndHeadphones from "./AudioAndHeadphones";

const Laptops = () => {
  return (
    <>
      <section className="section-container mb-3">
        <div className="">
          <h2 className="mainTitle">Popular Choices</h2>
        </div>
        <div class="row">
          <div class="col-md-8">
            <Link class="">
              <img
                class="img img-fluid rounded-2 bottom-space"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/8ae4728d5d60f0d3a49310b51c5977bc.png"
                alt="Windows laptops"
              />
            </Link>
          </div>
          <div class="col-md-4">
            <Link class="">
              <img
                class="img-fluid rounded-2"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/e4104d63223e2bb8f194b4050513fe1e.png"
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
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/c90a080463ff0009da0f79565f410367.png"
                alt="Best of Chromebooks"
              />
            </Link>
          </div>
          <div class="col-md-8 mb-4">
            <Link class="">
              <img
                class="img-fluid rounded-2 bottom-space"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/767bf69f9879bf843af5cd43b69bdc0f.png"
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
              <h2 className="mainTitle">Best Selling Laptops</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <BestSellingLaptop />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Top Rated MacBooks</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <BestMacbook />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Audio & Headphone Sale</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <AudioAndHeadphones />
        </div>
      </div>
    </>
  );
};

export default Laptops;
