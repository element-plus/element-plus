import { watch } from 'vue'

import type { Ref } from 'vue'
import type { MenuProps } from './menu'

export default function useMenuCollapseTransition(
  props: MenuProps,
  menu: Ref<HTMLUListElement | undefined>
) {
  watch(
    () => props.collapse,
    () => {
      if (props.mode === 'vertical') {
        const el = menu.value
        if (el) {
          if (!el.dataset) (el as any).dataset = {}
          el.dataset.oldOverflow = el.style.overflow
          el.style.overflow = 'hidden'
        }
      }
    }
  )

  const handleTransitionend = () => {
    const el = menu.value
    if (el) {
      el.style.overflow = el.dataset.oldOverflow ?? ''
      delete el.dataset.oldOverflow
    }
  }

  return {
    handleTransitionend,
  }
}
