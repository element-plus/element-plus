import defaultLang from './lang/en'
import dayjs from 'dayjs'

let lang = defaultLang

function template(str: string, option) {
  if(!str || !option) return str

  return str.replace(/\{(\w+)\}/g, (match, key) => {
    return option[key]
  })
}

export const t = (path:string, option?): string => {
  let value
  const array = path.split('.')
  let current = lang
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i]
    value = current[property]
    if (i === j - 1) return template(value, option)
    if (!value) return ''
    current = value
  }
  return ''
}

export const use = (l): void => {
  lang = l || lang
  if (lang.name) {
    try {
      require('dayjs/locale/' + lang.name + '.js')
    } catch(e) {
      console.warn(
        `[Element Warn][locale] ${lang.name} was not found`,
      )
    }
    dayjs.locale(lang.name)
  }
}

export default { use, t }
