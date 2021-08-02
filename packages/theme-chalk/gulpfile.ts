import gulp from 'gulp'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import autoprefixer from 'gulp-autoprefixer'
import cleanCSS from 'gulp-clean-css'
import rename from 'gulp-rename'

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
        console.log(`Before: ${details.name}: ${details.stats.originalSize} B`)
        console.log(`After: ${details.name}: ${details.stats.minifiedSize} B`)
      }),
    )
    .pipe(
      rename(function(path) {
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

export const build = gulp.series(compile, copyfont)

export default build
