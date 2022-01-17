import process from 'process'
import chalk from 'chalk'

/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const [command, info, error] = ['command', 'info', 'error'].map(
  (symbol: string) => {
    return (msg: string) => console.log(`[${symbol}] ${msg}`)
  }
)
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
const [group, endGroup] = ['group', 'endgroup'].map((symbol) => {
  return (groupMsg: string) => {
    console.log(`##[${symbol}] ${groupMsg}`)
  }
})

export function cyan(str: string) {
  command(chalk.cyan(str))
}

export function yellow(str: string) {
  command(chalk.yellow(str))
}

export function green(str: string) {
  command(chalk.green(str))
}

export function red(str: string) {
  error(chalk.red(str))
}

export function errorAndExit(e: Error): never {
  red(e.stack ?? e.message)
  process.exit(1)
}
