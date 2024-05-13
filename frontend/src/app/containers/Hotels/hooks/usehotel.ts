import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { manageHotelAPI } from "../../../libs/api";
import { useAppContext } from "../../../layouts/context/appContext";
import { useParams, useNavigate } from "react-router-dom";
import { useMemo } from "react";

type EditHotel = {
  id: string;
  payload: API.HotelFormData;
};
type HotelProps = {
  onSuccess?: () => void;
};
export const useHotel = ({ onSuccess }: HotelProps) => {
  const { showToast } = useAppContext();
  const navigate = useNavigate();
  const { id } = useParams();
  const queryClient = useQueryClient();

  // Create hotel
  const createHotel = useMutation({
    mutationFn: (payload: API.HotelFormData) =>
      manageHotelAPI.createHotel(payload),
    mutationKey: ["create-hotels"],
    onSuccess: (data) => {
      showToast({ messages: data.message, type: "SUCCESS" });
      onSuccess?.();
      queryClient.invalidateQueries({
        queryKey: ["hotel-list"],
        refetchType: "active",
      });
      navigate("/dashboard/hotels");
    },
    onError: (error: Error) => {
      showToast({ messages: error?.message, type: "ERROR" });
    },
  });

  // hotel list
  const { data } = useQuery({
    queryKey: ["hotel-list"],
    queryFn: () => manageHotelAPI.hotelList(),
  });

  // update hotels
  const singleList = useMemo(() => {
    return data?.data.filter((v) => v._id === id) || [];
  }, [data?.data, id]);

  const updateHotel = useMutation({
    mutationFn: ({ id, payload }: EditHotel) =>
      manageHotelAPI.updateHotel(id, payload),
    mutationKey: ["update-hotel"],
    onSuccess: (data) => {
      showToast({ messages: data.message, type: "SUCCESS" });
      queryClient.invalidateQueries({
        queryKey: ["hotel-list"],
        refetchType: "active",
      });
      navigate("/dashboard/hotels");
      onSuccess?.();
    },
    onError: (error: Error) => {
      showToast({ messages: error?.message, type: "ERROR" });
    },
  });
  return {
    createHotel,
    updateHotel,
    hotelList: data,
    singleList: singleList[0],
  };
};
