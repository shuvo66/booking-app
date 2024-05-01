import { RouterProvider } from "react-router-dom";
import routes from "./routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ErrorBoundary from "./components/ErrorBoundary";

import { AppContextProvider } from "./layouts/context/appContext";
function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ErrorBoundary>
        <AppContextProvider>
          <RouterProvider router={routes} />
        </AppContextProvider>
      </ErrorBoundary>
    </QueryClientProvider>
  );
}

export default App;
