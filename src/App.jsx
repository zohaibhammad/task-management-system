import "./App.scss";
import { RouterProvider } from "react-router-dom";
import Router from "Routes";

function App() {
  return (
    <div>
      <RouterProvider router={Router} />
    </div>
  );
}

export default App;
