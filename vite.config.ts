import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Les chemins relatifs permettent le déploiement dans un sous-dossier GitHub Pages.
  base: "./",
});
