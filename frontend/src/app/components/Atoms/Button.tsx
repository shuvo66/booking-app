import { twMerge } from "tailwind-merge";

type ButtonProps = {
  buttonName: string;
  className: string;
  type?: "submit" | "reset" | "button" | undefined;
};
export const Buttons = ({ buttonName, className, type }: ButtonProps) => {
  return (
    <button className={twMerge(className)} type={type}>
      {buttonName}
    </button>
  );
};
