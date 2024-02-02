import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "../components/admin/Sidebar";
import Navbar from "../components/admin/Navbar";
import Footer from "../components/admin/Footer";

const admin_layout = () => {
  return (
    <div className="container-fluid">
      <Sidebar />
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default admin_layout;
