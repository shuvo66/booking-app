import React, { useContext, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { Toast } from "../../components/Atoms/global/Toast";

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
  const [toast, setToast] = useState<ToastMessage | undefined>(undefined);
  return (
    <AppContext.Provider
      value={{
        showToast: (toastMessage) => setToast(toastMessage),
      }}
    >
      {toast && (
        <Toast
          message={toast?.messages}
          type={toast?.type}
          onClose={() => setToast(undefined)}
        />
      )}

      {children}
    </AppContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAppContext = () => {
  const context = useContext(AppContext);
  return context as AppContext;
};
