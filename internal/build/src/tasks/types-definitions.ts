import path from 'path'
import {
  buildOutput,
  epPackage,
  epRoot,
  getPackageDependencies,
  projRoot,
} from '@element-plus/build-utils'
import { build } from 'rolldown'
import { dts } from 'rolldown-plugin-dts'
import { target } from '../build-info'

import type { BuildOptions } from 'rolldown'

const tsconfig = path.resolve(projRoot, 'tsconfig.web.json')
const epDeps = getPackageDependencies(epPackage)
const pkgExternal: any = Object.values(epDeps).flat()
const external = [/^@floating-ui/, /^@vue/, /^vue/, /^csstype/].concat(
  pkgExternal as any
)

export async function generateTypesDefinitions() {
  const input = path.resolve(epRoot, 'index.ts')
  const options: BuildOptions = {
    input,
    external,
    tsconfig,
    transform: {
      target,
    },
    plugins: dts({
      parallel: true,
      tsconfig,
      eager: true,
      vue: true,
      emitDtsOnly: true,
      compilerOptions: {
        emitDeclarationOnly: true,
        declaration: true,
      },
    }),
    output: {
      preserveModules: true,
      preserveModulesRoot: epRoot,
      entryFileNames: '[name].d.ts',
      dir: path.resolve(buildOutput, 'types'),
    },
  }

  return build(options)
}
