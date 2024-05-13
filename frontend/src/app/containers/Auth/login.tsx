import { useForm } from "react-hook-form";
import { useAuth } from "./hooks/useAuth";
import { Link } from "react-router-dom";
import { EyeOff, Eye } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Login = () => {
  const [isVisible, setVisible] = useState<boolean>(false);

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
    <form
      className="flex flex-col gap-5 w-[450px] m-auto bg-blug-500 shadow-xl shadow-blug-500/50 p-5 rounded"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-bold text-center">Sign-in</h2>

      <label
        className={twMerge(
          errors?.email
            ? "text-red text-sm font-bold flex-1"
            : "text-primary text-sm font-bold flex-1"
        )}
      >
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal text-primary"
          {...register("email", { required: "This field is required" })}
          placeholder="Enter Mail"
        ></input>
        {errors.email && (
          <span className="text-red">{errors.email.message}</span>
        )}
      </label>
      <label
        className={twMerge(
          errors?.password
            ? "text-red text-sm font-bold flex-1"
            : "text-primary text-sm font-bold flex-1"
        )}
      >
        Password
        <input
          type={isVisible ? "text" : "password"}
          className="border rounded w-full py-1 px-2 font-normal text-primary"
          {...register("password", {
            required: "This field is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          placeholder="Enter Password"
        ></input>
        {isVisible ? (
          <Eye
            className="absolute right-[8px] top-[25px] cursor-pointer"
            onClick={() => setVisible(false)}
            size={"20px"}
          />
        ) : (
          <EyeOff
            className="absolute right-[8px] top-[25px] cursor-pointer"
            onClick={() => setVisible(true)}
            size={"20px"}
          />
        )}
        {errors.password && (
          <span className="text-red">{errors.password.message}</span>
        )}
      </label>
      <div className="flex items-center justify-between">
        <div></div>
        <Link
          to={"/reset-password"}
          className="font-bold-[600] hover:text-primary hover:font-bold-[600]"
        >
          Forgot password ?
        </Link>
      </div>

      <span>
        <button
          type="submit"
          className="bg-primary text-white p-4 py-2 rounded font-bold hover:bg-blue-500 text-sm hover:opacity-[.5]"
        >
          Login
        </button>
      </span>
    </form>
  );
};
export default Login;
