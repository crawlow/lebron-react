import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@api": path.resolve(__dirname, "./src/api"),
      "@router": path.resolve(__dirname, "./src/app/router"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@pages": path.resolve(__dirname, "./src/pages"),
      "@widgets": path.resolve(__dirname, "./src/widgets"),
      "@features": path.resolve(__dirname, "./src/features"),
      "@entities": path.resolve(__dirname, "./src/entities"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
	  @use "@assets/scss/index.scss" as *;
	  @use "@assets/styles/globals.scss" as *;
	`,
      },
    },
  },
});
