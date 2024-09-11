import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";
import { Toaster } from "react-hot-toast";
import App from "./App";
import ThemeContextProvider from "./contexts/ThemeContext";

const queryClient = new QueryClient();

const AppWrapper: React.FC = () => {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
        <Toaster />
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

export default AppWrapper;
