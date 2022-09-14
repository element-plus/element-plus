#!/usr/bin/env node
import { spawnSync } from 'node:child_process'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

if (process.env.EP_BUILD === 'dev') {
  const entryPath = path.resolve(
    fileURLToPath(import.meta.url),
    '../../src/index.ts'
  )
  const { status } = spawnSync(
    'pnpm',
    ['tsx', '-C', 'dev', entryPath, ...process.argv.slice(2)],
    {
      stdio: 'inherit',
    }
  )
  process.exit(status)
} else if (process.env.EP_BUILD === 'bundle') {
  import('../dist/index.js')
} else {
  import('@element-plus/cli-published')
}
