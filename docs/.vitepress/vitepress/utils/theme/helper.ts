import { downloadFile } from '../helper'
import type { EpTheme } from './types'

/**
 * generate css var text from theme
 * @param theme
 * @returns
 */
export function generateCssFromTheme(theme: EpTheme) {
  const ns = theme.namespace || 'el'
  const themeChunks = [':root {']

  Object.entries(theme.colors).forEach(([key, value]) => {
    themeChunks.push(`  --${ns}-color-${key}: ${value};`)
  })

  themeChunks.push('}')
  return themeChunks.join('\n')
}

/**
 * download theme directly
 * @param name
 * @param theme
 */
export function downloadTheme(name: string, theme: EpTheme) {
  downloadFile(name, generateCssFromTheme(theme))
}

export const injectCss = (css: string) => {
  const style = document.createElement('style')
  style.innerHTML = css
  document.body.appendChild(style)
}
