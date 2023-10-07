import { Outlet } from "react-router-dom";
import Navbar from "../../components/dashboard/Navbar/Navbar";
import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Footer from "../../components/dashboard/Footer/Footer";

const DashboardMainLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
      <Footer />
    </>
  );
};

export default DashboardMainLayout;
