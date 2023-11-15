import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
// import { isLoggedIn } from "../Utils";

function PublicAuth() {
  if (false) {
    return <Navigate to="/app/home" />;
  } else {
    return <Outlet />;
  }
}

export default memo(PublicAuth);
