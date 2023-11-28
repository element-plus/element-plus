import type { EpTheme } from '.'

/**
 * parse theme json from css
 * @param content
 * @param namespace
 * @returns
 */
export function parseFromCss(content: string, namespace = 'el') {
  const cssChunks = content
    .split('\n')
    .map((i) => i.trim())
    .filter((line) => line.startsWith('--'))

  const theme: Partial<EpTheme> = {}
  cssChunks.forEach((line) => {
    const pair = line.replace(`--${namespace}-`, '').replace(';', '').split(':')

    const name = pair[0].trim()
    const value = pair[1].trim()

    const keys = name.split('-')
    if (keys.length === 2) {
      if (keys[0] === 'color') {
        if (!theme.colors) theme.colors = {}
        theme.colors[keys[1]] = value
      }
    } else {
      theme[name] = value
    }
  })
  return theme
}
