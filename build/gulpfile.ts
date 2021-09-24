import { series, parallel } from 'gulp'

import { copyStyle } from './style'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    withTaskName('buildComponents', () =>
      run('pnpm run build:new buildComponents')
    ),
    withTaskName('buildStyle', () => run('pnpm run build:new buildStyle')),
    withTaskName('buildFullBundle', () =>
      run('pnpm run build:new buildFullBundle')
    ),
    withTaskName('buildHelper', () => run('pnpm run build:new buildHelper')),
    withTaskName('buildEachPackages', () =>
      run('pnpm run --filter ./packages --parallel --stream build')
    )
  ),

  copyStyle()
)

export * from './components'
export * from './style'
export * from './full-bundle'
export * from './helper'
