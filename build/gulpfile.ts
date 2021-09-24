import gulp from 'gulp'
import rimraf from 'rimraf'

import { buildComponents } from './components'
import { buildStyle } from './style'
import { buildOutput } from './utils/paths'

export const clean = (done: () => void) => rimraf(buildOutput, done)

export default gulp.series([
  clean,
  gulp.parallel([buildComponents, buildStyle]),
])
