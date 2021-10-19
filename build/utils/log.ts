import process from 'process'
import chalk from 'chalk'

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
