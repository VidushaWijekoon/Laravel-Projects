import { useState } from "react";
import { Link } from "react-router-dom";

import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { BiChevronRight } from "react-icons/bi";

import "./bottomnavbar.css";

import { navLinks, categoryMenus } from "./navlinks";

const BottomNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="navbar-expand-lg navbar-light navbar-stuck-menu style2Nav mobile-menu">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="nav-link">
                <Link
                  className="nav-link w-75"
                  to="#"
                  onClick={() => setIsVisible(!isVisible)}
                >
                  {isVisible ? (
                    <CloseIcon className="m-2" />
                  ) : (
                    <MenuIcon className="m-2" />
                  )}

                  <span>All Categories</span>
                </Link>
              </div>
            </div>

            <div className="col-lg-9">
              <ul className="navbar-nav style2mainMenu arrowRemoved owl-carousel owl-loaded owl-drag">
                <div className="owl-stage d-flex justify-content-end">
                  {/* Items */}
                  {navLinks.map(({ title, url }) => (
                    <div className="owl-item active w-auto" key={title}>
                      <li className="nav-item">
                        <Link className="nav-link" to={url}>
                          {title}
                        </Link>
                      </li>
                    </div>
                  ))}
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Dropdown Menu */}
      {isVisible ? (
        <div className="dropdown-menu show rounded-0">
          <div className="container-fluid d-block">
            <div className="row no-gutters">
              <div className="col-auto scl-nav sm-scrollbar">
                <div
                  className="list-group list-group-flush"
                  id="list-tab"
                  role="tablist"
                >
                  {categoryMenus.map((event) => (
                    <Link className="d-flex justify-content-between">
                      <div className="title" title="">
                        {event.mainTitle}
                      </div>
                      <BiChevronRight />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="col scl-content">
                <div className="d-flex justify-content-between">
                  <div className="">1</div>
                  <div className="brands-box">
                    <div className="title-bar">
                      <h4 class="title">Top Brands</h4>
                    </div>
                    <div className="row">
                      <div className="col-lg-4">
                        <Link>
                          <img
                            src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/50x0/brands/9940387f-830a-4266-9e65-54557ce6e285.png"
                            alt="other brand"
                          />
                        </Link>
                      </div>
                      <div className="col-lg-4">
                        <Link>
                          <img
                            src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/50x0/brands/9940387f-830a-4266-9e65-54557ce6e285.png"
                            alt="other brand"
                          />
                        </Link>
                      </div>
                      <div className="col-lg-4">
                        <Link>
                          <img
                            src="https://jmd2ficarl.execute-api.us-east-2.amazonaws.com/50x0/brands/9940387f-830a-4266-9e65-54557ce6e285.png"
                            alt="other brand"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
      {/* End Dropdown menu */}
    </>
  );
};

export default BottomNavbar;
