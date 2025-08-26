import { isExternal } from 'vitepress/dist/client/shared'

export * from './colors'

export { isExternal, isActive } from 'vitepress/dist/client/shared'
export { ensureStartingSlash } from 'vitepress/dist/client/theme-default/support/utils'

const endingSlashRE = /\/$/
export function utoa(data: string): string {
  return btoa(unescape(encodeURIComponent(data)))
}

export const throttleAndDebounce = (fn: () => any, delay: number) => {
  let timeout: ReturnType<typeof setTimeout>
  let called = false
  return () => {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (!called) {
      fn()
      called = true
      setTimeout(() => {
        called = false
      }, delay)
    } else {
      timeout = setTimeout(fn, delay)
    }
  }
}

export function createGitHubUrl(
  docsRepo: string,
  docsDir: string,
  docsBranch: string,
  path: string,
  folder = 'examples/',
  ext = '.vue'
) {
  const base = isExternal(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`
  return `${base.replace(endingSlashRE, '')}/edit/${docsBranch}/${
    docsDir ? `${docsDir.replace(endingSlashRE, '')}/` : ''
  }${folder || ''}${path}${ext || ''}`
}

export function createCrowdinUrl(/** zh-CN、es-ES... */ targetLang: string) {
  // example: https://crowdin.com/project/element-plus/zh-CN
  return `https://crowdin.com/project/element-plus/${targetLang}`
}
