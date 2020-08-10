import defaultLang from './lang/en'

let lang = defaultLang

export const t = (path:string): string => {
  let value
  const array = path.split('.')
  let current = lang
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property] || property
    if (i === j - 1) return value
    if (!value) return ''
    current = value
  }
  return ''
}

export const use = (l): void => {
  lang = l || lang
}

export default { use, t }
