import path from 'path'
import { buildEp } from './utils/paths'
import type { ModuleFormat } from 'rollup'

export const modules = ['esm', 'cjs'] as const
export type Module = typeof modules[number]
export interface BuildInfo {
  module: 'ESNext' | 'CommonJS'
  format: ModuleFormat
  output: {
    /** e.g: `es` */
    name: string
    /** e.g: `xxx/dist/element-plus/es` */
    path: string
  }

  bundle: {
    /** e.g: `element-plus/es` */
    path: string
  }
}

export const buildConfig: Record<Module, BuildInfo> = {
  esm: {
    module: 'ESNext',
    format: 'esm',
    output: {
      name: 'es',
      path: path.resolve(buildEp, 'es'),
    },
    bundle: {
      path: 'element-plus/es',
    },
  },
  cjs: {
    module: 'CommonJS',
    format: 'cjs',
    output: {
      name: 'lib',
      path: path.resolve(buildEp, 'lib'),
    },
    bundle: {
      path: 'element-plus/lib',
    },
  },
}
export type BuildConfig = typeof buildConfig
