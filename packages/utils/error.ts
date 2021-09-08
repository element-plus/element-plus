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
  console.error('process.env.NODE_ENV', `==${process.env.NODE_ENV}==`)
  if (['development', 'test'].includes(process.env.NODE_ENV)) {
    // eslint-disable-next-line no-console
    console.warn(new ElementPlusError(`[${scope}] ${message}`))
  }
}
