import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import { Buttons } from "../../../components/Atoms/Button";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestSection";
import TypeSection from "./TypeSection";
import ImagesSection from "./ImageSection";
import { useHotel } from "../hooks/usehotel";

export const MangeHotelForm = () => {
  const formData = useForm<API.HotelFormData>();
  const { handleSubmit, reset } = formData;
  const { createHotel } = useHotel({
    onSuccess: () => {
      reset();
    },
  });
  const onSubmit = handleSubmit((payload: API.HotelFormData) => {
    createHotel.mutate(payload);
  });

  return (
    <FormProvider {...formData}>
      <form className="flex flex-col gap-10" onSubmit={onSubmit}>
        <DetailsSection />
        <TypeSection />
        <FacilitiesSection />
        <GuestsSection />
        {/* <ImagesSection /> */}
        <div className="flex justify-end">
          <Buttons
            buttonName={"Save"}
            type={"submit"}
            className="bg-blue-600 text-white pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded font-bold hover:bg-blue-500 text-sm"
          />
        </div>
      </form>
    </FormProvider>
  );
};
