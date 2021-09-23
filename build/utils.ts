import path from 'path'
import os from 'os'
import getWorkspacePackages from '@pnpm/find-workspace-packages'
import chalk from 'chalk'

import { compRoot, projRoot } from './paths'

export const getDeps = (pkgPath: string): string[] => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pkgJson = require(pkgPath)

  const { dependencies } = pkgJson
  return Object.keys(dependencies ?? {})
}

export const getCpuCount = () => os.cpus().length

export const getPkgs = () => getWorkspacePackages(projRoot)

export const getExternals = async (options: { full: boolean }) => {
  const monoPackages = (await getPkgs())
    .map((pkg) => pkg.manifest.name)
    .filter((name): name is string => !!name)

  return (id: string) => {
    const packages: string[] = ['vue']
    if (!options.full) {
      const compPkg = path.resolve(compRoot, './package.json')
      const depPackages = getDeps(compPkg)
      packages.push('@vue', ...monoPackages, ...depPackages)
    }

    return [...new Set(packages)].some(
      (pkg) => id === pkg || id.startsWith(`${pkg}/`)
    )
  }
}

export function cyan(str: string) {
  console.log(chalk.cyan(str))
}
export function yellow(str: string) {
  console.log(chalk.yellow(str))
}

export function green(str: string) {
  console.log(chalk.green(str))
}

export function red(str: string) {
  console.error(chalk.red(str))
}

export function errorAndExit(e: Error): never {
  red(e.stack ?? e.message)
  process.exit(1)
}
