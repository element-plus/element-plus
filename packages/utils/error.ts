class ElementPlusError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'ElementPlusError'
  }
}

export default (scope: string, m: string) => {
  throw new ElementPlusError(`[${scope}] ${m}`)
}

export function warn(scope: string, m: string) {
  console.warn(new ElementPlusError(`[${scope}] ${m}`))
}
