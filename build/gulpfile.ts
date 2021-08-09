import gulp from 'gulp'
import ts from 'gulp-typescript'
import path from 'path'

const output = path.resolve(__dirname, '../dist/styles')

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
  target: 'ESNEXT',
  skipLibCheck: true,
})

function compile() {
  return gulp
    .src('../packages/components/**/style/*.ts')
    .pipe(tsProject())
    .pipe(gulp.dest(output))
}





export const build = gulp.series(compile)

export default build
