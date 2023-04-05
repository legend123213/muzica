import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // this will allow you to import images like `import image from '@/assets/image.png'`
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // configure how assets are processed and emitted
  assetsInclude: /\.(png|jpe?g|gif|svg)$/i,
});
