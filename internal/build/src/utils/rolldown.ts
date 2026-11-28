import { epPackage, getPackageDependencies } from '@element-plus/build-utils'

import type { OutputOptions, RolldownBuild } from 'rolldown'

export const generateExternal = (options: { full: boolean }) => {
  const { dependencies, peerDependencies } = getPackageDependencies(epPackage)

  return (id: string) => {
    const packages: string[] = [...peerDependencies]
    if (!options.full) {
      packages.push('@vue', ...dependencies)
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    )
  }
}

export async function writeBundles(
  bundle: RolldownBuild,
  options: OutputOptions[]
) {
  try {
    const results = await Promise.allSettled(
      options.map((option) => bundle.write(option))
    )
    return results.map((result) => {
      if (result.status === 'rejected') throw result.reason
      return result.value
    })
  } finally {
    await bundle.close()
  }
}

export function formatBundleFilename(
  name: string,
  minify: boolean,
  ext: string
) {
  return `${name}${minify ? '.min' : ''}.${ext}`
}
