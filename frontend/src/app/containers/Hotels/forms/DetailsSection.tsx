import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const {
    register,
    formState: { errors },
  } = useFormContext<API.HotelFormData>();
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-3xl font-bold mb-3">Add Hotel</h1>
      <label className="text-primary text-sm font-bold flex-1">
        Name
        <input
          type="text"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("name", { required: "This field is required" })}
        ></input>
        {errors.name && <span className="text-red">{errors.name.message}</span>}
      </label>

      <div className="flex gap-4">
        <label className="text-primary text-sm font-bold flex-1">
          City
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("city", { required: "This field is required" })}
          ></input>
          {errors.city && (
            <span className="text-red">{errors.city.message}</span>
          )}
        </label>
        <label className="text-primary text-sm font-bold flex-1">
          Country
          <input
            type="text"
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("country", { required: "This field is required" })}
          ></input>
          {errors.country && (
            <span className="text-red">{errors.country.message}</span>
          )}
        </label>
      </div>

      <label className="text-primary text-sm font-bold flex-1">
        Description
        <textarea
          rows={10}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("description", { required: "This field is required" })}
        ></textarea>
        {errors.description && (
          <span className="text-red">{errors.description.message}</span>
        )}
      </label>
      <div className="flex gap-4">
        <label className="text-primary text-sm font-bold flex-1">
          Price Per Night
          <input
            type="number"
            min={1}
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("pricePerNight", {
              required: "This field is required",
            })}
          ></input>
          {errors.pricePerNight && (
            <span className="text-red">{errors.pricePerNight.message}</span>
          )}
        </label>
        <label className="text-primary text-sm font-bold flex-1">
          Star Rating
          <select
            {...register("starRating", {
              required: "This field is required",
            })}
            className="border rounded w-full py-1 px-2 font-normal"
          >
            <option value="" className="text-sm font-bold">
              Select as Rating
            </option>
            {[1, 2, 3, 4, 5].map((num, i) => (
              <option value={num} key={i}>
                {num}
              </option>
            ))}
          </select>
          {errors.starRating && (
            <span className="text-red">{errors.starRating.message}</span>
          )}
        </label>
      </div>
    </div>
  );
};
export default DetailsSection;
