import { Outlet } from "react-router-dom";
import Footer from "../components/dashboard/Footer/Footer";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";
import Navbar from "../components/dashboard/Navbar/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardLayout;
