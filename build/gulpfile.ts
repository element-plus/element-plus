import path from 'path'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import { buildOutput, epOutput, epPackage, projRoot } from './utils/paths'
import { buildConfig } from './build-info'
import type { TaskFunction } from 'gulp'
import type { Module } from './build-info'

const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))

export const copyFiles = () => {
  const copyTypings = async () => {
    const src = path.resolve(projRoot, 'typings', 'global.d.ts')
    await run(`cp ${src} ${epOutput}`)
  }

  return Promise.all([
    run(`cp ${epPackage} ${path.join(epOutput, 'package.json')}`),
    run(`cp README.md ${epOutput}`),
    copyTypings(),
  ])
}

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = `${buildOutput}/types/`
  const copy = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      run(`rsync -a ${src} ${buildConfig[module].output.path}/`)
    )

  return parallel(copy('esm'), copy('cjs'))(done)
}

export const copyFullStyle = async () => {
  await run(`mkdir -p ${epOutput}/dist`)
  await run(`cp ${epOutput}/theme-chalk/index.css ${epOutput}/dist/index.css`)
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('generateTypesDefinitions'),
    runTask('buildHelper'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
)

export * from './types-definitions'
export * from './modules'
export * from './full-bundle'
export * from './helper'
