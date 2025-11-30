import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/chipify/projects/4be8da15-29d1-45b6-bed4-5f6b7ff40b70/preview/',
  plugins: [react()],
  server: {
    port: 5121,
    host: '0.0.0.0',
    strictPort: true,
    hmr: {
      // HMR will be proxied through our backend
      port: 5121,
    }
  }
})
