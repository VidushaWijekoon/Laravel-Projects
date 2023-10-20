import TopRateAndroidPhone from "./TopRateAndroidPhone";
import TopRateIphone from "./TopRateIphone";
import "./smartphone.css";
import { Link } from "react-router-dom";

const SmartPhones = () => {
  return (
    <>
      <section className="section-container mb-3">
        <div className="">
          <h2 className="mainTitle">Smartphone Heaven</h2>
        </div>
        <div className="row five-banner-sec">
          <div className="col-lg-5 col-sm-12 five-banner-sec-1">
            <Link>
              <img
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/dbf0d6fd1cc4cc2009d7026f1cb2db3b.png"
                alt=""
                className="w-100 rounded-2 m-1"
              />
            </Link>
          </div>
          <div className="col-lg-7 col-md-12 col-sm-12 col-sm-12">
            <div className="row five-banner-sec-2">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Link>
                  <img
                    className="w-100 rounded-2 m-1"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/04a21a80f77385d90ee20df150b41196.png"
                    alt="samsung mobiles"
                  />
                </Link>
              </div>

              <div className="col-lg-6 col-md-6 col-sm-12">
                <Link>
                  <img
                    className="w-100 rounded-2 m-1"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/df63966ec6fa9a2c88bff3cc09d466fb.png"
                    alt="Top Picks on Android"
                  />
                </Link>
              </div>
            </div>
            <div className="row mt-15 five-banner-sec-2">
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Link>
                  <img
                    className="w-100 rounded-2 m-1"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/903bc1d2f624294bfd9bca33e74edc7b.png"
                    alt="Below 899AED Mobiles"
                  />
                </Link>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12">
                <Link>
                  <img
                    className="w-100 rounded-2 m-1"
                    src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/8fb8bfa820712e9f7f682f878925ace2.png"
                    alt="900-1499AED Mobiles"
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
              <h2 className="mainTitle">Top Rated iPhones</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <TopRateIphone />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Top Rated Android Phones</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <TopRateAndroidPhone />
        </div>
      </div>
    </>
  );
};

export default SmartPhones;
