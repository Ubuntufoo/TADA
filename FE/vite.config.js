// Purpose: Vite configuration file

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // proxy: {
    //   "/api": {
    //     target: "http://127.0.0.1:5000", // Replace with your API URL
    //     changeOrigin: true,
    //     rewrite: (path) => path.replace(/^\/api/, ""),
    //   },
    // },
  },
})