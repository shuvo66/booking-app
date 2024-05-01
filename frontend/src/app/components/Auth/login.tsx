import { useForm } from "react-hook-form";
import { useAuth } from "./hooks/useAuth";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

export const Login = () => {
  const {
    register,
    reset,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormData>();
  const { loginHandler } = useAuth();

  const onSubmit = handleSubmit((value: API.FormLogin) => {
    const payload: API.LoginPayload = {
      email: value.email,
      password: value.password,
    };
    loginHandler(payload);
    reset();
  });

  return (
    <form className="flex flex-col gap-5" onSubmit={onSubmit}>
      <h2 className="text-3xl font-bold">Sign-In</h2>

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
      <label className="text-gray-700 text-sm font-bold flex-1">
        Password
        <input
          type="password"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
        ></input>
        {errors.password && (
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>

      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-4 py-2 rounded font-bold hover:bg-blue-500 text-sm"
        >
          Login
        </button>
      </span>
    </form>
  );
};
