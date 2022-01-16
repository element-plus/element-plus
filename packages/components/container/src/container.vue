<template>
  <section :class="{ [prefixClass]: true, 'is-vertical': isVertical }">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed } from 'vue'
import { usePrefixClass } from '@element-plus/hooks'
import type { Component, VNode } from 'vue'

export default defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      default: '',
    },
  },
  setup(props, { slots }) {
    const prefixClass = usePrefixClass('container')

    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some((vNode) => {
          const tag = (vNode.type as Component).name
          return tag === 'ElHeader' || tag === 'ElFooter'
        })
      } else {
        return false
      }
    })
    return {
      prefixClass,
      isVertical,
    }
  },
})
</script>
