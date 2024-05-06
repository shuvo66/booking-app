import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { authAPI } from "../../../libs/api";
import { authService } from "../../../libs/auth";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../layouts/context/appContext";
import { verifyAPI } from "../../../libs/api/verifyAPI";

export const useAuth = () => {
  const navigator = useNavigate();
  const { showToast } = useAppContext();

  const registerMutation = useMutation({
    mutationFn: (payload: API.RegisterPayload) => authAPI.register(payload),
    onSuccess: (data) => {
      showToast({ messages: data?.message, type: "SUCCESS" });
    },
    onError: (error: Error) => {
      showToast({ messages: error?.message, type: "ERROR" });
    },
  });

  const loginMutation = useMutation({
    mutationFn: (payload: API.LoginPayload) => authAPI.login(payload),
    onSuccess: (data) => {
      authService.setToken(data?.data?.accessToken);
      showToast({ messages: data?.message, type: "SUCCESS" });
      navigator("/");
    },
    onError: (error: Error) => {
      showToast({ messages: error?.message, type: "ERROR" });
    },
  });

  const register = useCallback(
    (payload: API.RegisterPayload) => {
      registerMutation.mutate(payload);
    },
    [registerMutation]
  );

  const loginHandler = useCallback(
    (payload: API.LoginPayload) => {
      loginMutation.mutate(payload);
    },
    [loginMutation]
  );

  const logoutMutation = useMutation({
    mutationFn: () => verifyAPI.logout(),
    onSuccess: (data) => {
      showToast({ messages: data?.message, type: "SUCCESS" });
      authService.removeTokens();
      navigator("/");
    },
    onError: (error: Error) => {
      showToast({ messages: error?.message, type: "ERROR" });
    },
  });

  const resetPasswordMutation = useMutation({
    mutationFn: (payload: API.ResetPasswordPayload) =>
      verifyAPI.resetPassword(payload),
    onSuccess: (data) => {
      showToast({ messages: data?.message, type: "SUCCESS" });
      navigator("/login");
    },
    onError: (error: Error) => {
      showToast({ messages: error?.message, type: "ERROR" });
    },
  });

  const resetPasswordHandler = useCallback(
    (payload: API.ResetPasswordPayload) => {
      resetPasswordMutation.mutate(payload);
    },
    [resetPasswordMutation]
  );

  return {
    register,
    loginHandler,
    registerValue: registerMutation,
    logoutMutation,
    resetPasswordHandler,
  };
};
