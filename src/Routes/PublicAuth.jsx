import React, { memo } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../Utils/index.js";

function PublicAuth() {
  if (isLoggedIn()) {
    return <Navigate to="/app/tasks" />;
  } else {
    return <Outlet />;
  }
}

export default memo(PublicAuth);
