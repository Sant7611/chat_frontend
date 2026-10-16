import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc' // This is your SWC plugin
import tailwindcss from '@tailwindcss/vite'   // 1. Import Tailwind

// https://vite.dev
export default defineConfig({
  plugins: [
    react(),       // Your SWC React plugin remains untouched
    tailwindcss(), // 2. Add Tailwind here
  ],
})
