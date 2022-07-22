import {
  endingSlashRE,
  isActive,
  isExternal,
  normalize,
} from 'vitepress/dist/client/theme-default/utils'
import { inBrowser } from 'vitepress'

import type { Ref } from 'vue'
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

export function insertLinkIcon(
  contentRef: Ref<{ $el: HTMLElement } | undefined>
) {
  if (!inBrowser) return
  const links = Array.from(
    contentRef.value?.$el?.querySelectorAll<HTMLLinkElement>(
      'a:not(.header-anchor)'
    ) ?? []
  )

  links.forEach((link) => {
    link.classList.add('vp-link')
    if (
      !link.href.startsWith(window.origin) &&
      !/(<img)|(<svg class="link-icon")/.test(link.innerHTML)
    ) {
      link.innerHTML = `
        ${link.innerHTML}
        <svg class="link-icon" viewBox="0 0 1024 1024" xmlns="http://www.w3.org/2000/svg" width="16" height="16">
          <path
            d="
              M853.333333 469.333333a42.666667 42.666667 0 0 0-42.666666
              42.666667v256a42.666667 42.666667 0 0 1-42.666667 42.666667H256a42.666667
              42.666667 0 0 1-42.666667-42.666667V256a42.666667
              42.666667 0 0 1 42.666667-42.666667h256a42.666667 42.666667
              0 0 0 0-85.333333H256a128 128 0 0 0-128 128v512a128 128
              0 0 0 128 128h512a128 128 0 0 0 128-128v-256a42.666667
              42.666667 0 0 0-42.666667-42.666667z
            "
            fill="currentColor">
          </path>
          <path
            d="
              M682.666667 213.333333h67.413333l-268.373333 267.946667a42.666667
              42.666667 0 0 0 0 60.586667 42.666667 42.666667
              0 0 0 60.586666 0L810.666667 273.92V341.333333a42.666667
              42.666667 0 0 0 42.666666 42.666667 42.666667 42.666667 0 0 0
              42.666667-42.666667V170.666667a42.666667 42.666667 0 0
              0-42.666667-42.666667h-170.666666a42.666667
              42.666667 0 0 0 0 85.333333z
            "
            fill="currentColor"
          >
          </path>
        </svg>
        `
    }
  })
}

export function insertTableWrapper(contentRef: any) {
  if (!inBrowser) return
  const tables: HTMLTableElement[] = Array.from(
    contentRef.value?.$el.querySelectorAll(
      'table:not(.el-table__body):not(.el-table__header)'
    ) ?? []
  )
  tables.forEach((table) => {
    const wrapper = document.createElement('div')
    wrapper.classList.add('vp-table')
    table.parentNode!.insertBefore(wrapper, table)
    table.parentNode!.removeChild(table)
    wrapper.appendChild(table)
  })
}
