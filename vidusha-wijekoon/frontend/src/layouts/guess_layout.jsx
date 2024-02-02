import React from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../components/guest/Navbar";
import Footer from "../components/guest/Footer";

const guess_layout = () => {
  return (
    <div className="container-fluid">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default guess_layout;
