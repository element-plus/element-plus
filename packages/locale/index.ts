import dayjs from 'dayjs'
import defaultLang from './lang/en'

export type TranslatePair = {
  [key: string]: string | string[] | TranslatePair
}

export type Language = {
  name: string
  el: TranslatePair
}

let lang: Language = defaultLang as Language

let i18nHandler: null | ((...args: any[]) => string) = null

export const i18n = (fn: (...args: any[]) => string) => {
  i18nHandler = fn
}

export const restoreHandler = () => i18nHandler = defaultTranslator

function template(str: string, option) {
  if (!str || !option) return str

  return str.replace(/\{(\w+)\}/g, (_, key) => {
    return option[key]
  })
}

const defaultTranslator = (...args: any[]) => {
  const [path, option] = args
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
}

export const t = (...args: any[]): string => {
  console.warn
  if (i18nHandler) {
    const translation = i18nHandler(...args)
    return translation || defaultTranslator(...args)
  }
  return defaultTranslator(...args)
}

export const use = (l: Language): void => {

  if (process.env.NODE_ENV !== 'production') {
    console.warn(`[deprecation]:
      The previous i18n usage is deprecated please update to
      the new one to get reactive i18n translations, refer to:
      https://element-plus.org/#/en-US/i18n
    `)
  }

  lang = l || lang
  if (lang.name) {
    dayjs.locale(lang.name)
  }
}

export const setLocale = use
