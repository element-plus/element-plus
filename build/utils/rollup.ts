import { EP_PREFIX } from '../constants'
import { epPackage } from './paths'
import {
  getWorkspacePackages,
  getPackageDependencies,
  getWorkspaceNames,
  pathRewriter,
} from './pkg'
import type { Module } from '../info'

import type { OutputOptions, RollupBuild } from 'rollup'

export const generateExternal = async (options: { full: boolean }) => {
  const monoPackages = (await getWorkspacePackages())
    .map((pkg) => pkg.manifest.name)
    // filter root package
    .filter((name): name is string => !!name)

  return (id: string) => {
    const packages: string[] = ['vue']
    if (!options.full) {
      const depPackages = getPackageDependencies(epPackage)
      packages.push('@vue', ...monoPackages, ...depPackages)
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    )
  }
}

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)))
}

export const rollupPathRewriter = async () => {
  const workspacePkgs = (await getWorkspaceNames()).filter((pkg) =>
    pkg.startsWith(EP_PREFIX)
  )

  return (module: Module) => {
    const rewriter = pathRewriter(module, false)

    return (id: string) => {
      if (workspacePkgs.some((pkg) => id.startsWith(pkg))) {
        return rewriter(id)
      } else {
        return ''
      }
    }
  }
}
