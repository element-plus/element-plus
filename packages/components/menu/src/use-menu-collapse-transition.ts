import { computed, watch } from 'vue'
import { addClass, removeClass } from '@element-plus/utils'

import type { Ref } from 'vue'
import type { MenuProps } from './menu'

export default function useMenuCollapseTransition(
  props: MenuProps,
  menu: Ref<HTMLUListElement | undefined>
) {
  const isCollapseTransition = computed(() => {
    return props.mode === 'vertical' && props.collapseTransition
  })

  watch(
    () => props.collapse,
    () => {
      const el = menu.value
      if (isCollapseTransition.value && el) {
        addClass(el, 'horizontal-collapse-transition')
      }
    },
    {
      flush: 'post',
    }
  )

  const handleTransitionend = (event: TransitionEvent) => {
    if (event.propertyName !== 'width') {
      return
    }
    const el = menu.value
    if (isCollapseTransition.value && el) {
      removeClass(el, 'horizontal-collapse-transition')
    }
  }

  return {
    handleTransitionend,
  }
}
