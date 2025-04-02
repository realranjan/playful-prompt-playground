
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    port: 8080,
    open: true,
  },
  plugins: [
    react({
      // Add TypeScript configuration override
      tsDecorators: true,
    }),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Add esbuild configuration to handle TypeScript
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    // Avoid TypeScript reference errors by letting esbuild handle TS
    tsconfig: './src/vite-tsconfig.json'
  },
}));
