<template>
  <transition mode="out-in" v-bind="listeners">
    <slot />
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass, hasClass } from '@element-plus/utils/dom'

import type { TransitionProps, BaseTransitionProps } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'

export default defineComponent({
  name: 'ElMenuCollapseTransition',
  setup() {
    const opacityPrefixClass = usePrefixClass('el-opacity-transition')
    const menuCollapsePrefixClass = usePrefixClass('el-menu--collapse')
    const listeners = {
      onBeforeEnter: (el) => (el.style.opacity = '0.2'),
      onEnter(el, done) {
        addClass(el, opacityPrefixClass.value)
        el.style.opacity = '1'
        done()
      },

      onAfterEnter(el) {
        removeClass(el, opacityPrefixClass.value)
        el.style.opacity = ''
      },

      onBeforeLeave(el) {
        if (!el.dataset) {
          ;(el as any).dataset = {}
        }

        if (hasClass(el, menuCollapsePrefixClass.value)) {
          removeClass(el, menuCollapsePrefixClass.value)
          el.dataset.oldOverflow = el.style.overflow
          el.dataset.scrollWidth = el.clientWidth.toString()
          addClass(el, menuCollapsePrefixClass.value)
        } else {
          addClass(el, menuCollapsePrefixClass.value)
          el.dataset.oldOverflow = el.style.overflow
          el.dataset.scrollWidth = el.clientWidth.toString()
          removeClass(el, menuCollapsePrefixClass.value)
        }

        el.style.width = `${el.scrollWidth}px`
        el.style.overflow = 'hidden'
      },

      onLeave(el: HTMLElement) {
        addClass(el, 'horizontal-collapse-transition')
        el.style.width = `${el.dataset.scrollWidth}px`
      },
    } as BaseTransitionProps<HTMLElement> as TransitionProps

    return {
      listeners,
    }
  },
})
</script>
