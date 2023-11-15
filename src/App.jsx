import "./App.scss";
import { RouterProvider } from "react-router-dom";
import Router from "Routes";

function App() {
    return (
        <>
            <div className={"pages"}>
                <RouterProvider router={Router} />
            </div>
        </>
    );
}

export default App;
