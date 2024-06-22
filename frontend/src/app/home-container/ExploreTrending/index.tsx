import { useHotel } from "../../containers/Hotels/hooks/usehotel";

const ExploreTrending = () => {
  const { hotelList } = useHotel({});
  return (
    <div>
      <h4 className="text-2xl font-bold mb-1 ml-1">Trending destinations</h4>
      <p className="text-xl font-normal mb-2 ml-1">
        Most popular choices for travellers from Bangladesh
      </p>
      <div className="grid grid-cols-2 gap-4">
        {hotelList?.data.map((hotel, index) => (
          <div
            key={index}
            className="relative w-full h-[275px] bg-primary m-1 rounded-md shadow-md hover:shadow-xl"
          >
            <h4 className="absolute top-2 left-2 bg-primary text-white capitalize px-3 py-1 rounded-md">
              {hotel.country}
            </h4>
            <img src={hotel.imageUrls} alt={"Hotel"} className="h-full" />
          </div>
        ))}
      </div>
    </div>
  );
};
export default ExploreTrending;
