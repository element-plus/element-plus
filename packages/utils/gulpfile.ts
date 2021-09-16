import path from 'path'
import gulp from 'gulp'
import ts from 'gulp-typescript'
import { buildOutput } from '../../build/paths'

import type { Settings } from 'gulp-typescript'

export const esm = './es'
export const cjs = './lib'

const inputs = ['./**/*.ts', '!gulpfile.ts', '!./node_modules', '!./tests/*.ts']

function createProject(settings: Settings = {}) {
  return ts.createProject('tsconfig.json', {
    // temporarily disabled
    // TODO: remove this
    strict: false,
    ...settings,
  })
}

function compileEsm() {
  return gulp.src(inputs).pipe(createProject()()).pipe(gulp.dest(esm))
}

function compileCjs() {
  return gulp
    .src(inputs)
    .pipe(createProject({ module: 'commonjs' })())
    .pipe(gulp.dest(cjs))
}

const distBundle = path.resolve(buildOutput, './element-plus')

/**
 * copy from packages/theme-chalk/lib to dist/theme-chalk
 */
function copyEsm() {
  return gulp
    .src(`${cjs}/**`)
    .pipe(gulp.dest(path.resolve(distBundle, './lib/utils')))
}

function copyCjs() {
  return gulp
    .src(`${esm}/**`)
    .pipe(gulp.dest(path.resolve(distBundle, './es/utils')))
}

export const build = gulp.series(compileEsm, compileCjs, copyEsm, copyCjs)

export default build
