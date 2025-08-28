import { parseArgs } from 'node:util'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { watch } from 'rolldown'

console.log('dev2.js')
const { positionals: targets } = parseArgs({ allowPositionals: true })

for (const target of targets) {
  const packageJSON = JSON.parse(
    await readFile(path.resolve(`packages/${target}/package.json`), 'utf8')
  )
  const deps = []
  if (packageJSON.dependencies)
    deps.push(...Object.keys(packageJSON.dependencies))
  if (packageJSON.devDependencies)
    deps.push(...Object.keys(packageJSON.devDependencies))

  console.log(deps)
  const watcher = watch({
    input: `packages/${target}/index.ts`,
    output: {
      file: `packages/${target}/dist/bundle.js`,
      format: 'cjs',
    },
    external: deps,
  })

  watcher.on('event', (data) => {
    if (data.code === 'BUNDLE_START') console.log(performance.now())
    if (data.code === 'BUNDLE_END') {
      console.log(performance.now())
      console.log(`build time:${data.duration}ms`)
    }
  })
}
