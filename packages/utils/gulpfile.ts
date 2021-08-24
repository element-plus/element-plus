import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'
import { buildOutput } from '../../build/paths'

export const esm = './es'
export const cjs = './lib'

const inputs = ['./**/*.ts', '!gulpfile.ts', '!./node_modules', '!./tests/*.ts']

function compileEsm() {
  return gulp
    .src(inputs)
    .pipe(ts.createProject('tsconfig.json')())
    .pipe(gulp.dest(esm))
}

function compileCjs() {
  return gulp
    .src(inputs)
    .pipe(
      ts.createProject('tsconfig.json', {
        module: 'commonjs',
      })(),
    )
    .pipe(gulp.dest(cjs))
}

const distBundle = path.resolve(buildOutput, './element-plus')

/**
 * copy from packages/theme-chalk/lib to dist/theme-chalk
 */
function copyEsm() {
  return gulp
    .src(cjs + '/**')
    .pipe(gulp.dest(path.resolve(distBundle, './lib/utils')))
}

function copyCjs() {
  return gulp
    .src(esm + '/**')
    .pipe(gulp.dest(path.resolve(distBundle, './es/utils')))
}

export const build = gulp.series(compileEsm, compileCjs, copyEsm, copyCjs)

export default build
