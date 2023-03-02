import {
  endingSlashRE,
  isActive,
  isExternal,
  normalize,
} from 'vitepress/dist/client/theme-default/utils'

import type { Route } from 'vitepress'

export * from './colors'

export {
  isArray,
  isNullish,
  isExternal,
  isActive,
  normalize,
  joinUrl,
  ensureEndingSlash,
  ensureStartingSlash,
  removeExtention,
} from 'vitepress/dist/client/theme-default/utils'

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

// When match === true, meaning `path` is a string for build regex
export const isActiveLink = (
  route: Route,
  pathPattern: string,
  match?: boolean
) => {
  if (!match) return isActive(route, pathPattern)
  const regex = new RegExp(pathPattern)

  return regex.test(normalize(`/${route.data.relativePath}`))
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

export function createCrowdinUrl(targetLang: string) {
  let translateLang = ''
  // for zh-CN zh-HK zh-TW, maybe later we will have cases like Chinese lang
  // for now we just keep it as simple as possible.
  if (targetLang.startsWith('zh-')) {
    translateLang = targetLang.split('-').join('').toLocaleLowerCase()
  } else {
    translateLang = targetLang.split('-').shift()!.toLocaleLowerCase()
  }
  return `https://crowdin.com/translate/element-plus/all/en-${translateLang}`
}
