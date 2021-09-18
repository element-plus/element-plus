import path from 'path'
import gulp from 'gulp'
import ts from 'gulp-typescript'
import { buildOutput } from '../../build/paths'
import rewriter from '../../build/gulp-rewriter'

export const esm = './es'
export const cjs = './lib'
const tsProject = ts.createProject('tsconfig.json')

const inputs = [
  './**/*.ts',
  '!./node_modules',
  '!./gulpfile.ts',
  '!./__tests__/*.ts',
]

function compileEsm() {
  return gulp
    .src(inputs)
    .pipe(tsProject())
    .pipe(rewriter())
    .pipe(gulp.dest(esm))
}

function compileCjs() {
  return gulp
    .src(inputs)
    .pipe(
      ts.createProject('tsconfig.json', {
        module: 'commonjs',
      })()
    )
    .pipe(rewriter())
    .pipe(gulp.dest(cjs))
}

const distBundle = path.resolve(buildOutput, './element-plus')

/**
 * copy from packages/hooks/lib to dist/hooks
 */
function copyEsm() {
  return gulp
    .src(`${cjs}/**`)
    .pipe(gulp.dest(path.resolve(distBundle, 'lib/hooks')))
}

function copyCjs() {
  return gulp
    .src(`${esm}/**`)
    .pipe(gulp.dest(path.resolve(distBundle, 'es/hooks')))
}

export const build = gulp.series(compileEsm, compileCjs, copyEsm, copyCjs)

export default build
