import path from 'path'
import { series, parallel } from 'gulp'
import { copyStyle } from './style'
import { copyEntryTypes } from './entry-types'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import { epOutput, epPackage, projRoot } from './utils/paths'
import { copyFullStyle } from './full-bundle'

const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))

export const copySourceCode = async () => {
  await run(`cp -R packages ${epOutput}`)
  await run(`cp ${epPackage} ${epOutput}/package.json`)
}

export const copyREADME = async () => {
  await run(`cp README.md ${epOutput}`)
}

export const copyDefinitions = async () => {
  const files = [path.resolve(projRoot, 'typings', 'global.d.ts')]
  await run(`cp ${files.join(' ')} ${epOutput}`)
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildComponent'),
    runTask('buildStyle'),
    runTask('buildFullBundle'),
    runTask('buildHelper'),
    withTaskName('buildEachPackages', () =>
      run('pnpm run --filter ./packages --parallel --stream build')
    )
  ),

  parallel(
    copyStyle(),
    copyFullStyle,
    copyEntryTypes,
    copySourceCode,
    copyREADME,
    copyDefinitions
  )
)

export * from './component'
export * from './style'
export * from './full-bundle'
export * from './entry-types'
export * from './helper'
