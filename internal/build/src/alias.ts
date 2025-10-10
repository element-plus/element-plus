import path from 'node:path'
import { fileURLToPath } from 'node:url'

const packages = [
  '@element-plus/components',
  '@element-plus/constants',
  '@element-plus/directives',
  '@element-plus/hooks',
  '@element-plus/utils',
]

export const alias = Object.fromEntries(
  packages.map((p) => [p, resolveEntry(p)])
)
console.log(import.meta.url, fileURLToPath(import.meta.url))
function resolveEntry(p: string) {
  return path.resolve(
    fileURLToPath(import.meta.url),
    `../../packages/${p}/src/index.ts`
  )
}
