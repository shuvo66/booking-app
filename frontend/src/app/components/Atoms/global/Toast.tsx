import { useEffect } from "react";

type ToastProps = {
  message: string;
  type: "SUCCESS" | "ERROR";
  onClose: () => void;
};
export const Toast = ({ message, type, onClose }: ToastProps) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const styles =
    type === "SUCCESS"
      ? "fixed right-2 top-2 bg-green text-white p-4 py-2 capitalize rounded-sm"
      : "fixed right-2 top-2 bg-red text-white p-4 py-2 capitalize rounded-sm";

  return <div className={styles}>{message}</div>;
};
