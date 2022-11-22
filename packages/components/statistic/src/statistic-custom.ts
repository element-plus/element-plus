import { computed } from 'vue'
import { useNamespace } from '@element-plus/hooks'
export function useStatisticCustomStyle() {
  const ns = useNamespace('statistic')

  return computed(() => {
    let styles: Record<string, string> = {}
    styles = ns.cssVarBlock({})
    return styles
  })
}
