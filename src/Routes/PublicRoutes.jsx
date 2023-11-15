import { Route } from "react-router-dom";
import { PublicRoutesConfig } from "../RouteConfig";

const PublicRoutes = () => {
  const routes = ({ component, path, children, ...rest }, index) => {
    return (
      <Route key={index} {...rest} path={path} element={component}>
        {children && children.map(routes)}
      </Route>
    );
  };

  return <>{PublicRoutesConfig.map((route, index) => routes(route, index))}</>;
};

export default PublicRoutes;
