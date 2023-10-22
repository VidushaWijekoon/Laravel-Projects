import { Outlet } from "react-router-dom";
import Header from "../components/dashboard/Header/Header";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import Footer from "../components/dashboard/Footer/Footer";

const ProtectedLayout = () => {
  return (
    <>
      <Header />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default ProtectedLayout;
