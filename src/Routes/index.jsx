import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import NotFound from "Components/NotFound";
import PublicRoutes from "./PublicRoutes";
import PrivateAuth from "./PrivateAuth";
import PrivateRoutes from "./PrivateRoutes";
import PublicAuth from "./PublicAuth";

const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path={"/app"} element={<PrivateAuth />}>
        {PrivateRoutes()}
      </Route>
      <Route path={"/"} element={<PublicAuth />}>
        {PublicRoutes()}
      </Route>
      <Route path={"*"} element={<NotFound />} />
    </>
  )
);

export default Router;
