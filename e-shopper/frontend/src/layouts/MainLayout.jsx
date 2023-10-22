import { Outlet } from "react-router-dom";
import Footer from "../components/frontend/Footer/Footer";
import Header from "../components/frontend/Header/Header";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
