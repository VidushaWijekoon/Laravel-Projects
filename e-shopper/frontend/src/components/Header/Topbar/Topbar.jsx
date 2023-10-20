import { Link } from "react-router-dom";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { FaGlobe } from "react-icons/fa6";
import { BsCart3 } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import "./topnavbar.css";

const Topbar = () => {
  return (
    <>
      <nav className="navbar-sticky bg-light">
        <div className="navbar navbar-expand-lg navbar-light resp-height">
          <div className="container-fluid d-block">
            <div className="row align-align-items-center">
              {/* Logo */}
              <div className="col-lg-auto">
                <Link className="navbar-brand" to="/">
                  <img
                    src="https://cartlow.com/web-assets/img/home/logo-cartlow.svg"
                    alt="Logo"
                    width="170"
                  />
                </Link>
              </div>

              {/* Right Side Bar */}
              <div className="col-lg-auto order-lg-3 rightsidebar">
                <ul
                  className="d-flex align-items-center"
                  style={{ minHeight: "100%" }}
                >
                  <li>
                    <div className="select-country mt-1">
                      <Link>
                        <img
                          src="https://cartlow.com/web-assets/img/flags/uae-flag.png"
                          alt="uae flag"
                        />
                        <span>UAE</span>
                        <ArrowDropDownIcon style={{ fontSize: "14px" }} />
                      </Link>

                      <div className="dropdown-content">
                        <Link>
                          <img
                            src="https://cartlow.com/web-assets/img/flags/ksa-flag.png"
                            alt="ksa flag"
                          />
                          <span>UAE</span>
                        </Link>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div className="topbar-text dropdown disable-autohide cart-counter-sec d-flex align-items-center">
                      <Link to="#" className="topbar-link">
                        <span className="icon">
                          <FaGlobe />
                        </span>
                        <span className="text">العربية</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="topbar-text dropdown disable-autohide cart-counter-sec d-flex align-items-center">
                      <span className="cart-counter cart_counter-d">0</span>
                      <Link to="/cart" className="topbar-link">
                        <span className="icon">
                          <BsCart3 />
                        </span>
                        <span className="text">Cart</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="topbar-text dropdown disable-autohide cart-counter-sec d-flex align-items-center">
                      <Link to="#" className="topbar-link">
                        <span className="icon">
                          <BiUser />
                        </span>
                        <span className="text text-capitalize">Sign in</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Search Input */}
              <div className="col-lg order-lg-2">
                <div className="input-group-overlay d-lg-block search-flex">
                  <input
                    className="form-control prepended-form-control appended-form-control"
                    type="search"
                    id="app-search"
                    placeholder="Search pre-loved &amp; never-used products"
                  />
                  <div className="input-group-prepend-overlay search-btn">
                    <span className="input-group-text">
                      <FaMagnifyingGlass width="19" height="18" />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Topbar;
