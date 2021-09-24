import { series, parallel } from 'gulp'
import rimraf from 'rimraf'

import { buildComponents } from './components'
import { buildStyle, copyStyle } from './style'
import { buildOutput } from './utils/paths'
import { run } from './utils/process'
import { withTaskName } from './utils/gulp'
import type { TaskFunction } from 'gulp'

export const clean: TaskFunction = (done) => rimraf(buildOutput, done)

export default (async (done) => {
  series([
    clean,
    parallel([
      buildComponents,
      buildStyle,
      withTaskName('buildEachPackages', () =>
        run('pnpm run --filter ./packages --parallel --stream build')
      ),
    ]),

    copyStyle(),
  ])(done)
}) as TaskFunction

export * from './components'
export * from './style'
