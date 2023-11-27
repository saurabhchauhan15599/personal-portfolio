import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  envPrefix: 'REACT_APP_',
  plugins: [react(), viteTsconfigPaths()],
  build: {
    outDir: 'build'
  },
  server: {
    port: 3000,
    open: true
  }
});
