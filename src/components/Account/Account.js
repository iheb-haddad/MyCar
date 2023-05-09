import React from "react";
import { VerticalNavbar } from "../index";
import { Outlet } from "react-router-dom";
import { Profil, AppointmentForm } from "../index";

const Account = () => {
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <VerticalNavbar />
      <Outlet />
    </div>
  );
};

export default Account;
