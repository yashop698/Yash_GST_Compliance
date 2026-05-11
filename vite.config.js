import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/Yash_GST_Compliance/',
  plugins: [react()],
  assetsInclude: ['**/*.md'],
})
