import { loadChangelog } from '../utils/changelog-parser'

import type { Plugin } from 'vite'

const VIRTUAL_MODULE_ID = 'virtual:component-changelog-data'
const RESOLVED_VIRTUAL_MODULE_ID = `\0${VIRTUAL_MODULE_ID}`

export function ComponentChangelogPlugin(): Plugin {
  let changelogData: string

  return {
    name: 'element-plus-component-changelog',

    async buildStart() {
      const data = await loadChangelog()
      changelogData = JSON.stringify(data)
    },

    resolveId(id) {
      if (id === VIRTUAL_MODULE_ID) {
        return RESOLVED_VIRTUAL_MODULE_ID
      }
    },

    load(id) {
      if (id === RESOLVED_VIRTUAL_MODULE_ID) {
        return `export default ${changelogData}`
      }
    },
  }
}
