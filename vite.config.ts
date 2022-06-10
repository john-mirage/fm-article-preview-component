import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/article-preview-component/",
  plugins: [vue()],
  resolve: {
    alias: {
      "@images": resolve(__dirname, "src/images"),
      "@components": resolve(__dirname, "src/components"),
    },
  },
});
