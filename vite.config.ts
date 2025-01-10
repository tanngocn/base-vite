import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from 'tailwindcss';
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  resolve: {
    alias: {
      '@/components': '/src/components',
      '@layouts': '/src/layouts',
      '@/lib': '/src/lib',
      '@/views': '/src/views',
      '@/assets': '/src/assets',
    },
  },
});
