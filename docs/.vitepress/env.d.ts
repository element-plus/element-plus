/// <reference types="vitepress/client" />

declare module 'virtual:component-changelog-data' {
  const data: import('./utils/changelog-parser').ComponentChangelogs
  export default data
}
