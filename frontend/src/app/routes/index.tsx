import { createBrowserRouter } from "react-router-dom";
import HomeLayout from "../layouts/homeLayout";
import { AUTH_ROUTES } from "../components/Auth/AuthRoutes";

const routes = createBrowserRouter([
  ...AUTH_ROUTES,
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        path: "home",
        index: true,
        element: <p>home</p>,
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
