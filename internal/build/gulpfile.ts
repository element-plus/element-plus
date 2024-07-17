import path from 'path'
import { copyFile, mkdir, readFile, writeFile } from 'fs/promises'
import { copy, remove } from 'fs-extra'
import { parallel, series } from 'gulp'
import glob from 'fast-glob'
import {
  buildOutput,
  epOutput,
  epPackage,
  projRoot,
} from '@element-plus/build-utils'
import { buildConfig, pathRewriter, run, runTask, withTaskName } from './src'
import type { TaskFunction } from 'gulp'
import type { Module } from './src'

export const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
  ])

export const copyTypesDefinitions: TaskFunction = (done) => {
  const src = path.resolve(buildOutput, 'types', 'packages')
  const copyTypes = (module: Module) =>
    withTaskName(`copyTypes:${module}`, () =>
      copy(src, buildConfig[module].output.path, { recursive: true })
    )

  return parallel(copyTypes('esm'), copyTypes('cjs'))(done)
}

export const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'theme-chalk/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
}

export default series(
  withTaskName('clean', () => run('pnpm run clean')),
  withTaskName('createOutput', () => mkdir(epOutput, { recursive: true })),

  parallel(
    runTask('buildModules'),
    runTask('buildFullBundle'),
    series(
      withTaskName('generateTypesDefinitions', async () => {
        await run(
          'npx vue-tsc -p tsconfig.web.json --declaration --emitDeclarationOnly --declarationDir dist/types'
        )
        const typesDir = path.join(buildOutput, 'types', 'packages')
        const filePaths = await glob(`**/*.d.ts`, {
          cwd: typesDir,
          absolute: true,
        })
        const rewriteTasks = filePaths.map(async (filePath) => {
          const content = await readFile(filePath, 'utf8')
          await writeFile(filePath, pathRewriter('esm')(content), 'utf8')
        })
        await Promise.all(rewriteTasks)
        const sourceDir = path.join(typesDir, 'element-plus')
        await copy(sourceDir, typesDir)
        await remove(sourceDir)
      })
    ),
    runTask('buildHelper'),
    series(
      withTaskName('buildThemeChalk', () =>
        run('pnpm run -C packages/theme-chalk build')
      ),
      copyFullStyle
    )
  ),

  parallel(copyTypesDefinitions, copyFiles)
)

export * from './src'
