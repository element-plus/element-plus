<template>
  <transition mode="out-in" v-on="on">
    <slot></slot>
  </transition>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import { addClass, removeClass, hasClass } from '@element-plus/utils/dom'

export default defineComponent({
  name: 'ElMenuCollapseTransition',
  setup() {
    return {
      on: {
        beforeEnter(el: HTMLElement) {
          el.style.opacity = '0.2'
        },

        enter(el: HTMLElement, done) {
          addClass(el, 'el-opacity-transition')
          el.style.opacity = '1'
          done()
        },

        afterEnter(el: HTMLElement) {
          removeClass(el, 'el-opacity-transition')
          el.style.opacity = ''
        },

        beforeLeave(el: HTMLElement) {
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

        leave(el: HTMLElement) {
          addClass(el, 'horizontal-collapse-transition')
          el.style.width = `${el.dataset.scrollWidth}px`
        },
      },
    }
  },
})
</script>
