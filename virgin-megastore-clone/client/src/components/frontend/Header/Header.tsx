import CompanyLogo from "../../../assets/images/logo/Virgin-Megastore_Logo.png";
import "./header.css";

import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Header = () => {
  return (
    <header id="header" className="header">
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img
              src={CompanyLogo}
              alt="Virgin Megastore"
              style={{ width: "57px" }}
            />
          </a>

          <div className="w-50 d-flex">
            <div className="input-group">
              <input
                type="search"
                aria-describedby="button-addon1"
                className="form-control rounded-0"
              />
              <div className="input-group-append position-absolute h-100 w-100 d-flex justify-content-end align-items-center px-3">
                <SearchIcon />
              </div>
            </div>
          </div>
          <div className="">
            <PersonOutlineOutlinedIcon className="icons" />
            <ChatBubbleOutlineIcon className="icons" />
            <ShoppingCartOutlinedIcon className="icons" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
