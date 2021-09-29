import { series, parallel } from 'gulp'

import { copyStyle } from './style'
import { copyEntryTypes } from './entry-types'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import { epOutput, buildOutput, epPackage } from './utils/paths'
import { copyFullStyle } from './full-bundle'

const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))

const copySourceCode = () => async () => {
  await run(`cp -R packages ${epOutput}`)
  await run(`cp ${epPackage} ${epOutput}/package.json`)
}

const copyREADME = () => async () => {
  await run(`cp README.md ${buildOutput}/element-plus`)
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
    copySourceCode(),
    copyREADME()
  )
)

export * from './component'
export * from './style'
export * from './full-bundle'
export * from './entry-types'
export * from './helper'
