import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  publicDir: 'public',  // Explicitly set public directory
  build: {
    copyPublicDir: true,  // Ensure public files are copied
  },
});
