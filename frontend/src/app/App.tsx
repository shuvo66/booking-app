import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <RouterProvider router={routes} />
        <ToastContainer />
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
