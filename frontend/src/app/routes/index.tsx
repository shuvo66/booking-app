import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout";
import { AUTH_ROUTES } from "../components/Auth/AuthRoutes";
import DashboardLayout from "../layouts/dashboardLayout";
import Hotels from "../containers/Hotels";
import Booking from "../containers/Booking";

const routes = createBrowserRouter([
  ...AUTH_ROUTES,
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <p>landing-home</p>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "hotels",
        element: <Hotels />,
      },
      {
        path: "booking",
        element: <Booking />,
      },
    ],
  },

  {
    path: "*",
    element: (
      <div className="grid h-screen grid-cols-1">
        <p>Not Found!</p>
      </div>
    ),
  },
]);
export default routes;
