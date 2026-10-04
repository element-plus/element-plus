import { downloadFile } from '../helper'
import { generateColorsFromBase } from '../colors/hsv'
import { normalizeTheme } from './parse'

import type { EpTheme } from './types'

/** Export the same base colors and light/dark variants used by the preview. */
export function generateCssFromTheme(theme: EpTheme) {
  const { namespace, colors } = normalizeTheme(theme)
  return [false, true]
    .map((dark) => {
      const declarations = Object.entries(colors).flatMap(([name, color]) =>
        Object.entries(generateColorsFromBase(color, dark)).map(
          ([level, value]) => {
            const suffix = level === 'base' ? '' : `-${level}`
            return `  --${namespace}-color-${name}${suffix}: ${value};`
          }
        )
      )
      return `${dark ? 'html.dark' : ':root'} {\n${declarations.join('\n')}\n}`
    })
    .join('\n\n')
}

export function downloadTheme(name: string, theme: EpTheme) {
  downloadFile(name, generateCssFromTheme(theme))
}
