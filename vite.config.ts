import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  base: "/",
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        home: resolve(process.cwd(), "index.html"),
        now: resolve(process.cwd(), "now/index.html"),
        work: resolve(process.cwd(), "work/index.html"),
        thoughts: resolve(process.cwd(), "thoughts/index.html"),
        photography: resolve(process.cwd(), "photography/index.html"),
      },
    },
  },
});
