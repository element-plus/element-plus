import process from 'process'
import { performance } from 'node:perf_hooks'
import chalk from 'chalk'
import consola from 'consola'

type Awaitable<T> = Promise<T> | T

export function errorAndExit(err: Error): never {
  consola.error(err)
  process.exit(1)
}

export async function execCommand<T extends () => Awaitable<any>>(
  fnc: T,
  overrideName?: string
) {
  const commandName = chalk.cyan(overrideName || fnc.name)
  try {
    const startTime = performance.now()
    consola.info(`Starting '${commandName}'...`)
    await fnc()
    const elapsedTime = performance.now() - startTime
    const suffixTimeLog =
      elapsedTime < 1000
        ? `${elapsedTime.toFixed(2)}ms`
        : `${(elapsedTime / 1000).toFixed(2)}s`
    consola.info(`Ending '${commandName}' ${chalk.magenta(suffixTimeLog)}`)
  } catch (e: any) {
    errorAndExit(e)
  }
}
