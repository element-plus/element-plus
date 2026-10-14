import path from 'path'
import { copyFile, cp, mkdir, rm } from 'fs/promises'
import {
  buildOutput,
  epOutput,
  epPackage,
  execCommand,
  projRoot,
} from '@element-plus/build-utils'
import {
  buildConfig,
  buildFullBundle,
  buildHelper,
  buildModules,
  generateTypesDefinitions,
  run,
} from './src'

import type { Module } from './src'

const copyFiles = () =>
  Promise.all([
    copyFile(epPackage, path.join(epOutput, 'package.json')),
    copyFile(
      path.resolve(projRoot, 'README.md'),
      path.resolve(epOutput, 'README.md')
    ),
    copyFile(
      path.resolve(projRoot, 'typings', 'global.d.ts'),
      path.resolve(epOutput, 'global.d.ts')
    ),
    copyFile(
      path.resolve(projRoot, 'LICENSE'),
      path.resolve(epOutput, 'LICENSE')
    ),
  ])

const copyTypesDefinitions = () => {
  const src = path.resolve(buildOutput, 'types')
  const copyTypes = (module: Module) => {
    return execCommand(
      () => cp(src, buildConfig[module].output.path, { recursive: true }),
      `copyTypes:${module}`
    )
  }

  return Promise.all([copyTypes('esm'), copyTypes('cjs')])
}

const copyFullStyle = async () => {
  await mkdir(path.resolve(epOutput, 'dist'), { recursive: true })
  await copyFile(
    path.resolve(epOutput, 'theme-chalk/index.css'),
    path.resolve(epOutput, 'dist/index.css')
  )
}

const buildStyle = async () => {
  await run('pnpm run -C packages/theme-chalk build')
  await copyFullStyle()
}

const makeOutput = async () => {
  await execCommand(() => run('pnpm run clean'), 'clean output')
  await execCommand(() => mkdir(epOutput, { recursive: true }), 'create output')
}

const cleanupTypesDefinitions = () => {
  return rm(path.resolve(buildOutput, 'types'), { recursive: true })
}

async function build() {
  await makeOutput()
  buildHelper()
  await Promise.all([
    execCommand(generateTypesDefinitions),
    execCommand(buildModules),
    execCommand(buildFullBundle),
    execCommand(buildStyle),
    execCommand(copyFiles),
  ])
  await execCommand(copyTypesDefinitions)
  await execCommand(cleanupTypesDefinitions)
}

function main() {
  return execCommand(build)
}

main()
