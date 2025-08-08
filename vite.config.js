import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Recreate __dirname in ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@src': path.resolve(__dirname, './src'),
      '@contacts': path.resolve(__dirname, './src/components/contacts'),
      '@education': path.resolve(__dirname, './src/components/education'),
      '@experience': path.resolve(__dirname, './src/components/experience'),
      '@introduction': path.resolve(__dirname, './src/components/introduction'),
      '@projects': path.resolve(__dirname, './src/components/projects'),
      '@reusable': path.resolve(__dirname, './src/components/reusable'),
      '@skills': path.resolve(__dirname, './src/components/skills'),
    },
  },
});
