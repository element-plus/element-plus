import chalk from 'chalk'
import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

import path from 'path'

const noElPrefixFile = /(index|base|display)/

const sass = gulpSass(dartSass)
export const distFolder = './lib'

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function compile() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .pipe(
      cleanCSS({}, details => {
        console.log(
          `${chalk.cyan(details.name)}: ${chalk.yellow(
            details.stats.originalSize / 1000,
          )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`,
        )
      }),
    )
    .pipe(
      rename(path => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `el-${path.basename}`
        }
      }),
    )
    .pipe(gulp.dest(distFolder))
}

/**
 * copy font to lib/fonts
 * @returns
 */
function copyFont() {
  return gulp.src('./src/fonts/**').pipe(gulp.dest(`${distFolder}/fonts`))
}

const distBundle = path.resolve(__dirname, '../../dist/theme-chalk')

/**
 * copy from packages/theme-chalk/lib to dist/theme-chalk
 */
function copyToLib() {
  return gulp.src(distFolder + '/**').pipe(gulp.dest(distBundle))
}

/**
 * copy source file to packages
 */

function copySourceToLib() {
  return gulp.src('./src/**').pipe(gulp.dest(path.resolve(distBundle, './src')))
}

/**
 * copy pkg.json
 */

function copyPkgJson() {
  return gulp.src('./package.json').pipe(gulp.dest(distBundle))
}

export const build = gulp.series(
  compile,
  copyFont,
  copyToLib,
  copySourceToLib,
  copyPkgJson,
)

export default build
