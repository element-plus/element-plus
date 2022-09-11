import { defineConfig } from './src/config'

export default defineConfig({
  platform: 'node',
  tsup: {
    entry: ['src/index.ts', 'src/config.ts'],
  },
})
