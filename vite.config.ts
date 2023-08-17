import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/hczj_datastand': {
        target: 'http://192.168.10.9:9200',
        changeOrigin: true
      }
    }
  }
})
