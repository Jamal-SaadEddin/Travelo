import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";
import ThemeContextProvider from "./contexts/ThemeContext";
import AppRoutes from "./routes/router";

const queryClient = new QueryClient();

const App: React.FC = () => {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <AppRoutes />
        <Toaster />
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

export default App;
