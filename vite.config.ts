import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// IMPORTANTE: cambia "iberdrola-premium" por el nombre exacto de tu repo de GitHub.
// Si despliegas en un dominio raíz (no subcarpeta), pon base: "/"
export default defineConfig({
  base: "/iberdrola-premium/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
