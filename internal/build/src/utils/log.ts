import process from 'process'
import chalk from 'chalk'
import consola from 'consola'

const [command, info] = ['command', 'info'].map((symbol: string) => {
  return (msg: string) => `[${symbol}] ${msg}`
})
const [group, endGroup] = ['group', 'endgroup'].map((symbol) => {
  return (groupMsg: string) => `##[${symbol}] ${groupMsg}`
})

export function cyan(str: string) {
  console.log(command(chalk.cyan(str)))
}

export function yellow(str: string) {
  console.log(command(chalk.yellow(str)))
}

export function green(str: string) {
  console.log(command(chalk.green(str)))
}

export function red(str: string) {
  console.log(chalk.red(str))
}

export function errorAndExit(err: Error): never {
  consola.error(err)
  process.exit(1)
}

export { command, info, group, endGroup }
