import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: "/Druva-Portfolio-Web-Interface/", // Important for GitHub Pages

  server: {
    host: "localhost", // "::" can cause issues on some systems
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      viteStaticCopy({
        targets: [
          {
            src: "dist/index.html",
            dest: ".",     // will copy to dist/404.html
            rename: "404.html",
          },
        ],
        flatten: false,
        watch: false,
      }),
  ].filter(Boolean), // Remove any falsy plugins

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      input: "./index.html", // Entry point
    },
    outDir: "dist", // default, but can be explicitly mentioned
    emptyOutDir: true,
  },
}));
