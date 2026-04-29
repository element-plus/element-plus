import { onMounted, ref } from 'vue'

const cache = new Map<string, { count: number; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

export const useIssueCount = (component: string) => {
  const count = ref<number | null>(null)
  const loading = ref(false)

  const fetchCount = async () => {
    const cached = cache.get(component)
    if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
      count.value = cached.count
      return
    }

    loading.value = true
    try {
      const q = encodeURIComponent(
        `repo:element-plus/element-plus is:open is:issue in:title [${component}]`
      )
      const res = await fetch(
        `https://api.github.com/search/issues?q=${q}&per_page=1`
      )
      if (res.ok) {
        const data = await res.json()
        const total = data.total_count ?? 0
        count.value = total
        cache.set(component, { count: total, timestamp: Date.now() })
      } else {
        count.value = 0
      }
    } catch {
      count.value = 0
    } finally {
      loading.value = false
    }
  }

  onMounted(() => {
    fetchCount()
  })

  return { count, loading }
}
