import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ mode }) => ({
  base: "/", // Optional but safe

  server: {
    host: "localhost",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),
    mode === "production" &&
      viteStaticCopy({
        targets: [
          {
            src: "index.html", // ✅ not dist/index.html
            dest: ".",
            rename: "404.html",
          },
        ],
        flatten: false,
        watch: false,
      }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      input: "./index.html",
    },
    outDir: "dist",
    emptyOutDir: true,
  },
}));
