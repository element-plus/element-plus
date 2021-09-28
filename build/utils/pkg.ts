import findWorkspacePackages from '@pnpm/find-workspace-packages'
import { buildConfig } from '../info'
import { EP_PREFIX } from '../constants'
import { projRoot } from './paths'
import type { Module } from '../info'
import type { ProjectManifest } from '@pnpm/types'

export const getWorkspacePackages = () => findWorkspacePackages(projRoot)
export const getWorkspaceNames = async () => {
  const pkgs = await findWorkspacePackages(projRoot)
  return pkgs
    .map((pkg) => pkg.manifest.name)
    .filter((name): name is string => !!name)
}
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

export const pathRewriter = (module: Module, replaceAll: boolean) => {
  const replaceName = replaceAll ? 'replaceAll' : 'replace'
  const config = buildConfig[module]

  return (id: string) => {
    id = id[replaceName](`${EP_PREFIX}/theme-chalk`, 'element-plus/theme-chalk')
    id = id[replaceName](`${EP_PREFIX}/`, `${config.bundle.path}/`)
    return id
  }
}
