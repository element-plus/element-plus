export {
  camelize,
  capitalize,
  hyphenate,
  hyphenate as kebabCase, // alias
} from '@vue/shared'

export const escapeRegexpString = (value = '') =>
  String(value).replace(/[|\\{}()[\]^$+*?.]/g, '\\$&')
