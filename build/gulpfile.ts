import path from 'path'
import { mkdir, copyFile } from 'fs/promises'
import { copy } from 'fs-extra'
import { series, parallel } from 'gulp'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import {
  buildOutput,
  epOutput,
  epPackage,
  epRoot,
  projRoot,
} from './utils/paths'
import { buildConfig } from './build-info'
import type { TaskFunction } from 'gulp'
import type { Module } from './build-info'

const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))

export const copyFiles = () => {
  const copyTypings = async () => {
    await copyFile(
      path.resolve(projRoot, 'typings/global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    )
  }

  return Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(epRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyTypings(),
  ])
}

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'theme-chalk/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
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
