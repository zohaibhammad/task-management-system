import {
  Login,
} from "Pages";

//Index routes can't contain child routes.

//For using child routes, use Outlet in the parent component.

const PublicRoutes = [
  {
    component: <Login />,
    index: true,
  },
  // {
  //   component: <Test />,
  //   path: "test",
  //   children: [
  //     {
  //       component: <Login />,
  //       path: "home",
  //       children: [{ component: <Login />, path: "about" }],
  //     },
  //     {
  //       component: <Login />,
  //       path: "about",
  //     },
  //   ],
  // },
];

export default PublicRoutes;
