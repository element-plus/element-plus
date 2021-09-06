import { computed } from 'vue'
import { useData } from 'vitepress'
import {
  endingSlashRE,
  isExternal,
} from 'vitepress/dist/client/theme-default/utils'

import type { Ref } from 'vue'

export const useSourceCode = (path: Ref<string>) => {
  const { theme } = useData()

  const demoUrl = computed(() => {
    const {
      repo,
      docsDir = '',
      docsBranch = 'master',
      docsRepo = repo,
    } = theme.value

    return createGitHubUrl(repo, docsRepo, docsDir, docsBranch, path.value)
  })

  return demoUrl
}

function createGitHubUrl(repo, docsRepo, docsDir, docsBranch, path) {
  const base = isExternal(docsRepo)
    ? docsRepo
    : `https://github.com/${docsRepo}`
  return (
    base.replace(endingSlashRE, '') +
    `/edit` +
    `/${docsBranch}/` +
    (docsDir ? docsDir.replace(endingSlashRE, '') + '/' : '') +
    'examples/' +
    path +
    '.vue'
  )
}
