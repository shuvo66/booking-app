import { Link } from "react-router-dom";
import { useHotel } from "../../containers/Hotels/hooks/usehotel";

type TableProps = {
  list?: API.HotelList[];
};
export const Table = ({ list }: TableProps) => {
  const { dltHotel } = useHotel({});

  return (
    <div className="my-5 shadow-md">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs bg-tableHeadingBg border-b-[#f1f1f1] border-b-[1px] text-tableHeadingColor uppercase dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Hotel Name
            </th>
            <th scope="col" className="px-6 py-3">
              Hotel Picture
            </th>
            <th scope="col" className="px-6 py-3">
              Country
            </th>
            <th scope="col" className="px-6 py-3">
              City
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Per Night
            </th>
            <th scope="col" className="px-6 py-3">
              Rating
            </th>
            <th scope="col" className="px-6 py-3">
              type
            </th>

            <th scope="col" className="px-6 py-3 text-right">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {((list && list) || []).map((v) => (
            <tr>
              <th className="px-6 py-4 capitalize">{v.name}</th>
              <th className="px-6 py-4">
                <img
                  src={v.imageUrls}
                  width={"60px"}
                  height={"70px"}
                  alt="image"
                />
              </th>
              <th className="px-6 py-4 capitalize">{v.country}</th>
              <th className="px-6 py-4 capitalize">{v.city}</th>
              <th className="px-6 py-4 capitalize">{v.description}</th>
              <th className="px-6 py-4 capitalize">{v.pricePerNight}</th>
              <th className="px-6 py-4 capitalize">{v.starRating}</th>
              <th className="px-6 py-4 capitalize">{v.type}</th>
              <td className="px-6 py-4 text-right capitalize">
                <Link
                  to={`edit/${v?._id}`}
                  className="bg-primary text-white pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded font-bold hover:bg-blue-500 text-sm"
                >
                  Edit
                </Link>
              </td>
              <td className="px-6 py-4 pl-0 text-right capitalize">
                <button
                  onClick={() => dltHotel.mutate(v._id)}
                  className="bg-red text-white pt-[8px] pb-[8px] pl-[15px] pr-[15px] rounded font-bold hover:bg-blue-500 text-sm"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
