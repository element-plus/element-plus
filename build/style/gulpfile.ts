import path from 'path'
import gulp from 'gulp'
import ts from 'gulp-typescript'
import through2 from 'through2'
import { buildOutput, compRoot } from '../utils/paths'

const output = path.resolve(buildOutput, 'styles')

const tsProject = ts.createProject('tsconfig.json', {
  declaration: true,
  target: 'ESNext',
  skipLibCheck: true,
  module: 'CommonJS',
})

const rewriter = () => {
  return through2.obj(function (file, _, cb) {
    const compIdentifier = new RegExp('@element-plus/components', 'g')
    const compReplacer = '../../../components'
    const themeIdentifier = new RegExp('@element-plus/theme-chalk', 'g')
    const themeReplacer = '../../../../theme-chalk'
    file.contents = Buffer.from(
      file.contents
        .toString()
        .replace(compIdentifier, compReplacer)
        .replace(themeIdentifier, themeReplacer)
    )
    cb(null, file)
  })
}

const inputs = path.resolve(compRoot, '**/style/*.ts')

function compileEsm() {
  return gulp
    .src(inputs)
    .pipe(rewriter())
    .pipe(tsProject())
    .pipe(gulp.dest(path.resolve(output, 'lib')))
}

function compileCjs() {
  return gulp
    .src(inputs)
    .pipe(rewriter())
    .pipe(
      ts.createProject('tsconfig.json', {
        declaration: true,
        target: 'ESNEXT',
        skipLibCheck: true,
        module: 'ESNEXT',
      })()
    )
    .pipe(gulp.dest(path.resolve(output, 'es')))
}

export const build = gulp.parallel(compileEsm, compileCjs)

export default build
