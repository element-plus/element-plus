import { pathToFileURL } from 'node:url'
import findWorkspacePackages from '@pnpm/find-workspace-packages'
import { normalizePath, projRoot } from './paths'

import type { ProjectManifest } from '@pnpm/types'
export type { Project } from '@pnpm/find-workspace-packages'

export const getWorkspacePackages = () => findWorkspacePackages(projRoot)
export const getWorkspaceNames = async (dir = projRoot) => {
  const pkgs = await findWorkspacePackages(projRoot)
  return pkgs
    .filter((pkg) => pkg.dir.startsWith(dir))
    .map((pkg) => pkg.manifest.name)
    .filter((name): name is string => !!name)
}

export const getPackageManifest = async (packagManifestPath: string) => {
  return (await import(
    pathToFileURL(packagManifestPath).toString()
  )) as ProjectManifest
}

export const getPackageDependencies = async (packagManifestPath: string) => {
  const manifest = await getPackageManifest(packagManifestPath)
  const { dependencies = {}, peerDependencies = {} } = manifest

  return {
    dependencies: Object.keys(dependencies),
    peerDependencies: Object.keys(peerDependencies),
  }
}

export const excludeFiles = (files: string[]) => {
  const excludes = ['node_modules', 'test', 'mock', 'gulpfile', 'dist']
  const projRootPath = normalizePath(projRoot)
  return files.filter((file) => {
    const position = file.startsWith(projRootPath) ? projRootPath.length : 0
    return !excludes.some((exclude) => file.includes(exclude, position))
  })
}
