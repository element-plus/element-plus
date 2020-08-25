export default function (target: any, ...arg: any[]) {
  for (let i = 1, j = arg.length; i < j; i++) {
    const source = arg[i] || {}
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
