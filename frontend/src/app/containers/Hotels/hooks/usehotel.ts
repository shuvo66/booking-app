import { useMutation, useQuery } from "@tanstack/react-query";
import { manageHotelAPI } from "../../../libs/api";
import { useAppContext } from "../../../layouts/context/appContext";
import { useParams } from "react-router-dom";
import { useMemo } from "react";

type HotelProps = {
  onSuccess?: () => void;
};
export const useHotel = ({ onSuccess }: HotelProps) => {
  const { showToast } = useAppContext();
  const { id } = useParams();

  // Create hotel
  const createHotel = useMutation({
    mutationFn: (payload: API.HotelFormData) =>
      manageHotelAPI.createHotel(payload),
    mutationKey: ["create-hotels"],
    onSuccess: (data) => {
      showToast({ messages: data.message, type: "SUCCESS" });
      onSuccess?.();
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

  const singleList = useMemo(() => {
    return data?.data.filter((v) => v._id === id) || [];
  }, [data?.data, id]);
  return {
    createHotel,
    hotelList: data,
    singleList: singleList[0],
  };
};
