import { parseArgs } from 'node:util'
import { readFile } from 'node:fs/promises'
import path from 'node:path'
import { watch } from 'rolldown'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'

const { positionals: targets } = parseArgs({ allowPositionals: true })

const packageJSONs = await Promise.all(targets.map(async (target) => {
  const packageJSON = JSON.parse(
    await readFile(path.resolve(`packages/${target}/package.json`), 'utf8')
  )
  return packageJSON
}))

const options = targets.map((target, index) => {
  const deps = []
  const packageJSON = packageJSONs[index]
  if (packageJSON.dependencies)
    deps.push(...Object.keys(packageJSON.dependencies))
  if (packageJSON.devDependencies)
    deps.push(...Object.keys(packageJSON.devDependencies))
  return {
    input: `packages/${target}/index.ts`,
    output: {
      file: `packages/${target}/dist/bundle.js`,
      format: 'esm',
    },
    plugins: target === 'components' ? [
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        shortVmodel: false,
        plugins: {
          vue: vue({
            isProduction: true,
            template: {
              compilerOptions: {
                hoistStatic: false,
                cacheHandlers: false,
              },
            },
          }),
          vueJsx: vueJsx(),
        },
      }),
    ] : undefined,
    external: deps
  }
})
const watcher = watch(options)
watcher.on('event', (data) => {
  if (data.code === 'BUNDLE_END') {
    console.log(data.output[0], ` ${data.duration}ms`)
  }
})
