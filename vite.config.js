import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Configuración estándar de Vite + React.
// Puerto fijo en 5173 para que las instrucciones de "npm run dev" sean predecibles.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
  },
});
