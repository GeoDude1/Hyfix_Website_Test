import { copyFileSync, existsSync } from "fs";
import { join } from "path";
import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";
import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// After build, copy index.html to 404.html so /home, /about, /applications work on reload (GitHub Pages, etc.)
function copyIndexTo404() {
  return {
    name: "copy-index-to-404",
    closeBundle() {
      const outDir = join(process.cwd(), "dist");
      const index = join(outDir, "index.html");
      const fallback = join(outDir, "404.html");
      if (existsSync(index)) {
        copyFileSync(index, fallback);
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === "development" && screenGraphPlugin(),
    copyIndexTo404(),
  ],
  publicDir: "./static",
  base: "/Hyfix_Website_Test/",
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
}));
