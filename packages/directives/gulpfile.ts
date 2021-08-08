import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'

export const distFolder = './lib'
const tsProject = ts.createProject('tsconfig.json')

function compile() {
  return gulp
    .src(['./**/*.ts', '!./node_modules', '!./__tests__/*.ts', '!./gulpfile.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest(distFolder))
}

const distBundle = path.resolve(__dirname, '../../dist/directives')

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

export const build = gulp.series(compile, copyToLib, copyPkgJson)

export default build
