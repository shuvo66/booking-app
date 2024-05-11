import { useFormContext } from "react-hook-form";
import { uploadAPI } from "../../../libs/api";

const ImagesSection = () => {
  const {
    register,
    formState: { errors },
    watch,
  } = useFormContext<API.HotelFormData>();

  const existingImageUrls = watch("image");
  console.log("existingImageUrls", existingImageUrls);
  // const handleDelete = (
  //   event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  //   imageUrl: string
  // ) => {
  //   event.preventDefault();
  //   setValue(
  //     "image",
  //     existingImageUrls.filter((url) => url !== imageUrl)
  //   );
  // };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-3">Images</h2>
      <div className="border rounded p-4 flex flex-col gap-4">
        {/* {existingImageUrls && (
          <div className="grid grid-cols-6 gap-4">
            {existingImageUrls.map((url) => (
              <div className="relative group">
                <img src={url} className="min-h-full object-cover" />
                <button
                  onClick={(event) => handleDelete(event, url)}
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 text-white"
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
        )} */}

        <input
          type="file"
          accept="image/*"
          className="w-full text-gray-700 font-normal"
          {...register("imageFiles", {
            validate: (image) => {
              const totalLength =
                image.length + (existingImageUrls?.length || 0);

              if (totalLength === 0) {
                return "this field is required!";
              }

              return true;
            },
          })}
        />
      </div>
      {errors.imageFiles && (
        <span className="text-red-500 text-sm font-bold">
          {errors.imageFiles.message}
        </span>
      )}
    </div>
  );
};

export default ImagesSection;
