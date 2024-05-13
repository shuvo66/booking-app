import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout";
import { AUTH_ROUTES } from "../containers/Auth/AuthRoutes";
import DashboardLayout from "../layouts/dashboardLayout";
import Hotels from "../containers/Hotels";
import Booking from "../containers/Booking";
import MangeHotelForm from "../containers/Hotels/forms";

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
        children: [
          {
            index: true,
            element: <Hotels />,
          },
          {
            path: ":type/:id?",
            element: <MangeHotelForm />,
          },
        ],
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
