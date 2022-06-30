import { capitalize as toCapitalize } from '@vue/shared'
export {
  camelize,
  hyphenate,
  hyphenate as kebabCase, // alias
} from '@vue/shared'

/**
 * fork from {@link https://github.com/sindresorhus/escape-string-regexp}
 */
export const escapeStringRegexp = (string = '') =>
  string.replace(/[|\\{}()[\]^$+*?.]/g, '\\$&').replace(/-/g, '\\x2d')

export const capitalize = <T extends string>(str: T) => {
  return toCapitalize(str) as Capitalize<T>
}
