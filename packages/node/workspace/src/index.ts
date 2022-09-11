import findWorkspaceDir from '@pnpm/find-workspace-dir'
import findWorkspacePackages from '@pnpm/find-workspace-packages'
import { PKG_PREFIX } from '@element-plus/node-constants'

import type { Project } from '@pnpm/find-workspace-packages'

let workspaceRoot: string
export const getWorkspaceRoot = async () => {
  if (workspaceRoot) return workspaceRoot
  return (workspaceRoot = (await (findWorkspaceDir as any).default(
    process.cwd()
  ))!)
}

let pkgs: Record<string, Project>
export const getWorkspacePackages = async () => {
  if (pkgs) return pkgs
  const _pkgs: Project[] = await (findWorkspacePackages as any).default(
    await getWorkspaceRoot()
  )
  return (pkgs = Object.fromEntries(
    _pkgs
      .filter((pkg) => !!pkg?.manifest?.name)
      .map((pkg) => [pkg.manifest.name!, pkg])
  ))
}

export const getDependencies = (
  pkg: Project,
  { includeDev = false }: { includeDev?: boolean } = {}
) =>
  Array.from(
    new Set([
      ...Object.keys(pkg.manifest.peerDependencies || {}),
      ...Object.keys(pkg.manifest.dependencies || {}),
      ...Object.keys((includeDev ? pkg.manifest.devDependencies : {}) || {}),
    ])
  )

export const getPackage = async (
  packageName?: string
): Promise<Project | undefined> => {
  const pkgs = await getWorkspacePackages()
  if (packageName) {
    return pkgs[packageName] ?? pkgs[`${PKG_PREFIX}/${packageName}`]
  } else {
    return Object.values(pkgs).find((pkg) => pkg.dir === process.cwd())!
  }
}

export type { Project }
