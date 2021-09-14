import path from 'path'
import os from 'os'
import { getPackagesSync } from '@lerna/project'

import { compRoot } from './paths'
import chalk from 'chalk'

export const getDeps = (pkgPath: string): string[] => {
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const pkgJson = require(pkgPath)

  const { dependencies } = pkgJson
  return Object.keys(dependencies)
}

export const getCpuCount = () => os.cpus().length

export const getPkgs = (): { name: string }[] => getPackagesSync()

export const getExternals = (options: { full: boolean }) => (id: string) => {
  const packages: string[] = ['vue', '@vue']
  if (!options.full) {
    const compPkg = path.resolve(compRoot, './package.json')
    const monoPackages = getPkgs().map((pkg) => pkg.name)
    const depPackages = getDeps(compPkg)
    packages.push(...monoPackages, ...depPackages)
  }

  return [...new Set(packages)].some(
    (pkg) => id === pkg || id.startsWith(`${pkg}\/`)
  )
}

export function yellow(str: string) {
  console.log(chalk.cyan(str))
}

export function green(str: string) {
  console.log(chalk.green(str))
}

export function red(str: string) {
  console.error(chalk.red(str))
}

export function errorAndExit(e: Error) {
  red(e.message)
  process.exit(1)
}
