import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: "index.html",
        work: "work/index.html",
        fitness: "fitness/index.html",
        eats: "eats/index.html",
        travel: "travel/index.html",
      },
    },
  },
});
