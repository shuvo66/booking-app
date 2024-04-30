import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { authAPI } from "../../../libs/api";
import { authService } from "../../../libs/auth";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const navigator = useNavigate();
  const registerMutation = useMutation({
    mutationFn: (payload: API.RegisterPayload) => authAPI.register(payload),
    onSuccess: (data) => {
      toast(data?.message);
    },
    onError: (error) => {
      toast(error?.message);
    },
  });

  const loginMutation = useMutation({
    mutationFn: (payload: API.LoginPayload) => authAPI.login(payload),
    onSuccess: (data) => {
      authService.setToken(data?.data?.accessToken);
      toast(data?.message);
      navigator("/");
    },
    onError: (error) => {
      toast(error?.message);
    },
  });

  const register = useCallback(
    (payload: API.RegisterPayload) => {
      registerMutation.mutate(payload);
      console.log(payload);
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
