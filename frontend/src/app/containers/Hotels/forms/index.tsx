import { FormProvider, useForm } from "react-hook-form";
import DetailsSection from "./DetailsSection";
import { Buttons } from "../../../components/Atoms/Button";
import FacilitiesSection from "./FacilitiesSection";
import GuestsSection from "./GuestSection";
import TypeSection from "./TypeSection";
import { useHotel } from "../hooks/usehotel";
import { Cards } from "../../../components/Atoms/Card";

const MangeHotelForm = () => {
  const { singleList } = useHotel({});

  const formData = useForm<API.HotelFormData>({
    defaultValues: { ...singleList },
  });

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
    <Cards
      children={
        <FormProvider {...formData}>
          <form className="flex flex-col gap-10" onSubmit={onSubmit}>
            <DetailsSection />
            <TypeSection />
            <FacilitiesSection />
            <GuestsSection />
            <div className="flex justify-end">
              <Buttons
                buttonName={"Save"}
                type={"submit"}
                className="bg-primary text-white pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded font-bold hover:bg-blue-500 text-sm"
              />
            </div>
          </form>
        </FormProvider>
      }
    />
  );
};
export default MangeHotelForm;
