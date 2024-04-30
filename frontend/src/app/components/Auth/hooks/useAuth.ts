import { useMutation } from "@tanstack/react-query";
import { useCallback } from "react";
import { authAPI } from "../../../libs/api";
import { authService } from "../../../libs/auth";
import { toast } from "react-toastify";

export const useAuth = () => {
  const registerMutation = useMutation({
    mutationFn: (payload: API.RegisterPayload) => authAPI.register(payload),
    onSuccess: (data) => {
      authService.setToken(data?.data?.token);
      toast(data?.message);
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
  return {
    register,
    isloading: registerMutation.isPending,
  };
};
