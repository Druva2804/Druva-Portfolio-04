import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { viteStaticCopy } from 'vite-plugin-static-copy'; // 👈 Add this

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: '/Druva-Portfolio-Web-Interface/',

  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    viteStaticCopy({
      targets: [
        {
          src: 'dist/index.html',
          dest: '.', // This will copy to dist/404.html
          rename: '404.html',
        },
      ],
    }),
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  build: {
    rollupOptions: {
      input: './index.html',
    },
  },
}));
