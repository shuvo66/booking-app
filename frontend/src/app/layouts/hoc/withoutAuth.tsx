import { ComponentType } from "react";
import { authService } from "../../libs/auth";
import { Navigate } from "react-router-dom";

export const withoutAuth = <T extends object>(
  WrappedComponent: ComponentType<T>
) => {
  return (props: T) => {
    const token = authService.getToken();
    if (token) {
      authService.setToken(token);
      return <Navigate to="/dashboard" />;
    }
    return <WrappedComponent {...props} />;
  };
};
