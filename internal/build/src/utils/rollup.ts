import {
  epPackage,
  getPackageDependencies,
  getPackageManifest,
} from '@element-plus/build-utils'

import type { OutputOptions, RollupBuild } from 'rollup'

export const generateExternal = async (options: {
  packageManifestPath: string
}) => {
  const {
    dependencies = {},
    peerDependencies = {},
    devDependencies = {},
    name,
  } = await getPackageManifest(options.packageManifestPath)
  const packages: string[] = Object.keys({
    ...dependencies,
    ...peerDependencies,
  })
  // if (Object.hasOwn(devDependencies, name!)) {
  //   packages.push(name!)
  // }
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
