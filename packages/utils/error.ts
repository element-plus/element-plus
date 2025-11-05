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
  if (process.env.NODE_ENV !== 'production') {
    const error: Error = isString(scope)
      ? new ElementPlusError(`[${scope}] ${message}`)
      : scope
    // eslint-disable-next-line no-console
    console.warn(error)
  }
}
