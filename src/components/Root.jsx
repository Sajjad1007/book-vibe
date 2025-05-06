import React from "react";
import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Navbar from "./Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer />
    </div>
  );
};

export default Root;
