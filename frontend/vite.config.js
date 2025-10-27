import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: true, // allows access from your network / ngrok
    allowedHosts: [
      'nonlegal-figuredly-joleen.ngrok-free.dev' // 👈 your ngrok URL
    ],
    port: 5173, // optional (default)
  },
})
