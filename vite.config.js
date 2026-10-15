import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // keep CRA's output folder so the Netlify publish directory doesn't change
  build: { outDir: 'build' },
  server: { port: 3000, open: true },
})
