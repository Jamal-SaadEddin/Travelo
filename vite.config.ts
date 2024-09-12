import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["@mui/material/Box", "@mui/icons-material"],
  },
  resolve: {
    alias: {
      "@src": "/src",
    },
  },
});
