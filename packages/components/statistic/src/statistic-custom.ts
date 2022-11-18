import { computed } from 'vue'
import { useDisabled, useNamespace } from '@element-plus/hooks'
export function useStatisticCustomStyle(props) {
  const ns = useNamespace('statistic')

  return computed(() => {
    let styles: Record<string, string> = {}
    styles = ns.cssVarBlock({
      color: 'red',
    })
    return styles
  })
}
