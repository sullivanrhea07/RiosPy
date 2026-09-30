import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Relative base so the built app works on GitHub Pages
// (both user sites and project sites like username.github.io/repo-name/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
