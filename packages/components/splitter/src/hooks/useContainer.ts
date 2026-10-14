import { computed, ref } from 'vue'
import { useElementSize } from '@vueuse/core'

import type { Ref } from 'vue'

export function useContainer(layout: Ref<'horizontal' | 'vertical'>) {
  const containerEl = ref<HTMLDivElement>()
  const { width, height } = useElementSize(containerEl)

  const containerSize = computed(() => {
    return layout.value === 'horizontal' ? width.value : height.value
  })

  return { containerEl, containerSize }
}
