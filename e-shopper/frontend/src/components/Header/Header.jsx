import AlertBanner from "./AlertBanner/AlertBanner";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import Topbar from "./Topbar/Topbar";

const Header = () => {
  return (
    <>
      <AlertBanner />
      <header className="header" id="header">
        <div className="navbar-sticky bg-light">
          <Topbar />
          <BottomNavbar />
        </div>
      </header>
    </>
  );
};

export default Header;
