import path from 'path'
import { loadConfig } from 'unconfig'
import type { Format } from 'tsup'
import type { Project } from '@element-plus/workspace'
import type { BuildOptions } from '../config'

export type BuildOptionsResolved = Required<BuildOptions> & {
  tsup: { entry: string[] }
  format: Format[]
}

export function normalizeConfig(
  pkg: Project,
  options?: BuildOptions
): BuildOptionsResolved {
  const normalized = {
    name: 'index',
    minify: false,
    vue: false,
    dts: true,
    platform: 'web',
    tsup: {},
    ...(options ?? {}),
  } as BuildOptionsResolved
  normalized.tsup.entry ||= [path.resolve(pkg.dir, 'src/index.ts')]
  normalized.tsup.format ||= ['esm', 'cjs']
  return normalized
}

export async function importConfig(
  pkg: Project,
  userConfig?: BuildOptions
): Promise<BuildOptionsResolved> {
  const { config } = await loadConfig<BuildOptions>({
    sources: [
      {
        files: 'build.config',
        // default extensions
        extensions: ['ts', 'mts', 'cts', 'js', 'mjs', 'cjs', 'json', ''],
      },
    ],
    cwd: pkg.dir,
  })
  return normalizeConfig(pkg, { ...config, ...userConfig })
}
