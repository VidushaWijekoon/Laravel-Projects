import { Outlet } from "react-router-dom";
import Navbar from "../components/dashboard/Navbar/Navbar";
import Sidebar from "../components/dashboard/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <Outlet />
    </>
  );
};

export default DashboardLayout;
