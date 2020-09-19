export default function(target, ...rests) {
  for (let i = 1, j = rests.length; i < j; i++) {
    const source = rests[i] || {}
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
