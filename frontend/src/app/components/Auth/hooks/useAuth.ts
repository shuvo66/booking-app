import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { authAPI } from "../../../libs/api";
import { authService } from "../../../libs/auth";
import { useNavigate } from "react-router-dom";
import { useAppContext } from "../../../layouts/context/appContext";

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

  return {
    register,
    loginHandler,
    registerValue: registerMutation,
  };
};
