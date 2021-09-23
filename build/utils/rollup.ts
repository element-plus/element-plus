import filesize from 'rollup-plugin-filesize'
import reporter from '../size-reporter'
import { compPackage } from './paths'
import { getWorkspacePackages, getPackageDependencies } from './pkg'

import type { OutputOptions, RollupBuild } from 'rollup'

export const generateExternal = async (options: { full: boolean }) => {
  const monoPackages = (await getWorkspacePackages())
    .map((pkg) => pkg.manifest.name)
    // filter root package
    .filter((name): name is string => !!name)

  return (id: string) => {
    const packages: string[] = ['vue']
    if (!options.full) {
      const depPackages = getPackageDependencies(compPackage)
      packages.push('@vue', ...monoPackages, ...depPackages)
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    )
  }
}

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(
    options.map((option) =>
      bundle.write({
        ...option,
        plugins: [
          filesize({
            reporter,
          }),
        ],
      })
    )
  )
}
