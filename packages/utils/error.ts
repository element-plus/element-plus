import { isString } from './types'

class ElementPlusError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'ElementPlusError'
  }
}

export function throwError(scope: string, m: string): never {
  throw new ElementPlusError(`[${scope}] ${m}`)
}

export function debugWarn(err: Error): void
export function debugWarn(scope: string, message: string): void
export function debugWarn(scope: string | Error, message?: string): void {
  // Only show warnings in development mode
  // https://vite.dev/guide/env-and-mode.html#built-in-constants
  if (import.meta.env?.DEV !== false && import.meta.env?.PROD !== true) {
    const error: Error = isString(scope)
      ? new ElementPlusError(`[${scope}] ${message}`)
      : scope
    // eslint-disable-next-line no-console
    console.warn(error)
  }
}
