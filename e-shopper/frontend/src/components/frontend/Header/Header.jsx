import AlertBanner from "./AlertBanner/AlertBanner";
import BottomNavbar from "./BottomNavbar/BottomNavbar";
import TopNavbar from "./TopNavbar/TopNavbar";

const Header = () => {
  return (
    <>
      <AlertBanner />
      <header className="header" id="header">
        <div className="bg-white sticky top-0">
          <TopNavbar />
          <BottomNavbar />
        </div>
      </header>
    </>
  );
};

export default Header;
