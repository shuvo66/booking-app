import { RouteObject } from "react-router-dom";
import AuthLayout from "../../layouts/authLayout";

import { ResetPassword } from "./PasswordReset";
import Login from "./login";
import Register from "./Register";

export const AUTH_ROUTES: RouteObject[] = [
  {
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
    ],
  },
];
