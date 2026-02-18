import { epPackage, getPackageDependencies } from '@element-plus/build-utils'

import type { OutputOptions, RollupBuild } from 'rollup'

export const generateExternal = async (options: {
  packageManifestPath: string
}) => {
  const { dependencies, peerDependencies } = await getPackageDependencies(
    options.packageManifestPath
  )
  const packages: string[] = [
    ...new Set([...dependencies, ...peerDependencies]),
  ]
  return (id: string) =>
    packages.some((pkg) => id === pkg || id.startsWith(`${pkg}/`))
}

export function writeBundles(bundle: RollupBuild, options: OutputOptions[]) {
  return Promise.all(options.map((option) => bundle.write(option)))
}

export function formatBundleFilename(
  name: string,
  minify: boolean,
  ext: string
) {
  return `${name}${minify ? '.min' : ''}.${ext}`
}
