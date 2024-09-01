import React from "react";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import ThemeContextProvider from "./contexts/ThemeContext";

const queryClient = new QueryClient();

const AppWrapper: React.FC = () => {
  return (
    <ThemeContextProvider>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </ThemeContextProvider>
  );
};

export default AppWrapper;
