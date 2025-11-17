import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  publicDir: false,
  build: {
    outDir: 'static/dist',
    emptyOutDir: false,
    rollupOptions: {
      input: './assets/js/main.js'
    },
    manifest: true
  },
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
    origin: 'http://localhost:1313',
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: {
    devSourcemap: true
  }
})