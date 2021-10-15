import path from 'path'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import { buildOutput, epOutput, epPackage, projRoot } from './utils/paths'
import { copyFullStyle } from './full-bundle'
import { buildConfig } from './info'
import type { Module } from './info'

const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))

export const copyDefinitions = async () => {
  const files = [path.resolve(projRoot, 'typings', 'global.d.ts')]
  await run(`cp ${files.join(' ')} ${epOutput}`)
}

export const copyFiles = async () => {
  await run(`cp ${epPackage} ${path.join(epOutput, 'package.json')}`)
  await run(`cp README.md ${epOutput}`)
}

function copyTypes() {
  const src = `${buildOutput}/types/`
  const copy = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      run(`rsync -a ${src} ${buildConfig[module].output.path}/`)
    )

  return parallel(copy('esm'), copy('cjs'))
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    runTask('genComponentTypes'),
    runTask('buildHelper'),
    withTaskName('buildThemeChalk', () =>
      run('pnpm run -C packages/theme-chalk build')
    )
  ),

  parallel(copyFullStyle, copyDefinitions, copyTypes(), copyFiles)
)

export * from './component-types'
export * from './modules'
export * from './full-bundle'
export * from './helper'
