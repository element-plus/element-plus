import path from 'path'
import { src, dest, parallel, series } from 'gulp'
import ts from 'gulp-typescript'
import { epOutput, projRoot } from '../../build/utils/paths'
import rewriter from '../../build/gulp-rewriter'
import { buildConfig } from '../../build/info'
import { withTaskName } from '../../build/utils/gulp'

import type { Module } from '../../build/info'

export const buildTokens = (module: Module) => {
  const tsConfig = path.resolve(projRoot, 'tsconfig.json')
  const inputs = [
    './*.ts',
    '!./node_modules',
    '!./gulpfile.ts',
    '!./__tests__/*.ts',
    path.resolve(projRoot, 'typings', 'vue-shim.d.ts'),
  ]
  const config = buildConfig[module]
  return withTaskName(`buildTokens:${module}`, () =>
    src(inputs)
      .pipe(
        ts.createProject(tsConfig, {
          module: config.module,
          strict: false,
        })()
      )
      .pipe(rewriter('..'))
      .pipe(dest(path.resolve(__dirname, config.output.name)))
  )
}

const copyTokens = (module: Module) => {
  const config = buildConfig[module]
  return withTaskName(`copyTokens:${module}`, () => {
    return src(`${path.resolve(__dirname, config.output.name)}/**`).pipe(
      dest(path.resolve(epOutput, config.output.name, 'tokens'))
    )
  })
}

export default parallel(
  series(buildTokens('cjs'), copyTokens('cjs')),
  series(buildTokens('esm'), copyTokens('esm'))
)
