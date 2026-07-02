import { defineConfig } from "vite";

//Vite uses the "@vitejs/plugin-react" plugin, which implements React Fast Refresh.
//This is what makes HMR "smart" for React components:
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
});
