<template>
  <transition mode="out-in" v-bind="listeners">
    <slot />
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass, hasClass } from '@element-plus/utils-v2'

import type { TransitionProps, BaseTransitionProps } from 'vue'

export default defineComponent({
  name: 'ElMenuCollapseTransition',
  setup() {
    const listeners = {
      onBeforeEnter: (el) => (el.style.opacity = '0.2'),
      onEnter(el, done) {
        addClass(el, 'el-opacity-transition')
        el.style.opacity = '1'
        done()
      },

      onAfterEnter(el) {
        removeClass(el, 'el-opacity-transition')
        el.style.opacity = ''
      },

      onBeforeLeave(el) {
        if (!el.dataset) {
          ;(el as any).dataset = {}
        }

        if (hasClass(el, 'el-menu--collapse')) {
          removeClass(el, 'el-menu--collapse')
          el.dataset.oldOverflow = el.style.overflow
          el.dataset.scrollWidth = el.clientWidth.toString()
          addClass(el, 'el-menu--collapse')
        } else {
          addClass(el, 'el-menu--collapse')
          el.dataset.oldOverflow = el.style.overflow
          el.dataset.scrollWidth = el.clientWidth.toString()
          removeClass(el, 'el-menu--collapse')
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
