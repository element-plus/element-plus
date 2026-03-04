/// <reference types="vite/client" />

declare module 'virtual:component-changelog-data' {
  import type { ComponentChangelogs } from './utils/changelog-parser'

  const data: ComponentChangelogs
  export default data
}

export {}
