import { computed } from 'vue'
import { useData } from 'vitepress'
import { useLang } from '../composables/lang'
import { useLocale } from '../composables/locale'
import { defaultLang } from '../constant'
import { createCrowdinUrl, createGitHubUrl } from '../utils'
import editLinkLocale from '../../i18n/component/edit-link.json'
import { isNil } from 'lodash-unified'

export function useEditLink() {
  const { page, theme, frontmatter } = useData()
  const lang = useLang()
  const editLink = useLocale(editLinkLocale)

  const canEditSource = computed(() => {
    return lang.value === defaultLang
  })

  const url = computed(() => {
    if (canEditSource.value) {
      const {
        repo,
        docsDir = '',
        docsBranch = 'dev',
        docsRepo = repo,
        editLinks,
      } = theme.value
      const showEditLink = isNil(frontmatter.value.editLink)
        ? editLinks
        : frontmatter.value.editLink
      const { relativePath } = page.value
      if (!showEditLink || !relativePath || !repo) {
        return null
      }
      return createGitHubUrl(
        docsRepo,
        docsDir,
        docsBranch,
        relativePath,
        '',
        ''
      )
    }

    return createCrowdinUrl(lang.value)
  })
  const text = computed(() => {
    return canEditSource.value
      ? editLink.value['edit-on-github']
      : editLink.value['edit-on-crowdin']
  })

  return {
    url,
    text,
  }
}
