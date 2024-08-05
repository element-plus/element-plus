import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['./index.ts'],
  clean: true,
  format: ['cjs', 'esm'],
})
