export default function (target: any) {
  for (let i = 1, j = arguments.length; i < j; i++) {
    // eslint-disable-next-line prefer-rest-params
    const source = arguments[i] || {}
    for (const prop in source) {
      if (source.hasOwnProperty(prop)) {
        const value = source[prop]
        if (value !== undefined) {
          target[prop] = value
        }
      }
    }
  }

  return target
}
