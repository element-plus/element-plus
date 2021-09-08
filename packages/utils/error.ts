class ElementPlusError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'ElementPlusError'
  }
}

export default (scope: string, m: string) => {
  throw new ElementPlusError(`[${scope}] ${m}`)
}

export function debugWarn(scope: string, message: string): void {
  if (process.env.NODE_ENV === 'development') {
    console.warn(new ElementPlusError(`[${scope}] ${message}`))
  }
}
