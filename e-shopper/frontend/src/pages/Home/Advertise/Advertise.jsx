import { Link } from "react-router-dom";
import Testers from "./Testers";
import Makeup from "./Makeup";

const Advertise = () => {
  return (
    <>
      <section className="mb-5">
        <div className="row">
          <div className="col-12">
            <Link className="d-sm-flex justify-content-between align-items-center bg-secondary overflow-hidden rounded-lg">
              <img
                className="d-block offer-img6 w-100 rounded-2"
                src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/background/d72f1c7b886553c0d6b2d03681e6500d.png"
                alt="Perfumes &amp; Watches on Sale!"
              />
            </Link>
          </div>
        </div>
      </section>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Original Testers on Sale</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Testers />
        </div>
      </div>
      <div className="products-cards-section">
        <div className="row">
          <div className="col-md-12">
            <div className="productHeader">
              <h2 className="mainTitle">Special Offers on Make up</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <Makeup />
        </div>
      </div>
    </>
  );
};

export default Advertise;
