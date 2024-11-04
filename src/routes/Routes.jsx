import { createBrowserRouter} from "react-router-dom";
import App from "../App";
import Error from "../pages/Error";
import Home from "../pages/Home";
import Statistics from "../pages/Statistics";
import Dashboard from "../pages/Dashboard";
import Contact from "../pages/Contact"
import Gadgets from "../components/Gadgets";
import GadgetDetails from "../pages/GadgetDetails"




const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <Error></Error>,
    children: [
      {
        path: "/",
        loader: () => fetch("categories.json"),
        element: <Home></Home>,
        children: [
          {
            path: "/",
            loader: () => fetch("../gadgets.json"),
            element: <Gadgets></Gadgets>,
          },
          {
            path: "/category/:category",
            loader: () => fetch("../gadgets.json"),
            element: <Gadgets></Gadgets>,
          },
        ],
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
        path: "/contact",
        element: <Contact></Contact>,
      },

      {
        path: "/gadget/:product_id",
        loader: () => fetch("../gadgets.json"),
        element: <GadgetDetails></GadgetDetails>
      }
    ],
  },
]);

export {router}