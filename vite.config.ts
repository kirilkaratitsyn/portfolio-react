import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'spa',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  // Dev + preview: always serve index.html for client-side routes (e.g. /projects).
  // Preview uses sirv with SPA fallback; this keeps behavior explicit across hosts.
  preview: {
    strictPort: false,
  },
  server: {
    strictPort: false,
  },
});
