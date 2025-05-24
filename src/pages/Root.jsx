import { Outlet } from "react-router";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar";

const Root = () => {
  return (
    <div>
      <Navbar />
      <Outlet />
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default Root;
