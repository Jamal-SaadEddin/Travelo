import ThemeContextProvider from "@src/contexts/ThemeContext";
import AppRoutes from "@src/routes/router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";

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
