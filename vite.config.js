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
      input: {
        main: './assets/js/main.js'
      },
      output: {
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    },
    manifest: false
  },
  server: {
    port: 5173,
    strictPort: true,
    cors: true,
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  css: {
    devSourcemap: true
  }
})