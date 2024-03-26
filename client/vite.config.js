import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      // the address that u serve in the backend
      "/api": "http://localhost:3000/",
    },
  },
})

// api => localhost:3000/api
// index.html
// styles.css
// app.js