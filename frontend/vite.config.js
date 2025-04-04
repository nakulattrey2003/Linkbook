import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [
    tailwindcss({
      darkMode: "class", // Ensure dark mode works based on the "dark" class
      theme: {
        extend: {},
      },
    }),
  ],
});
