import { ComponentType } from "react";
import { authService } from "../../libs/auth";
import { Navigate } from "react-router-dom";

export const withAuth = <T extends object>(
  WrappedComponent: ComponentType<T>
) => {
  return (props: T) => {
    const token = authService.getToken();
    if (token === null) {
      return <Navigate to="/" replace />;
    }
    return <WrappedComponent {...props} />;
  };
};
