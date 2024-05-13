import { Buttons } from "../../../components/Atoms/Button";
import { Cards } from "../../../components/Atoms/Card";
import { Table } from "../../../components/Atoms/Table";
import { MangeHotelForm } from "../forms";

export const ManageHotel = () => {
  return (
    <div>
      <Cards
        title={"Hotel List"}
        children={<Table />}
        cardChild={
          <Buttons
            buttonName={"Add"}
            className="bg-primary text-white pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded font-bold hover:bg-blue-500 text-sm"
          />
        }
      />
    </div>
  );
};
