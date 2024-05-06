import { RouteObject } from "react-router-dom";
import AuthLayout from "../../layouts/authLayout";
import { Register } from "./Register";
import { Login } from "./login";
import { ResetPassword } from "./PasswordReset";

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
