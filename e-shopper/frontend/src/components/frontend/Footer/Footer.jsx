import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <footer id="footer">
      <div className="footer-top">
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 footer-links">
              <h4>IPhone</h4>
              <ul>
                <li>
                  <Link>Iphone 15</Link>
                </li>
                <li>
                  <Link>Iphone 14</Link>
                </li>
                <li>
                  <Link>Iphone 13</Link>
                </li>
                <li>
                  <Link>Iphone 12</Link>
                </li>
                <li>
                  <Link>Iphone 11</Link>
                </li>
                <li>
                  <Link>Iphone X</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>SAMSUNG GALAXY</h4>
              <ul>
                <li>
                  <Link>Z Series Fold</Link>
                </li>
                <li>
                  <Link>Note Series</Link>
                </li>
                <li>
                  <Link>S Series</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>LAPTOPS</h4>
              <ul>
                <li>
                  <Link>Apple MacBook Air</Link>
                </li>
                <li>
                  <Link>Apple MacBook Pro</Link>
                </li>
                <li>
                  <Link>Lenovo ThinkPad</Link>
                </li>
                <li>
                  <Link>HP EliteBook</Link>
                </li>
                <li>
                  <Link>Dell Latitude</Link>
                </li>
                <li>
                  <Link>Microsoft Surface</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>TRADE IN</h4>
              <ul>
                <li>
                  <Link>Mobile Trade In</Link>
                </li>
                <li>
                  <Link>Tablet Trade in</Link>
                </li>
                <li>
                  <Link>Laptop Trade in</Link>
                </li>
                <li>
                  <Link>Smartwatches Trade in</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>BRANDS</h4>
              <ul>
                <li>
                  <Link>Apple</Link>
                </li>
                <li>
                  <Link>Samsung</Link>
                </li>
                <li>
                  <Link>Huawei</Link>
                </li>
                <li>
                  <Link>Oppo</Link>
                </li>
                <li>
                  <Link>Google</Link>
                </li>
                <li>
                  <Link>Microsoft</Link>
                </li>
                <li>
                  <Link>One Plus</Link>
                </li>
                <li>
                  <Link>Sony</Link>
                </li>
              </ul>
            </div>

            <div className="col-lg-2 col-md-6 footer-links">
              <h4>CARTLOW DELIVER TO</h4>
              <ul>
                <li>
                  <Link>Saudi Arabia</Link>
                </li>
                <li>
                  <Link>United Arab Emirates</Link>
                </li>
                <li>
                  <Link>Kuwait</Link>
                </li>
                <li>
                  <Link>السعودية</Link>
                </li>
                <li>
                  <Link>الامارات</Link>
                </li>
                <li>
                  <Link>الكويت</Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="row align-items-center justify-content-center">
            <div className="col-md-3 text-lg-left text-center">
              <div className="copyright mb-xl-0 text-body">
                <p className="mb-0">
                  © 2023 Cartlow. All Rights Reserved.
                  <br /> Subsidiary of
                  <Link className="link-border" target="_blank">
                    <span>Alsulaiman Group </span>
                  </Link>
                </p>
              </div>
            </div>
            <div className="col-md-4 text-center">
              <div className="footerImgList">
                <img
                  className="d-inline-block"
                  src="https://cartlow.com/web-assets/img/footer/01-payment-method-footer.svg"
                  alt="Master Card Payment methods"
                />
                <img
                  className="d-inline-block"
                  src="https://cartlow.com/web-assets/img/footer/03-payment-method-footer.svg"
                  alt="Visa Card Payment methods"
                />
                <img
                  className="d-inline-block"
                  src="https://cartlow.com/web-assets/img/footer/04-payment-method-footer.svg"
                  alt="Cash Payment methods"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
