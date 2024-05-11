import { useForm } from "react-hook-form";
import { useAuth } from "./hooks/useAuth";
import { useState } from "react";
import { EyeOff, Eye } from "lucide-react";

type RegisterFormData = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
};

const Register = () => {
  const [isVisible, setVisible] = useState<boolean>(false);
  const [isConfirmVisible, setConfirmVisible] = useState<boolean>(false);

  const {
    register,
    reset,
    watch,
    formState: { errors },
    handleSubmit,
  } = useForm<RegisterFormData>();
  const { register: registraion } = useAuth();
  const onSubmit = handleSubmit((value: API.FormRegister) => {
    const payload: API.RegisterPayload = {
      email: value.email,
      password: value.password,
      firstName: value.firstName,
      lastName: value.lastName,
    };
    registraion(payload);
    reset();
  });

  return (
    <form
      className="flex flex-col gap-5 w-[450px] m-auto bg-blug-500 shadow-xl shadow-blug-500/50 p-5 rounded"
      onSubmit={onSubmit}
    >
      <h2 className="text-3xl font-bold text-center mb-2">Create an Account</h2>
      <div className="flex flex-col md:flex-row gap-5">
        <label className="text-gray-700 text-sm font-bold flex-1">
          First Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("firstName", { required: "This field is required" })}
            placeholder="Enter First-Name"
          ></input>
          {errors.firstName && (
            <span className="text-red-500">{errors.firstName.message}</span>
          )}
        </label>
        <label className="text-gray-700 text-sm font-bold flex-1">
          Last Name
          <input
            className="border rounded w-full py-1 px-2 font-normal"
            {...register("lastName", { required: "This field is required" })}
            placeholder="Enter Last-Name"
          ></input>
          {errors.lastName && (
            <span className="text-red-500">{errors.lastName.message}</span>
          )}
        </label>
      </div>
      <label className="text-gray-700 text-sm font-bold flex-1">
        Email
        <input
          type="email"
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("email", { required: "This field is required" })}
          placeholder="Enter Mail"
        ></input>
        {errors.email && (
          <span className="text-red-500">{errors.email.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1 relative">
        Password
        <input
          type={isVisible ? "text" : "password"}
          className="border rounded w-full py-1 px-2 font-normal"
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
          <span className="text-red-500">{errors.password.message}</span>
        )}
      </label>
      <label className="text-gray-700 text-sm font-bold flex-1 relative">
        Confirm Password
        <input
          type={isConfirmVisible ? "text" : "password"}
          className="border rounded w-full py-1 px-2 font-normal"
          {...register("confirmPassword", {
            validate: (val) => {
              if (!val) {
                return "This field is required";
              } else if (watch("password") !== val) {
                return "Your passwords do no match";
              }
            },
          })}
          placeholder="Enter Confirm Password"
        ></input>
        {isConfirmVisible ? (
          <Eye
            className="absolute right-[8px] top-[25px] cursor-pointer"
            onClick={() => setConfirmVisible(false)}
            size={"20px"}
          />
        ) : (
          <EyeOff
            className="absolute right-[8px] top-[25px] cursor-pointer"
            onClick={() => setConfirmVisible(true)}
            size={"20px"}
          />
        )}
        {errors.confirmPassword && (
          <span className="text-red-500">{errors.confirmPassword.message}</span>
        )}
      </label>
      <span>
        <button
          type="submit"
          className="bg-blue-600 text-white p-4 py-2 rounded font-bold hover:bg-blue-500 text-sm"
        >
          Create Account
        </button>
      </span>
    </form>
  );
};
export default Register;
