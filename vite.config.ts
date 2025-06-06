import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    emptyOutDir: true
  },
  root: '.', // 👈 Important: use root as current directory
  publicDir: 'public', // 👈 Ensures public/index.html is used
})
