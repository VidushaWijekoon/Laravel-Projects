import { Outlet } from "react-router-dom";
import Header from "../components/frontend/Header/Header";
import Footer from "../components/frontend/Footer/Footer";

const FrontendLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default FrontendLayout;
