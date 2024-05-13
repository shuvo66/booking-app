import { Link } from "react-router-dom";
import { Cards } from "../../../components/Atoms/Card";
import { Table } from "../../../components/Atoms/Table";
import { useHotel } from "../hooks/usehotel";

export const ManageHotel = () => {
  const { hotelList } = useHotel({});

  return (
    <div>
      <Cards
        title={"Hotel List"}
        children={<Table list={hotelList?.data} />}
        cardChild={
          <Link
            to={"Add"}
            className="bg-primary text-white pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded font-bold hover:bg-blue-500 text-sm"
          >
            Add
          </Link>
        }
      />
    </div>
  );
};
