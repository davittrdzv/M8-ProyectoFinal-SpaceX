import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import cesium from 'vite-plugin-cesium'

export default defineConfig({
  plugins: [
    react(),
    cesium()
  ],
  optimizeDeps: {
    include: ['resium', 'cesium'],
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  }
})
