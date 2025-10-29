import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    allowedHosts: ['f0a2e4ec0257.ngrok-free.app'], // 👈 Add your ngrok host here
    port: 5173, // Optional: explicitly specify your port if needed
  },
});
