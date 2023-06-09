import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import { join } from 'path'
import dns from 'dns'

const cwd = process.cwd()

dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  base: process.env.PUBLIC_PATH || '/',
  build: {
    outDir: 'build',
  },
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 7000,
    strictPort: true,
  },
  resolve: {
    alias: [
      { find: '@', replacement: join(cwd, './src') },
      { find: /^~/, replacement: '' },
    ],
  },
})
