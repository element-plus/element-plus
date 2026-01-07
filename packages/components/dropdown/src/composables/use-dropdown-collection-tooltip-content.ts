import { onBeforeUnmount, onMounted } from 'vue'

import type { Ref } from 'vue'
import type { TooltipInstance } from '@element-plus/components/tooltip'

interface UseDropdownCollectionTooltipContentOptions {
  popperRef: Ref<TooltipInstance | undefined>
  addPopperContent: (el?: HTMLElement) => void
  removePopperContent: (el?: HTMLElement) => void
}

export function useDropdownCollectionTooltipContent({
  popperRef,
  addPopperContent,
  removePopperContent,
}: UseDropdownCollectionTooltipContentOptions) {
  onMounted(() => {
    addPopperContent(popperRef.value?.contentRef?.contentRef?.popperContentRef)
  })

  onBeforeUnmount(() => {
    removePopperContent(
      popperRef.value?.contentRef?.contentRef?.popperContentRef
    )
  })
}
