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
        thoughts: "thoughts/index.html",
        fitness: "fitness/index.html",
        eats: "eats/index.html",
        travel: "travel/index.html",
        "travel-belgium": "travel/belgium/index.html",
        "travel-london": "travel/london/index.html",
        "travel-amsterdam": "travel/amsterdam/index.html",
        "travel-guatemala": "travel/guatemala/index.html",
        "travel-mexico-city": "travel/mexico-city/index.html",
        "travel-hyderabad": "travel/hyderabad/index.html",
        "travel-kashmir": "travel/kashmir/index.html",
      },
    },
  },
});
