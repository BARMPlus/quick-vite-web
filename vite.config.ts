import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import react from '@vitejs/plugin-react'
import replace from '@rollup/plugin-replace'
import { join } from 'path'

const cwd = process.cwd()

const replaceOptions = { __DATE__: new Date().toISOString() }

export default defineConfig({
  base: process.env.PUBLIC_PATH || '/',
  build: {
    outDir: 'build',
  },
  plugins: [react(), tsconfigPaths(), replace(replaceOptions)],
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
