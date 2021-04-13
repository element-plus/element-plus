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
        beforeEnter(el) {
          el.style.opacity = 0.2
        },

        enter(el, done) {
          addClass(el, 'el-opacity-transition')
          el.style.opacity = 1
          done()
        },

        afterEnter(el) {
          removeClass(el, 'el-opacity-transition')
          el.style.opacity = ''
        },

        beforeLeave(el) {
          if (!el.dataset) el.dataset = {}

          if (hasClass(el, 'el-menu--collapse')) {
            removeClass(el, 'el-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            addClass(el, 'el-menu--collapse')
          } else {
            addClass(el, 'el-menu--collapse')
            el.dataset.oldOverflow = el.style.overflow
            el.dataset.scrollWidth = el.clientWidth
            removeClass(el, 'el-menu--collapse')
          }

          el.style.width = el.scrollWidth + 'px'
          el.style.overflow = 'hidden'
        },

        leave(el) {
          addClass(el, 'horizontal-collapse-transition')
          el.style.width = el.dataset.scrollWidth + 'px'
        },
      },
    }
  },
})
</script>
