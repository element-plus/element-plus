<template>
  <section :class="['el-container', isVertical ? 'is-vertical' : '']">
    <slot></slot>
  </section>
</template>
<script lang="ts">
import { defineComponent, computed, VNode } from 'vue'

export default defineComponent({
  name: 'ElContainer',
  props: {
    direction: {
      type: String,
      default: '',
      validator(val: string): boolean {
        return ['horizontal', 'vertical'].indexOf(val) !== -1
      },
    },
  },
  setup(props, { slots }) {
    const isVertical = computed(() => {
      if (props.direction === 'vertical') {
        return true
      } else if (props.direction === 'horizontal') {
        return false
      }
      if (slots && slots.default) {
        const vNodes: VNode[] = slots.default()
        return vNodes.some((vNode) => {
          const tag = vNode.type.name
          return tag === 'ElHeader' || tag === 'ElFooter'
        })
      } else {
        return false
      }
    })
    return {
      isVertical,
    }
  },
})
</script>
