import { Route } from "react-router-dom";
import { PrivateRoutesConfig } from "../RouteConfig";
import { getAllowedRoutes } from "../Utils";

const PrivateRoutes = () => {
  const allowedRoutes = getAllowedRoutes(PrivateRoutesConfig);

  const routes = ({ component, path, children, ...rest }, index) => {
    return (
      <Route key={index} {...rest} path={path} element={component}>
        {children && children.map(routes)}
      </Route>
    );
  };

  return <>{allowedRoutes.map((route, index) => routes(route, index))}</>;
};

export default PrivateRoutes;
