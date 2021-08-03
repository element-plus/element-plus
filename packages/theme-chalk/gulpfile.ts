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

function compile() {
  return gulp
    .src('./src/*.scss')
    .pipe(sass.sync().on('error', sass.logError))
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

function copyfont() {
  return gulp
    .src('./src/fonts/**')
    .pipe(cleanCSS())
    .pipe(gulp.dest(`${distFolder}/fonts`))
}

/**
 * copy to packages/lib/theme-chalk
 */
function copyToLib() {
  return gulp
    .src(distFolder + '/**')
    .pipe(gulp.dest(path.resolve(__dirname, '../../lib/theme-chalk')))
}

export const build = gulp.series(compile, copyfont, copyToLib)

export default build
