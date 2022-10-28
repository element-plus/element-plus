import path from 'path'
import { rm } from 'fs/promises'
import { build as tsup } from 'tsup'
import Vue from 'unplugin-vue/esbuild'
import { resolveModule } from 'local-pkg'
import { getPackage } from '@element-plus/workspace'
import { PKG_PREFIX, targetNode, targetWeb } from '@element-plus/node-constants'
import { importConfig } from './utils'
import type { BuildOptions } from './config'
import type { Plugin } from 'esbuild'
import type { Options } from 'tsup'

export async function build(packageName?: string, userConfig?: BuildOptions) {
  const pkg = await getPackage(packageName)
  if (!pkg) throw new Error("pkg doesn't exist!")

  const config = await importConfig(pkg, userConfig)
  const outDir = path.resolve(pkg.dir, 'dist')

  const plugins: Plugin[] = [Vue({})]
  const options: Options = {
    outDir,
    target: config.platform === 'web' ? targetWeb : targetNode,
    format: config.format,
    splitting: false,
    platform: config.platform === 'web' ? 'browser' : 'node',
    esbuildPlugins: plugins,
    ...config.tsup,
  }

  if (config.dts) {
    options.dts = {
      compilerOptions: {
        paths: {},
      },
    }
    options.tsconfig = resolveModule(
      `${PKG_PREFIX}/tsconfig/tsconfig.${config.platform}.json`
    )
  }

  await rm(outDir, { recursive: true, force: true })

  process.chdir(pkg.dir)
  const tasks: Array<Promise<void>> = []
  if (config.minify === false || config.minify === 'both') {
    tasks.push(
      tsup({
        ...options,
        name: 'ep-cli-tsup',
        esbuildOptions(options) {
          options.entryNames = `[dir]/[name]`
        },
      })
    )
  }
  if (config.minify === true || config.minify === 'both') {
    tasks.push(
      tsup({
        ...options,
        name: 'ep-cli-tsup-minify',
        minify: true,
        esbuildOptions(options) {
          options.entryNames = `[dir]/[name].min`
        },
      })
    )
  }

  await Promise.all(tasks)
}
