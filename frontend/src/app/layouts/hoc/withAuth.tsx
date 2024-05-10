import { ComponentType } from "react";
import { authService } from "../../libs/auth";
import { Navigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { verifyAPI } from "../../libs/api/verifyAPI";

export const withAuth = <T extends object>(
  WrappedComponent: ComponentType<T>
) => {
  return (props: T) => {
    const token = authService.getToken();
    useQuery({
      queryKey: ["verify_user"],
      queryFn: () => verifyAPI.verificationToken(),
    });

    if (token === null) {
      return <Navigate to="/" replace />;
    }
    return <WrappedComponent {...props} />;
  };
};
