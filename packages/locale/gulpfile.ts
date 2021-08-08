import chalk from 'chalk'
import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'

export const distFolder = './lib'
const tsProject = ts.createProject('tsconfig.json')

function compile() {
  return gulp
    .src('./lang/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest(path.resolve(distFolder, './lang')))
}

function compileEntry() {
  return gulp
    .src('./index.ts')
    .pipe(tsProject())
    .pipe(gulp.dest(distFolder))
}

const distBundle = path.resolve(__dirname, '../../dist/locale')

/**
 * copy from packages/theme-chalk/lib to dist/theme-chalk
 */
function copyToLib() {
  return gulp.src(distFolder + '/**').pipe(gulp.dest(distBundle))
}

/**
 * copy pkg.json
 */

function copyPkgJson() {
  return gulp.src('./package.json').pipe(gulp.dest(distBundle))
}

export const build = gulp.series(compile, compileEntry, copyToLib, copyPkgJson)

export default build
