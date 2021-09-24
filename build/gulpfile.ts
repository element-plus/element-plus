import { series, parallel } from 'gulp'

import { copyStyle } from './style'
import { copyEntryTypes } from './entry-types'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import { buildEp, buildOutput, epPackage } from './utils/paths'
import { copyFullStyle } from './full-bundle'

const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))

const copySourceCode = () => async () => {
  await run(`cp -R packages ${buildEp}`)
  await run(`cp ${epPackage} ${buildEp}/package.json`)
}

const copyREADME = () => async () => {
  await run(`cp README.md ${buildOutput}/element-plus`)
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    runTask('buildComponents'),
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
    copyEntryTypes(),
    copySourceCode(),
    copyREADME()
  )
)

export * from './components'
export * from './style'
export * from './full-bundle'
export * from './helper'
