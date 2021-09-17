import { computed } from 'vue'
import { useData } from 'vitepress'
import { createGitHubUrl } from '../utils'

export function useEditLink() {
  const { page, theme, frontmatter } = useData()
  const url = computed(() => {
    const {
      repo,
      docsDir = '',
      docsBranch = 'dev',
      docsRepo = repo,
      editLinks,
    } = theme.value
    const showEditLink =
      frontmatter.value.editLink != null
        ? frontmatter.value.editLink
        : editLinks
    const { relativePath } = page.value
    if (!showEditLink || !relativePath || !repo) {
      return null
    }
    return createGitHubUrl(docsRepo, docsDir, docsBranch, relativePath, '', '')
  })
  const text = computed(() => {
    return theme.value.editLinkText || 'Edit this page'
  })
  return {
    url,
    text,
  }
}
