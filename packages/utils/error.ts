class ElementPlusError extends Error {
  constructor(m: string) {
    super(m)
    this.name = 'ElementPlusError: '
  }
}

export default (compName: string, m: string) => {
  throw new ElementPlusError(`[${compName}]: ${m}`)
}
