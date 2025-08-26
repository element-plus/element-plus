import process from 'process'
import consola from 'consola'

export function errorAndExit(err: Error): never {
  consola.error(err)
  process.exit(1)
}
