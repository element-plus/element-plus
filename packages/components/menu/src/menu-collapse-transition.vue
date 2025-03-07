<template>
  <transition mode="out-in" v-bind="listeners">
    <slot />
  </transition>
</template>
<script lang="ts" setup>
import { useNamespace } from '@element-plus/hooks'
import { addClass, hasClass, removeClass } from '@element-plus/utils'
import type { BaseTransitionProps, TransitionProps } from 'vue'

defineOptions({
  name: 'ElMenuCollapseTransition',
})

const ns = useNamespace('menu')
const listeners = {
  onBeforeEnter: (el) => (el.style.opacity = '0.2'),
  onEnter(el, done) {
    addClass(el, `${ns.namespace.value}-opacity-transition`)
    el.style.opacity = '1'
    done()
  },

  onAfterEnter(el) {
    removeClass(el, `${ns.namespace.value}-opacity-transition`)
    el.style.opacity = ''
  },

  onBeforeLeave(el) {
    if (!el.dataset) (el as any).dataset = {}

    if (hasClass(el, ns.m('collapse'))) {
      removeClass(el, ns.m('collapse'))
      el.dataset.oldOverflow = el.style.overflow
      el.dataset.scrollWidth = el.clientWidth.toString()
      addClass(el, ns.m('collapse'))
    } else {
      addClass(el, ns.m('collapse'))
      el.dataset.oldOverflow = el.style.overflow
      el.dataset.scrollWidth = el.clientWidth.toString()
      removeClass(el, ns.m('collapse'))
    }

    el.style.width = `${el.scrollWidth}px`
    el.style.overflow = 'hidden'
  },

  onLeave(el: HTMLElement) {
    addClass(el, 'horizontal-collapse-transition')
    el.style.width = `${el.dataset.scrollWidth}px`
  },
} as BaseTransitionProps<HTMLElement> as TransitionProps
</script>
