export default function (target: any, ...args: any[]) {
  for (let i = 0, j = args.length; i < j; i++) {
    const source = args[i] || {}
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
