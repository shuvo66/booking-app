import React, { useContext } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

type ToastMessage = {
  messages: string;
  type: "SUCCESS" | "ERROR";
};

type AppContext = {
  showToast: (toastMessage: ToastMessage) => void;
};

export const AppContext = React.createContext<AppContext | undefined>(
  undefined
);
type AppContextProviderProps = {
  children: React.ReactNode;
};

export const AppContextProvider = ({ children }: AppContextProviderProps) => {
  return (
    <AppContext.Provider
      value={{ showToast: (toastMessage) => console.log(toastMessage) }}
    >
      <ToastContainer />

      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
