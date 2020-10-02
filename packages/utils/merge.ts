export default function objectAssign(target, ...agrvs) {
  for (let i = 0, j = agrvs.length; i < j; i++) {
    const source = agrvs[i] || {}
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
