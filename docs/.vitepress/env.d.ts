/// <reference types="vitepress/client" />

// VitePress 1.x does not ship declarations for these runtime helpers.
declare module 'vitepress/dist/client/shared' {
  export function isExternal(path: string): boolean
  export function isActive(
    currentPath: string,
    matchPath?: string,
    asRegex?: boolean
  ): boolean
}

declare module 'vitepress/dist/client/theme-default/support/utils' {
  export function ensureStartingSlash(path: string): string
}

declare module 'virtual:component-changelog-data' {
  const data: import('./utils/changelog-parser').ComponentChangelogs
  export default data
}
