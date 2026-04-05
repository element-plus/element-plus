import { computed } from 'vue'
import { useElementSize } from '@vueuse/core'

import type { Ref, TemplateRef } from 'vue'

export function useContainer(
  layout: Ref<'horizontal' | 'vertical'>,
  containerEl: TemplateRef<HTMLDivElement>
) {
  const { width, height } = useElementSize(containerEl)

  const containerSize = computed(() => {
    return layout.value === 'horizontal' ? width.value : height.value
  })

  return { containerSize }
}
