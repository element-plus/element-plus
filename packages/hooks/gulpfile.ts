import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'

export const distFolder = './lib'
const tsProject = ts.createProject('tsconfig.json')

function compile() {
  return gulp
    .src(['./**/*.ts', '!./node_modules', '!./gulpfile.ts', '!./__tests__/*.ts'])
    .pipe(tsProject())
    .pipe(gulp.dest(distFolder))
}


const distBundle = path.resolve(__dirname, '../../dist/hooks')

/**
 * copy from packages/hooks/lib to dist/hooks
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
