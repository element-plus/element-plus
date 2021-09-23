import findWorkspacePackages from '@pnpm/find-workspace-packages'
import { projRoot } from './paths'
import type { ProjectManifest } from '@pnpm/types'

export const getWorkspacePackages = () => findWorkspacePackages(projRoot)
export const getWorkspacePackageManifest = async (
  name: string
): Promise<ProjectManifest> => {
  const packages = await getWorkspacePackages()
  const { manifest } = packages.find((pkg) => pkg.manifest.name === name)!
  return manifest
}

export const getPackageManifest = (pkgPath: string) => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  return require(pkgPath) as ProjectManifest
}

export const getPackageDependencies = (pkgPath: string): string[] => {
  const manifest = getPackageManifest(pkgPath)
  const { dependencies } = manifest
  return Object.keys(dependencies ?? {})
}
