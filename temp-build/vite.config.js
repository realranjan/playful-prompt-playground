
import { defineConfig } from 'vite'; 
import react from '@vitejs/plugin-react'; 

export default defineConfig({
  plugins: [
    react({
      // Add TypeScript configuration override
      tsDecorators: true,
    })
  ],
  server: {
    port: 8080
  },
  // Add esbuild configuration to handle TypeScript
  esbuild: {
    logOverride: { 'this-is-undefined-in-esm': 'silent' },
    // Use a custom tsconfig for build
    tsconfig: '../src/vite-tsconfig.json'
  }
});
