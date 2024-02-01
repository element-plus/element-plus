import path from 'path'
import chalk from 'chalk'
import { type TaskFunction, dest, parallel, series, src } from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'clean-css'
import rename from 'gulp-rename'
import consola from 'consola'
import { epOutput } from '@element-plus/build-utils'
import type Vinly from 'vinyl'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(epOutput, 'theme-chalk')

/**
 * minify css
 * @param file `css`文件
 */
function doMinifyCss(file: Vinly) {
  try {
    const details = new cleanCSS({
      compatibility: '*',
      rebaseTo: path.dirname(file.path),
    }).minify({
      [file.path]: {
        styles: file.contents ? file.contents.toString() : '',
      },
    })
    const name = file.path.split(file.base)[1]
    file.contents = Buffer.from(details.styles)
    consola.success(
      `${chalk.cyan(name)}: ${chalk.yellow(
        details.stats.originalSize / 1000
      )} KB -> ${chalk.green(details.stats.minifiedSize / 1000)} KB`
    )
  } catch (e) {
    consola.error(e)
  }
}

/**
 * compile theme-chalk scss & minify
 * not use sass.sync().on('error', sass.logError) to throw exception
 * @returns
 */
function buildThemeChalk() {
  const sass = gulpSass(dartSass)
  const noElPrefixFile = /(index|base|display)/
  return src(path.resolve(__dirname, 'src/*.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .on('data', doMinifyCss)
    .pipe(
      rename((path) => {
        if (!noElPrefixFile.test(path.basename)) {
          path.basename = `el-${path.basename}`
        }
      })
    )
    .pipe(dest(distFolder))
}

/**
 * Build dark Css Vars
 * @returns
 */
function buildDarkCssVars() {
  const sass = gulpSass(dartSass)
  return src(path.resolve(__dirname, 'src/dark/css-vars.scss'))
    .pipe(sass.sync())
    .pipe(autoprefixer({ cascade: false }))
    .on('data', doMinifyCss)
    .pipe(dest(`${distFolder}/dark`))
}

/**
 * copy from packages/theme-chalk/dist to dist/element-plus/theme-chalk
 */
export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

/**
 * copy source file to packages
 */

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

export const build: TaskFunction = parallel(
  copyThemeChalkSource,
  series(buildThemeChalk, buildDarkCssVars, copyThemeChalkBundle)
)

export default build
