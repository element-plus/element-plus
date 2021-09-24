import { series, parallel } from 'gulp'

import { buildComponents } from './components'
import { buildStyle, copyStyle } from './style'
import { buildFullBundle } from './full-bundle'
import { buildHelper } from './helper'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'

export default series(
  withTaskName('clean', () => run('pnpm run clean')),

  parallel(
    buildComponents,
    buildStyle,
    buildFullBundle,
    buildHelper,
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
