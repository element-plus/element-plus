import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'

export const distFolder = './lib'
const tsProject = ts.createProject('tsconfig.json')

function compile() {
  return gulp
    .src(['./**/*.ts', '!gulpfile.ts', '!./node_modules', '!./tests/*.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest(distFolder))
}

function compileMenu() {
  return gulp
    .src('./menu/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest(path.resolve(distFolder, './menu')))
}

const distBundle = path.resolve(__dirname, '../../dist/utils')

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

export const build = gulp.series(compile, compileMenu, copyToLib, copyPkgJson)

export default build
