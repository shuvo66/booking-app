import { useForm } from "react-hook-form";
import { useAuth } from "./hooks/useAuth";
import { useNavigate } from "react-router-dom";

type ResetPasswordFormData = {
  email: string;
};

export const ResetPassword = () => {
  const navigator = useNavigate();

  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<ResetPasswordFormData>();
  const { resetPasswordHandler } = useAuth();

  const onSubmit = handleSubmit((value: API.ResetPasswordPayload) => {
    const payload: API.ResetPasswordPayload = {
      email: value.email,
    };
    resetPasswordHandler(payload);
    reset();
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Reset Password</h2>

      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>

      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-4 py-2 rounded font-bold hover:bg-blue-500 text-sm"
        >
          Reset Password
        </button>
      </span>
    </form>
  );
};
