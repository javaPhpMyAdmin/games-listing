import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@/Components': '/src/Components',
      '@/assets': '/src/assets',
      '@/Context': '/src/Context',
      '@/hooks': '/src/hooks',
      '@/Pages': '/src/Pages',
      '@/Services': '/src/Services',
      '@/Common': '/src/Common',
    },
  },
});
