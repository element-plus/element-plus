import { useRoute, useData } from 'vitepress'
import { ref, watch } from 'vue'
import { resolveHeaders, resolveLink } from '../utils/toc'

export const useToc = () => {
  const route = useRoute()
  const { site, frontmatter } = useData()

  const mappedHeaders = ref([])

  watch(
    () => route.data.relativePath,
    () => {
      const { headers } = route.data
      mappedHeaders.value = resolveHeaders(headers || [])
    },
    {
      immediate: true,
    }
  )

  return mappedHeaders
}
