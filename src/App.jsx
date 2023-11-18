import "./App.scss";
import { RouterProvider } from "react-router-dom";
import Router from "Routes";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { isLoggedIn } from "./Utils/index.js";
import { setUser } from "./Redux/Reducer.js";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    if (isLoggedIn()) {
      dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    }
  }, []);

  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
