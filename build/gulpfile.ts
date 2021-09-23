import gulp from 'gulp'

import { buildComponents } from './components'

export const build = gulp.parallel([buildComponents])
