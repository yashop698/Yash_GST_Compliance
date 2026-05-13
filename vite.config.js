import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Yash_GST_Compliance/',
  assetsInclude: ['**/*.md'],
})
