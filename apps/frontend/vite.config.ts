import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  cacheDir: '../../node_modules/.vite-cache/frontend',
  server: {
    port: 4000,
  },
})
