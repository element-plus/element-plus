import { defineWorkspace } from 'vitest/config'

export default defineWorkspace([
  './vitest.config.mts',
  './ssr-testing/vitest.config.ts',
])
