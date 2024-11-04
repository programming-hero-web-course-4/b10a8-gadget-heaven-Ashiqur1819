import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact"
import GadgetDetails from "../pages/GadgetDetails";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/statistics",
        element: <Statistics></Statistics>,
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/gadgets/:product_id",
        loader: () => fetch("gadgets.json"),
        element: <GadgetDetails></GadgetDetails>
      },
    ],
  },
]);

export {router}