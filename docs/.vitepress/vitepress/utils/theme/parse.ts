import { TinyColor } from '@ctrl/tinycolor'
import defaultTheme from './store/default'
import { themeColorNames } from './types'

import type { EpTheme, EpThemeColor, EpThemeColors } from './types'

export function normalizeColor(value: unknown) {
  if (typeof value !== 'string') throw new Error('Invalid theme color')
  const color = new TinyColor(value.trim())
  if (!color.isValid || color.getAlpha() !== 1)
    throw new Error('Invalid theme color')
  return color.toHexString()
}

/** Validate before applying any imported values; only allow theme color tokens. */
export function normalizeTheme(
  value: unknown
): EpTheme & { colors: EpThemeColors } {
  if (!value || typeof value !== 'object' || Array.isArray(value))
    throw new Error('Invalid theme')
  const { colors, namespace = 'el' } = value as EpTheme
  if (
    !colors ||
    typeof colors !== 'object' ||
    Array.isArray(colors) ||
    typeof namespace !== 'string' ||
    !/^[a-z][a-z0-9-]*$/i.test(namespace)
  )
    throw new Error('Invalid theme')

  const result = { ...defaultTheme.colors } as EpThemeColors
  let found = false
  for (const name of themeColorNames) {
    if (!Object.hasOwn(colors, name)) continue
    result[name] = normalizeColor(colors[name])
    found = true
  }
  if (!found) throw new Error('No theme colors found')
  return { namespace, colors: result }
}

/** Accept base color declarations, including compact CSS; ignore all other CSS. */
export function parseFromCss(content: string) {
  const colors: Partial<EpThemeColors> = {}
  let namespace: string | undefined
  const declarations = content
    .replace(/\/\*[\s\S]*?\*\//g, '')
    .matchAll(
      /(?:^|[;{])\s*--([a-zA-Z][a-zA-Z0-9-]*)-color-(primary|success|warning|danger|info)\s*:\s*([^;}]+)(?=[;}]|$)/g
    )
  for (const [, prefix, name, value] of declarations) {
    if (namespace && namespace !== prefix)
      throw new Error('Mixed theme namespaces')
    namespace = prefix
    colors[name as EpThemeColor] = value.trim()
  }
  return normalizeTheme({ namespace, colors })
}
