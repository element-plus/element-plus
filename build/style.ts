import path from 'path'
import { parallel, dest, src } from 'gulp'
import ts from 'gulp-typescript'
import { buildOutput, compRoot } from './utils/paths'
import { buildConfig } from './info'
import { withTaskName, gulpPathRewriter } from './utils/gulp'
import { run } from './utils/process'

import type { Module } from './info'

const inputs = path.resolve(compRoot, '**/style/*.ts')
const output = path.resolve(buildOutput, 'styles')

const tsProject = (module: Module) =>
  ts.createProject('tsconfig.json', {
    declaration: true,
    target: 'ESNext',
    skipLibCheck: true,
    module: buildConfig[module].module,
  })()

const build = (module: Module) =>
  withTaskName(`buildStyle:${module}`, () =>
    src(inputs)
      .pipe(gulpPathRewriter(module))
      .pipe(tsProject(module))
      .pipe(dest(path.resolve(output, buildConfig[module].output.name)))
  )

export const buildStyle = parallel(build('esm'), build('cjs'))

export const copyStyle = () => {
  const copy = (module: Module) => {
    const config = buildConfig[module]
    const src = path.resolve(buildOutput, 'styles', config.output.name)
    const dst = path.resolve(config.output.path, 'components')

    return withTaskName(`copyStyle:${module}`, () =>
      run(`rsync -a ${src}/ ${dst}/`)
    )
  }

  return parallel(copy('esm'), copy('cjs'))
}
