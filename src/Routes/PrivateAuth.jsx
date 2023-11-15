import { Navigate, Outlet } from "react-router-dom";
import { isLoggedIn } from "../Utils";

const PrivateAuth = () => {
  if (isLoggedIn()) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateAuth;
