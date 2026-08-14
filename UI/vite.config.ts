import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  nitro: false,
  tanstackStart: {
    spa: { enabled: true, prerender: { enabled: false } },
  },
  vite: {
    // GitHub Pages project site: served at https://clintonkes.github.io/olson/
    base: process.env.NODE_ENV === "production" ? "/olson/" : "/",
    server: {
      proxy: {
        "/api": {
          target: "http://localhost:8000",
          changeOrigin: true,
        },
      },
    },
  },
});
