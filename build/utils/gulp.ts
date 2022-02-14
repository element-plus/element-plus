import { run } from './process'
import type { TaskFunction } from 'gulp'

export const withTaskName = <T extends TaskFunction>(name: string, fn: T) =>
  Object.assign(fn, { displayName: name })

export const runTask = (name: string) =>
  withTaskName(name, () => run(`pnpm run build ${name}`))
