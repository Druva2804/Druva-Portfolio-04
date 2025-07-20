import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from "vite-plugin-static-copy";

export default defineConfig(({ mode }) => ({
  // base: "/", // Not needed for Vercel

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
            src: "dist/index.html",
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
