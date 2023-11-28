import { names } from '@ctrl/tinycolor'

/**
 * is color hex string
 * @param value
 * @returns
 */
export function isHex(value: string) {
  return /^#([a-fA-F\d]{6}|[a-fA-F\d]{3})$/.test(value)
}

export function isColor(value: string) {
  return isHex(value) || names[value]
}
