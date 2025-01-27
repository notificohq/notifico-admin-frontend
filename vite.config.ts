import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // entryFileNames: `assets/[name].js`,
        // chunkFileNames: `assets/[name].js`,
        // assetFileNames: `assets/[name].[ext]`,
        manualChunks(id) {
          if (id.includes("monaco-editor")) {
            return "monaco_editor";
          }
          if (id.includes("@mui")) {
            return "mui";
          }
        },
      },
    },
  },
});
